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
  // state = {
  //   places: [],
  //   selectedPlace: null
  // };

  placeAddedHandler = placeName => {
    // alert('placeAddedHandler ' + placeName);

    this.props.onAddPlace(placeName);
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.concat({
    //       key: Math.random().toString(),
    //       name: placeName,
    //       image: {
    //         uri:
    //           'https://thumbs.dreamstime.com/b/joker-face-s-batman-movie-isolated-white-background-58693590.jpg'
    //       }
    //     })
    //   };
    // });
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
    // this.setState(prevState => {
    //   return {
    //     places: prevState.places.filter(place => {
    //       return place.key !== prevState.selectedPlace.key;
    //     }),
    //     selectedPlace: null
    //   };
    // });
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
    // this.setState({
    //   selectedPlace: null
    // });
  };

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
    // this.setState(prevState => {
    //   return {
    //     selectedPlace: prevState.places.find(place => {
    //       return place.key === key;
    //     })
    //   };
    // });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
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
