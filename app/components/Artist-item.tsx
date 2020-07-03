import React, {Component} from 'react';
import {ListItem, Text} from 'react-native-elements';
import {Artist} from 'app/core/models/Artist.model';
import NumberFormat from 'react-number-format';
import {connect} from 'react-redux';
import {goToArtistDetails} from './../core/store/effects/artist.effects';
interface ArtistItemProps {
  artist: Artist;
  goToArtistDetails: any;
}

class ArtistItemComponent extends Component<ArtistItemProps> {
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
          this.props.goToArtistDetails(artist);
        }}
        bottomDivider
        chevron
      />
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    goToArtistDetails: (artist: Artist) => {
      return dispatch(goToArtistDetails(artist));
    },
  };
};

export default connect(null, mapDispatchToProps)(ArtistItemComponent);
