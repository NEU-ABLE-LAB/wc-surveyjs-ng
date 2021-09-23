# SurveyJS Web Component created with Angular Elements

Two Angular projects are contained herein: `components` and `elements`. The `components` project creates an Angular Component that contains [SurveyJS](surveyjs.io/). This component is consumed by the `elements` project transforming it into an Angular Element (aka [web component](https://www.webcomponents.org/introduction));

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.6.

## Development

The primary purpose of this is to produce a SurveyJS webcomponent. The Angular component is simply a perhaps useful byproduct that must be built to produce the web component.

### Watch server

The following will locally serve the web component for development purposes. We need to run two builders since the component must be built before building the element.

In one shell, run `npm run watch:components`. This will continuously rebuild the component as the source files in `projects/components` are changed. Keep this shell open and running. Note, this command does not create any web server.

In another shell, run `npm run watch:elements`. This will continuously rebuild the component as the source files in `projects/components` are changed. Keep this shell open and running. This will also create a local web server to view the test page locally. See the command output for port number.

### Build the Web Component

Run `npm run build:elements` to build the `dist/elements/` directory that contains the following files (among others). This will also build the Angular component. 

* `elements.js`: The definition of the element. This must be imported when using the web component. This is a concatenation of `main.js`, `polyfills.js`, and `runtime.js` files that are also in this folder.
* `package.json`: The npm package description. When the web component is used in a project that uses rollup, this file is necessary for rollup to find dependencies.
* `index.html`: a demo page of the web component

*NOTE*: If using a Windows Machine, this command must be run in bash or WSL since it uses the non-Windows-native `cat` command.

View the web component on a test server by running `npm run serve:elements`.

### Publish the Web Component

We wish to publish the generally reusable Web Component, not the Angular Component. This is done with the following command:

```bash
npm publish ./dist/elements
```

This publishes the package definition found in `projects/elements/package.json` that is copied to the `dist/elements` directory by the `npm run build:elements` command. 
