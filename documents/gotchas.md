# Generelles Debugging
Unter node_modules\@angular\compiler\bundles\compiler.umd.js den Fehler suchen
Hier kann mit __console.info('test1234');__ etc. gearbeitet werden

# Node Sass could not find a binding for your current environment
Execute the following command in the Shell: 
npm rebuild node-sass

# Encountered undefined provider! Usually this means you have a circular dependencies (might be caused by using 'barrel' index.ts files.
This means, a barrel exports the same file twice.

# Failed: Can't resolve all parameters for xxx: ([object Object], ?, [object Object], [object Object]).
This error defines, that TypeScript can't get the Type of the object located at the ? position.
This can be a problem directly at this location or the service itself has a problem, since TypeScript parses the whole dependency tree.

Usually, the barrels cause the problem here, therefore the imports should get checked. 

# Error encountered in metadata generated for exported symbol 'xxx'
https://github.com/ng-packagr/ng-packagr/issues/641

# Cannot read property 'module' of undefined
Kann vorkommen, wenn ein Service in einem Modul registiert wird, wobei dieser zuerst mit * dann namentlich exportiert wird, alo bei namentlichen Re-Exports.
Beispiel Fehler:
```
export { ValidatorFactoryService, IValidator } from './services';
```

Klappt:
```
export * from './services';
```

# Unexpected value 'undefined' exported by the module 
Spezifiziert ein Problem bei den Providers im Module. Vorgehen 1.
1. Wie in Generelles Debugging beschrieben den Fehler suchen
1. Den Typ loggen via __console.info(type);__
1. Builden
1. Dies zeigt so was wie:
```
ngModule:
   StaticSymbol {
     filePath:
      'C:/MyGit/Personal/ContainerTesting/WebUI/node_modules/@drmueller/ng-rx-forms/drmueller-ng-rx-forms.d.ts',
     name: 'NgRxFormsModule',
     members: [] },
  providers: [ null, undefined, undefined ] }
```
---> Hier sieht man die Providers, und dass sie null / undefined / undefined sind.


# Barrels in Libraries
Barrels gehen in Libraries nur, wenn sie via /index-file exportiert werden.


# Links
https://medium.com/@andreasonny83/angular-component-library-the-definitive-guide-91b43ac5e3af 
https://codewithstyle.info/creating-angular-npm-packages-with-ng-packagr/ 