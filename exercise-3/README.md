# Hands-on React Workshop - Exercise 3 - Passing Data from Parent to Child

Time to start making our app!

First we'll learn how to pass information from parent to child.

## Objectives

* Be able to use the `setState` method to manage and change state
* Be able to pass information from parent to child via props

## Getting Started

```js
yarn install // or npm install
yarn dev
```

Open up `localhost:8080` in your browser.

## Instructions

You'll notice that we deprecated our `Title` component and simply added it into `App`. Not everything needs to be a component 😄

The app we are going to create is a random gif generator using Giphy's free API. You can see an example of it here. I'm not designer, so please PLEASE make it look pretty!

### Giving `App` Some State

We want a nice image to appear right when we open up the app. This picture is going to change depending on what we search for, so let's make the picture part of our app's *state*.

In `components/App.jsx`, initialize `state` with:

* an image property set to this link: `https://media.giphy.com/media/12zV7u6Bh0vHpu/giphy.gif`.
* a query property set to the string: "Search!"

### Create Child `GiphyContainer`

We want our image to appear on the page. Let's create another component that simply displays the chosen image and also the current search term.

Because this component only receives information, instead of creating a new class, let's create a simple function that returns a React element.

1. In the new file `components/GiphyContainer.jsx`, export a function called `GiphyContainer` that takes props and returns a div that has the image and search term.

Example Skeleton:

```html
<div>
  <h2></h2> // <--- this is where the current search term should appear
  <img /> // <--- make a gif appear!
</div>
```

### Connecting Parent to Child

1. Underneath `<h1>`, add in your new `GiphyContainer` component and pass in the image url as a prop.
1. In `GiphyContainer`, make the image appear by using the prop that you just passed yourself. Your image should appear!

### Fetch Data

We want to be able to fetch more gifs using Giphy's awesome APIs.

To save you the headache of reading through Giphy's docs (although they're really nice--go Giphy!), we provided you with the code snippet here to fetch a random gif:

```js
const URL = "http://api.giphy.com/v1/gifs/random?" +
      "api_key=9HDQc04ELow7kn8m7L78fMhCbNtK00QG";

    fetch(URL).then(res => res.json()).then(({ data }) => {
      /* YOUR CODE TO SET STATE */
    });
```

> If you're experience issues with the API, replace the api key with your own.

The way this will theoretically work is that anytime we search for a new gif, these things will happen:

* The search term state will change
* We make a request to Giphy and when they return the result, we change the image url state.