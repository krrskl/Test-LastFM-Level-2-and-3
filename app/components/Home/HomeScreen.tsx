import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import HomeStyles from './styles';

const HomeScreen: React.FC = () => {
  return (
    <View style={HomeStyles.mainContainer}>
      <Text h3>Bienvenido!</Text>
      <Text style={HomeStyles.center}>
        <Text>Esta app fue desarrollada por {'\n'} </Text>
        <Text style={HomeStyles.bold}>Rubén Carrascal </Text>
        <Text>para </Text>
        <Text style={HomeStyles.bold}>valid.com</Text>
      </Text>
    </View>
  );
};

export default HomeScreen;
