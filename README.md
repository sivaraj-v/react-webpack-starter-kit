# Webpack 5 Boilerplate

A ready to use simple webpack boilerplate.

## Instructions

1.  Clone this repo
2.  Run `npm install`
3.  Run `npm start`, **localhost:8080** will open up in your default browser

**If you prefer to install things yourself you can follow the instructions below**

1.  Install the following:
```
npm install -g webpack webpack-cli
npm install
```
2. Update your scripts to the following:
```
"start": "webpack-dev-server --mode development --open",
"build": "webpack --mode production"
```
3. Create **.babelrc** file with the following configurations:
```
{
  "presets": ["env", "react"]
}
```
4. Create **webpack.config.js** file with the following configurations:
```
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html'
    })
  ]
};

```
5. Create **src** folder with **index.js** and **index.html** file.
6. **index.js** should have:
```
import React from 'react';
import ReactDOM from 'react-dom';

const Index = () => {
  let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
  console.log(x); // 1
  console.log(y); // 2
  console.log(z); // { a: 3, b: 4 }
  [5, 6].map((n) => console.log(n));
  return <div>Hello React!</div>;
};
ReactDOM.render(<Index />, document.getElementById('index'));

```
7. **index.html** should have:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>React and Webpack4</title>
</head>
<body>
  <section id="index"></section>
</body>
</html>
```
8. Create **.gitignore** file and input **/node_modules/** and **/dist**.

## Feature
1. HtmlWebpackPlugin custom header configuration
2. ProgressPlugin added
![N|Solid](https://i.ibb.co/VYmkC2C/Screenshot-2020-05-07-at-4-08-57-PM.png)
3. Added Lodash and chuck build are added
![N|Solid](https://i.ibb.co/8m6xHYr/Screenshot-2020-05-07-at-4-14-21-PM.png)
![N|Solid](https://i.ibb.co/6mgM7h1/Screenshot-2020-05-07-at-4-16-31-PM.png)



Next Updated
https://stackoverflow.com/questions/64557638/how-to-polyfill-node-core-modules-in-webpack-5