# Hands-on React Workshop - Exercise 2

Whoa! Things got a little more complicated. In this folder, we've added in babel, webpack, and are using `webpack-dev-server`. Both `.babelrc` and `webpack.config.js` are configured for you.

Feel free to use the code you wrote in `exercise-1`, but if you would like to use mine, you can use the following:

```js
class App extends React.Component {
  render() {
    return React.createElement('div', { className: 'app' }, Title);
  }
}

const Title = React.createElement('h1', null, 'Random Giphy Finder');

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
);
```

We have already divided up the above code into three files for organization.

## Objectives

* Be able to read and write using JSX
* Create simple React component using ES6 classes
* Create simple React components using functions
* Get familiar with what a simple Babel and Webpack config may look like and how it can work

## Getting Started

```js
yarn install // or npm install
yarn dev
```

Open up `localhost:8080` in your browser.

## Instructions

Do the following with a partner:

1. Run the above.
1. Notice that our files are not `.js` files anymore--they are `.jsx`! How is the browser able to read these?
1. Take a look in `index.html`--how is our code getting added? Where can we find `bundle.js`?

Do the following solo or with a partner:

1. Convert the code from regular JavaScript to JSX!
1. Things are looking a little grim! The webpack configuration accommodates SCSS and CSS. Add some in!

## Resources

* [JSX Docs](https://kapeli.com/dash_share?docset_file=React&docset_name=React&path=reactjs.org/docs/introducing-jsx.html&platform=react&repo=Main&source=reactjs.org/docs/introducing-jsx.html&version=16.6.3)
* [React Components](https://reactjs.org/docs/react-api.html#reactcomponent)