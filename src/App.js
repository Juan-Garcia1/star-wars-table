import React, { Component } from 'react';
import './App.css';

import Characters from './components/Characters'

class App extends Component {
  state = {
    characters: []
  }

  fetchData = (link) => {
    fetch(link)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        characters: data.results,
        prev: data.previous,
        next: data.next
      })
    })
  }

  componentDidMount() {
    this.fetchData('https://swapi.co/api/people/?page=1')
  }

  moreResults = (link) => {
    this.fetchData(`${link}`)
  }

  render() {
    const { characters, next, prev } = this.state
    return (
      <div className="app">
        <Characters characters={characters} />

        <div id="pagination">
          {
          prev && 
          <button 
          onClick={() => this.moreResults(prev)}>
          Prev
          </button>
        }
          {next && 
          <button 
          onClick={() => this.moreResults(next)}>
          Next
          </button>}
        </div>
      </div>
    );
  }
}

export default App;
