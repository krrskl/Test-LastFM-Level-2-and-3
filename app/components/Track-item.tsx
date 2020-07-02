import React, {Component} from 'react';
import {ListItem, Text} from 'react-native-elements';
import {Track} from 'app/core/models/Track.model';
import NumberFormat from 'react-number-format';
import {Navigation} from 'react-native-navigation';
interface TrackItemProps {
  track: Track;
}

export default class TrackItemComponent extends Component<TrackItemProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {track} = this.props;
    return (
      <ListItem
        key={track.mbid}
        title={track.name}
        subtitle={
          <NumberFormat
            value={track.listeners}
            displayType={'text'}
            thousandSeparator={true}
            renderText={(value) => <Text>{value}</Text>}
          />
        }
        leftAvatar={{source: {uri: track.image[0]['#text']}}}
        onPress={() => {
          this.viewDetails(track);
        }}
        bottomDivider
        chevron
      />
    );
  }

  viewDetails(track: Track) {
    Navigation.push('TracksScreen', {
      component: {
        name: 'TrackDetailsScreen',
        id: 'TrackDetailsScreen',
        passProps: {
          track,
        },
        options: {
          topBar: {
            title: {
              text: `Detalles de ${this.props.track.name}`,
            },
          },
        },
      },
    });
  }
}
