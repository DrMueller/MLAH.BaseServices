import { Injectable } from '@angular/core';
import { HttpXhrBackend, HttpBackend } from '@angular/common/http';
import { LocalHttpService } from '../../http/http-base';

@Injectable()
export class AppSettingsProviderService<T> {
  private appSettings: T;

  public constructor(private http: LocalHttpService, private httpXhrBackend: HttpXhrBackend) {
  }

  public async provideAppSettingsAsync(relativeAppSettingsFilePath: string): Promise<T> {
    if (this.appSettings) {
      return Promise.resolve<T>(this.appSettings);
    }

    let httpBackend: HttpBackend | null = null;

    const configuredHttpBackend = (<any>this.http).httpClient.handler.backend;

    // We want to use the actual XhrBackend and not the fake one, therefore we overwrite it here
    if (!(configuredHttpBackend instanceof HttpXhrBackend)) {
      httpBackend = configuredHttpBackend;
      (<any>this.http).httpClient.handler.backend = this.httpXhrBackend;
    }

    // This path needs to be relative to the files in the dist-folder
    this.appSettings = await this.http.getAsync<T>(relativeAppSettingsFilePath);

    if (httpBackend) {
      (<any>this.http).httpClient.handler.backend = httpBackend;
      (<any>this.http).httpClient.handler.chain = null;
    }

    return this.appSettings;
  }
}
