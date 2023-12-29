import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


function catMenu({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button>
        <Text>Recomendaciones de Comida</Text>
      </Button>
      <Button
        title='Adopciones'
      />
      <Button
        title='Ayudas'
      />
      <Button
        title='Registrate'
      />
    </View>
  );
}



export default catMenu;
