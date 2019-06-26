import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const addItem = ({
  placeName,
  placeNameChangedHandler,
  placeSubmitHandler
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder='An awesome place'
        value={placeName}
        onChangeText={placeNameChangedHandler}
      />
      <Button
        style={styles.placeButton}
        title='Add'
        onPress={placeSubmitHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  }
});

export default addItem;
