import React, {Component} from 'react';
import {ListItem, Text} from 'react-native-elements';
import {Artist} from 'app/core/models/Artist.model';
import NumberFormat from 'react-number-format';
import {Navigation} from 'react-native-navigation';
interface ArtistItemProps {
  artist: Artist;
}

export default class ArtistItemComponent extends Component<ArtistItemProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    const {artist} = this.props;
    return (
      <ListItem
        key={artist.mbid}
        title={artist.name}
        subtitle={
          <NumberFormat
            value={artist.listeners}
            displayType={'text'}
            thousandSeparator={true}
            renderText={(value) => <Text>{value}</Text>}
          />
        }
        leftAvatar={{source: {uri: artist.image[0]['#text']}}}
        onPress={() => {
          this.viewDetails(artist);
        }}
        bottomDivider
        chevron
      />
    );
  }

  viewDetails(artist: Artist) {
    Navigation.push('ArtistScreen', {
      component: {
        name: 'ArtistDetailsScreen',
        id: 'ArtistDetailsScreen',
        passProps: {
          artist,
        },
        options: {
          topBar: {
            title: {
              text: `Detalles de ${this.props.artist.name}`,
            },
          },
        },
      },
    });
  }
}
