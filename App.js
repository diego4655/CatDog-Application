import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import catMenu from './Views/catMenu';
import LandingScreen from './Views/Landing';
import dogMenu from './Views/dogMenu';
import vetMenu from './Views/vetMenu';
import { View, Text,Button,StyleSheet } from 'react-native';





const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={LandingScreen} />
        <Stack.Screen name="Gatos" component={catMenu} />
        <Stack.Screen name="Perros" component={dogMenu}/>
        <Stack.Screen name="Vet" component={vetMenu}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
