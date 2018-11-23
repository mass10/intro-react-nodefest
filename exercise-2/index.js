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