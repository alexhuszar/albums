import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity
} from 'react-native';

class Button extends Component {

  handlePress() {
    console.log('It works or not?');
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handlePress}>
        <Text>
          Click me!
        </Text>
      </TouchableOpacity>
    )
  }
};

export default Button
