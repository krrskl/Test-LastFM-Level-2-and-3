import React, {Component} from 'react';
import {SafeAreaView, View, FlatList} from 'react-native';
import {Text, Badge, Card, Icon} from 'react-native-elements';
import {Track} from '../../core/models/Track.model';
import TrackDetailsStyles from './styles';
import NumberFormat from 'react-number-format';
import {connect} from 'react-redux';

interface TrackDetailsScreenProps {
  track: Track | null;
}

class TrackDetailsScreen extends Component<TrackDetailsScreenProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {track} = this.props;
    return (
      <SafeAreaView style={TrackDetailsStyles.mainContainer}>
        <View>
          <Text h3 style={TrackDetailsStyles.centerText}>
            {track?.name}
          </Text>
          <NumberFormat
            value={track?.listeners}
            displayType={'text'}
            thousandSeparator={true}
            renderText={(value) => (
              <Badge
                badgeStyle={TrackDetailsStyles.badgeListeners}
                status="primary"
                value={
                  <View style={TrackDetailsStyles.badgeContainer}>
                    <Icon name={'headset'} color={'#ffffff'} size={15} />
                    <Text style={TrackDetailsStyles.whiteText}> {value}</Text>
                  </View>
                }
              />
            )}
          />

          <Text style={TrackDetailsStyles.marginLeftText}>
            {'\n'}
            Total de imágenes:{' '}
            <Text style={TrackDetailsStyles.textBold}>
              {track?.image.length}
            </Text>
            {'\n'}
          </Text>

          <FlatList
            data={track?.image}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <Card
                key={index}
                title={item.size}
                image={{uri: item['#text']}}
                containerStyle={TrackDetailsStyles.col}
              />
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: any) => {
  const {tracksScreenStore} = state;
  return {
    track: tracksScreenStore.track,
  };
};

export default connect(mapStateToProps)(TrackDetailsScreen);
