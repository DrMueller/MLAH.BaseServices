import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SpyOf, provideMock } from '@drmueller/testing';

import { of } from 'rxjs';

import { ObjectFactoryService } from '../../../../public_api';
import { TestHttpService } from '../../../test-infrastructure/http/services';

describe('TestHttpService', () => {
  let sut: TestHttpService;
  let httpClientMock: SpyOf<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMock<HttpClient>(HttpClient),
        provideMock<ObjectFactoryService>(ObjectFactoryService),
        TestHttpService
      ]
    });
  });

  beforeEach(() => {
    sut = TestBed.get(TestHttpService);
    httpClientMock = TestBed.get(HttpClient);
  });

  it('should be created', (() => {
    expect(sut).toBeTruthy();
  }));

  describe('deleting', async () => {
    // Arrange
    const relativeUrl = 'test123';

    beforeEach(() => {
      httpClientMock.delete.and.returnValue(of());
    });

    // Act
    beforeEach(async () => {
      await sut.deleteAsync(relativeUrl);
    });

    // Assert
    it('Calls http client for deletion', () => {
      expect(httpClientMock.delete).toHaveBeenCalled();
    });

    it('Passes correct URL and options', () => {
      const expectedUrl = TestHttpService.BaseUrl + '/' + relativeUrl;
      const headers = new HttpHeaders();
      const expectedOptions = {
        headers: headers
      };

      expect(httpClientMock.delete).toHaveBeenCalledWith(expectedUrl, expectedOptions);
    });
  });
});
