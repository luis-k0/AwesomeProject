import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import placeImage from './src/assets/me.jpg';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace
} from './src/store/actions/index';

class App extends Component {
  // placeAddedHandler = placeName => {
  //   this.props.onAddPlace(placeName);
  // };

  // placeDeletedHandler = () => {
  //   this.props.onDeletePlace();
  // };

  // modalClosedHandler = () => {
  //   this.props.onDeselectPlace();
  // };

  // placeSelectedHandler = key => {
  //   this.props.onSelectPlace(key);
  // };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.props.onDeletePlace}
          onModalClosed={this.props.onDeselectPlace}
        />
        <PlaceInput
          onPlaceAdded={placeName => {
            this.props.onAddPlace(placeName);
          }}
        />
        <PlaceList
          places={this.props.places}
          onItemSelected={key => {
            this.props.onSelectPlace(key);
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispathToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: key => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App);
