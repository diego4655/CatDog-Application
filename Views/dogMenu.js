import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

function dogMenu({navigation}){
  return(
    <View style={styles.container}>
      <Text>Vista de perro</Text>
    </View>
  );
}

export default dogMenu;