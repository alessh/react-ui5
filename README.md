# React UI5

[![NPM](https://nodei.co/npm/react-ui5.png)](https://nodei.co/npm/react-ui5/)

[build-badge]: https://travis-ci.org/alessh/react-ui5.svg?branch=master
[build]: https://travis-ci.org/alessh/react-ui5

[npm-badge]: https://img.shields.io/npm/v/react-ui5.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-ui5

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A react based implementation of the SAP OpenUI5 framework (https://openui5.hana.ondemand.com).

###Installation
```javascript
npm install react-ui5 --save
```
###Use
```javascript
import sap from 'react-ui5'
```
###index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>React-UI5 App</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```
###App.js
```javascript
import React, { Component } from 'react';

import sap from 'react-ui5'

class App extends Component {
  render() {
    return (
      <sap.m.Shell>
        <sap.m.Page title="Page Demo" >
          <h1>SAP Page</h1>
        </sap.m.Page>

      </sap.m.Shell>
    );
  }
}

export default App;

```

![Sample](sample.gif)

Supported Components

| component | methods | progress |
| ------- | ---------------- | ------ |
| Shell  |  | 90% |
| Page | title | 80% |
| Button |  | 50% |
| TabContainer |  | 40% |
| SplitContainer |  | 30% |
| TabSplit |  | 20% |

```
<SplitContainer />
```
![Master Detail Page](page3.png)

```
<TabContainer />
```
![Table Container](page4.png)


