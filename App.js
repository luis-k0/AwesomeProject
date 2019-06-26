/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

import AddItem from './src/components/AddItem/AddItem';
import ListItems from './src/components/ListItems/ListItems';

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: '',
    places: []
  };

  placeNameChangedHandler = val => {
    this.setState({ placeName: val });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName),
        placeName: ''
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <AddItem
          placeName={this.state.placeName}
          placeNameChangedHandler={this.placeNameChangedHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <ListItems places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // like flex-grow
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 26,
    backgroundColor: '#F5FCFF'
  }
});
