import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, Button} from 'react-native-elements';
import HomeStyles from './styles';
import {Navigation} from 'react-native-navigation';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={HomeStyles.mainContainer}>
        <Text h3>Bienvenido!</Text>
        <Text style={HomeStyles.center}>
          {'\n'}
          <Text>Esta app fue desarrollada por {'\n'} </Text>
          <Text style={HomeStyles.bold}>Rubén Carrascal </Text>
          <Text>para </Text>
          <Text style={HomeStyles.bold}>valid.com</Text>
          {'\n'}
        </Text>

        <Button
          title="Artistas principales"
          buttonStyle={HomeStyles.roundedButton}
          onPress={() => {
            this.navToTopArtits();
          }}
        />
      </View>
    );
  }

  navToTopArtits() {
    Navigation.push('HomeScreen', {
      component: {
        name: 'ArtistScreen',
        options: {
          topBar: {
            title: {
              text: 'Top Artist',
            },
          },
        },
      },
    });
  }
}
