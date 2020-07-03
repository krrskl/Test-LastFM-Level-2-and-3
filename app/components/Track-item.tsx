import React, {Component} from 'react';
import {ListItem, Text} from 'react-native-elements';
import {Track} from './../core/models/Track.model';
import NumberFormat from 'react-number-format';
import {connect} from 'react-redux';
import {goToTrackDetails} from './../core/store/effects/track.effects';

interface TrackItemProps {
  track: Track;
  goToTrackDetails: any;
}

class TrackItemComponent extends Component<TrackItemProps> {
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
          this.props.goToTrackDetails(track);
        }}
        bottomDivider
        chevron
      />
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    goToTrackDetails: (track: Track) => {
      return dispatch(goToTrackDetails(track));
    },
  };
};

export default connect(null, mapDispatchToProps)(TrackItemComponent);
