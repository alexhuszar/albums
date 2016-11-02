import React, { Component, PropTypes } from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class Button extends Component {

  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string
  };

  static defaultProps = {
    onPress: () => {},
    text: 'Ok'
  };

  render() {
    const { props } = this;
    const { buttonStyle, textStyle } = styles;
    return (
      <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
        <Text style={textStyle} >
          {props.children || props.text}
        </Text>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    flex: 1
  }
});

export default Button
