# Hands-on React Workshop - Exercise 4 - Events & Passing Data from Child to Parent

Let's build the next half of our function. We want to be able to take search requests--so time to build a little form!

## Objectives

* Be able to use the `setState` method to manage and change state
* Be able to pass callbacks from parent to child via props and use these callbacks to send information back to the parent
* Use lambda functions to bind your methods

## Getting Started

```js
yarn install // or npm install
yarn dev
```

Open up `localhost:8080` in your browser.

## Instructions

### Create `SearchBar`

We want to create a small form so that users can interact with our app. In the file `components/SearchBar.jsx`, we pre-filled out a class for you to save you the hassle of having to look up form HTML info if you've forgotten.

Make the following happen!

1. Initialized with a state that keeps track of what's being inputted
1. Anytime there is a change in our input (`onChange`), we will update our state.
1. Once the user submits, we will run `handleSearch`, passing the input value to our parent component.

Remember to add this new component to App and pass in `handleSearch` as a property.

You may run into some problems with `this`. To bypass those issues, you can either bind your methods in the constructor or use lambda functions.

### Extra: History

It might be nice to have a list of prevous gifs. Create a component that will display a history of gifs.

You'll need to create a new state property to keep track of the history. Before you get started, think about which component you'll add this state to.