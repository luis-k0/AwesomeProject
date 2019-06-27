import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = props => {
  // const placesOutput = props.places.map((place, i) => (
  //   <ListItem
  //     key={i}
  //     placeName={place}
  //     onItemPressed={() => {
  //       props.onItemDeleted(i);
  //     }}
  //   />
  // ));
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={info => {
        <ListItem
          placeName={info.item.value}
          onItemPressed={() => {
            props.onItemDeleted(info.item.key);
          }}
        />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: '100%'
  }
});

export default placeList;
