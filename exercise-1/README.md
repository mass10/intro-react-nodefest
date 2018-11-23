# Hands-on React Workshop - Exercise 1

Using the functions `React.createElement` and `ReactDOM.render`, recreate the following DOM structure using React in `index.js`.

```html
<div class='app'>
  <h1>Random Giphy Finder</h1>
</div>
```

## Objectives

* Be able to use `React.createElement` to create a React element
* Be able to create a simple nested DOM structure using React
* Create a React class by extending off of `React.Component`
* Be able to add classes the React way
* Use `ReactDOM.render` to render React elements onto the browser

## Getting Started

Open up `./index.html` in a browser!

## Instructions

1. For the `div`, create a class `App` using `React.Component`. Don't forget to add the class.
2. For the `h1`, there is no need to use a class.
3. Using `ReactDOM.render`, render your `App` element on the `div` with the id `root` that can be found in `index.html`.

## Resources

This is what the function `React.createElement` expects as arguments.

```js
React.createElement(
  type,
  [props],
  [...children]
)
```

This is what the function `ReactDOM.render` expects as arguments.

```js
ReactDOM.render(element, container[, callback])
```

* [React.createElement docs](https://kapeli.com/dash_share?docset_file=React&docset_name=React&path=reactjs.org/docs/react-api.html%23createelement&platform=react&repo=Main&source=reactjs.org/docs/react-api.html&version=16.6.3)
* [ReactArmory's awesome post: React in Two Functions](NEED_LINK)