import React from 'react';
import { render } from 'react-dom';
import { View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  catIntro:{
    alignContent: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    marginBottom: 30,
  },
  dogIntro:{
    alignContent: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    marginTop: 30,
  },
  cardVeterinaria:{
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  }

});

function LandingScreen({ navigation }) {
  return (
    <ScrollView>
    <Card>
      <Card.Title>Gatos</Card.Title>
      <Card.Divider/>
      <Card.Image source={require('../images/GatoIntro.png')}/>
      <Text>
        Encuentra las mejores recomendaciones para tu gato
      </Text>
      <Button
        Icon={<Icon name='Cat' color='#16A0AB'/>}
        buttonStyle={styles.cardVeterinaria}
        title='Apartado Gatuno'
        activeOpacity={0.5}
        onPress={()=>navigation.navigate('Gatos')}
      />
    </Card>
    <Card>
    <Card.Title>Perros</Card.Title>
    <Card.Divider/>
    <Card.Image source={require('../images/PerroIntro.png')}/>
    <Text>
      Encuentra las mejores recomendaciones para tus perros
    </Text>
    <Button
      icon={<Icon name='dog' color='#16A0AB'/>}
      buttonStyle={styles.cardVeterinaria}
      title='Apartado Perruno'
      activeOpacity={0.5}
      onPress={()=>navigation.navigate('Perros')}/>
    </Card>
    <Card>
      <Card.Title>Veterinarias</Card.Title>
      <Card.Divider/>
      <Card.Image source={require('../images/Veterinaria.png')}/>
        <Text>
          Encuentra las mejores veterinarias en la ciudad
        </Text>
        <Button 
          icon={<Icon name='controller-play'color='#16A0AB'/>}
          buttonStyle={styles.cardVeterinaria}
          title='Continue a las Veterinarias'
          activeOpacity={0.5}
          onPress={()=>navigation.navigate('Vet')}/>
    </Card>
    </ScrollView>
  );
}

export default  LandingScreen;
