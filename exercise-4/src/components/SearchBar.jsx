import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    /* YOUR CODE HERE */
  }

  handleChange = event => {
    /* YOUR CODE HERE */
  }

  handleSubmit = event => {
    /* YOUR CODE HERE */
  }

  render() {
    return (
      <div className='input'>
        <form
          onSubmit={/* YOUR CODE HERE */}
        >
          <input
            type='text'
            placeholder='Search Giphy'
            value={/* YOUR CODE HERE */}
            onChange={/* YOUR CODE HERE */}  
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default SearchBar;
