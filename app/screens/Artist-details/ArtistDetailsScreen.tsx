import React, {Component} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {Text, Badge, Card, Icon} from 'react-native-elements';
import {Artist} from '../../core/models/Artist.model';
import ArtistDetailsStyles from './styles';
import NumberFormat from 'react-number-format';
import {connect} from 'react-redux';

interface ArtistDetailsScreenProps {
  artist: Artist | null;
}

class ArtistDetailsScreen extends Component<ArtistDetailsScreenProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {artist} = this.props;
    return (
      <SafeAreaView style={ArtistDetailsStyles.mainContainer}>
        <View>
          <Text h3 style={ArtistDetailsStyles.centerText}>
            {artist?.name}
          </Text>
          <NumberFormat
            value={artist?.listeners}
            displayType={'text'}
            thousandSeparator={true}
            renderText={(value) => (
              <Badge
                badgeStyle={ArtistDetailsStyles.badgeListeners}
                status="primary"
                value={
                  <View style={ArtistDetailsStyles.badgeContainer}>
                    <Icon name={'headset'} color={'#ffffff'} size={15} />
                    <Text style={ArtistDetailsStyles.whiteText}> {value}</Text>
                  </View>
                }
              />
            )}
          />

          <Text style={ArtistDetailsStyles.marginLeftText}>
            {'\n'}
            Total de imágenes:{' '}
            <Text style={ArtistDetailsStyles.textBold}>
              {artist?.image.length}
            </Text>
            {'\n'}
          </Text>

          <FlatList
            data={artist?.image}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <Card
                key={index}
                title={item.size}
                image={{uri: item['#text']}}
                containerStyle={ArtistDetailsStyles.col}
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => {
  const {artistsScreenStore} = state;
  return {
    artist: artistsScreenStore.artist,
  };
};

export default connect(mapStateToProps)(ArtistDetailsScreen);
