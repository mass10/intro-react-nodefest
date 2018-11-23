import React, { Component } from 'react';
import CurrentGif from './CurrentGif';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchWords: 'Search',
      image: ''
    }
  }

  handleSearch(searchWords = 'cat') {
    const URL = 'http://api.giphy.com/v1/gifs/random?' +
      `tag=${searchWords}` +
      '&api_key=9HDQc04ELow7kn8m7L78fMhCbNtK00QG';

    fetch(URL).then(res => res.json()).then(({ data }) => {
      const image = data.images.preview_gif.url;

      this.setState({
        searchWords,
        image
      });
    });
  }

  componentDidMount() {
    this.handleSearch();
  }

  render() {
      return (
        <div className='app'>
        <h1>Random Giphy Finder</h1>
        <CurrentGif
          searchWords={this.state.searchWords}
          image={this.state.image} 
        />
       }
      </div>
    );
  }
}

export default App;