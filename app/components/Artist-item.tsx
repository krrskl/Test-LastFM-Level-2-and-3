import React, {Component} from 'react';
import {ListItem} from 'react-native-elements';
import {Artist} from 'app/core/models/Artist.model';

interface ArtistItemProps {
  artist: Artist;
}

export default class ArtistItemComponent extends Component<ArtistItemProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <ListItem
        key={this.props.artist.mbid}
        title={this.props.artist.name}
        subtitle={this.props.artist.listeners}
        leftAvatar={{source: {uri: this.props.artist.image[0]['#text']}}}
        bottomDivider
        chevron
      />
    );
  }
}
