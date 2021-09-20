# SurveyJS Web Component created with Angular Elements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Working with the Angular Component

### Development server for Angular Component

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build Angular Component

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests on Angular Component

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests on Angular Component

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Working with the Angular Element (aka Web Component)

### Development server for Web Component

Run `npm run start:elements` to build the element and serve the distributable. Note that this only "looks for updates" of the files in the `dist/elements/` directory. Changes made to `src/` or `projects/` files require re-running this command.

### Build the Web Component

Run `npm run build:elements` to build the `dist/elements/` directory that contains the following (among others):

* `elements.js`: The definition of the element. This must be imported when using the web component. This is a concatenation of `main.js`, `polyfills.js`, and `runtime.js` files that are also in this folder.
* `package.json`: The npm package description. When the web component is used in a project that uses rollup, this file is necessary for rollup to find dependencies.
* `index.html`: a demo page of the web component

*NOTE*: If using a Windows Machine, this command must be run in bash or WSL since it uses the non-Windows-native `cat` command.

### Publish the Web Component

We wish to publish the generally reusable Web Component, not the Angular Component. This is done with the following command:

```bash
npm publish ./dist/elements
```

This publishes the package definition found in `projects/elements/package.json` that is copied to the `dist/elements` directory by the `npm run build:elements` command. 
