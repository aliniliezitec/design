# Design [![Build Status](https://travis-ci.org/naologic/design.svg?branch=master)](https://travis-ci.org/naologic/design) [![Known Vulnerabilities](https://snyk.io/test/github/naologic/design/badge.svg?targetFile=package.json)](https://snyk.io/test/github/naologic/design?targetFile=package.json)

This is the design library of Naologic


### Installation 

```npm install --save @naologic/design```

[![NPM](https://nodei.co/npm/@naologic/design.png)](https://nodei.co/npm/@naologic/design/)


### Add to your angular app

Modify the `angular.json` file and add `nao-system-icon font` to the SCSS 

```json
"styles": [
  "node_modules/@naologic/design/src/assets/fonts/nao-system-icon/nao-system-icon.css",
  "src/styles.scss"
],
```

Import the `@naologic/design` to your main styles.scss file
```css
@import "node_modules/@naologic/design/src/styles.scss";
```

### Use our loaders

Import in the app.module.ts
```typescript
  imports: [
    NaoDesignSystemModule.forRoot(),
```

And then import in the every module you would like to use the loaders
```typescript
  imports: [
    NaoDesignSystemModule,
```

### License 

_Made with :robot: by [Naologic](https://naologic.com)_
