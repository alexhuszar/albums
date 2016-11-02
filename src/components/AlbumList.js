
import React, { Component, PropTypes } from 'react';
import {
  Text,
  ScrollView,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  static propTypes = {
    headerText: PropTypes.string
  };

  static defaultProps = {
    headerText: '',
  };

  componentDidMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        this.setState({
          albums: response.data
        })
      })
  }

  renderAlbums() {
    return this.state.albums.map((album, index) => {
      return (
        <AlbumDetail key={album.title + '_' + index} {...album} />
      );
    })
  }

  render() {

    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList
