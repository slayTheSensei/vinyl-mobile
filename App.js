import React from 'react';
import axios from 'axios'

// Component Imports
import Vinyl from './components/Vinyl.js'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      artists: [],
    }
  }

    getArtists = () => {
      let self = this
    // GET Artists
    axios.get('https://vinyl-backend-api.herokuapp.com/artists').then(response => {
      this.setState({artists: response.data.artists})
      console.log(response.data.artists)
    }).catch(error => {
      console.log('Error fetching and parsing data', error)
    })
    }

    componentDidMount() {
      this.getArtists()
    }

  render() {
    return (
      <Vinyl artists={this.state.artists}/>
    );
  }
}
