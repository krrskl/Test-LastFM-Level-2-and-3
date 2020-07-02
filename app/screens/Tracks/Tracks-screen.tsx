import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import {TrackService} from '../../core/services/track-service';
import {TracksResponse} from '../../core/models/Tracks-response.model';
import {Track} from '../../core/models/Track.model';
import {WaveIndicator} from 'react-native-indicators';
import TracksStyles from './styles';
import TracksItemComponent from '../../components/Track-item';

interface TracksScreenState {
  loading: boolean;
  tracks: Track[];
}

export default class TracksScreen extends Component<any, TracksScreenState> {
  trackService = new TrackService();
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      tracks: [],
    };
  }

  render() {
    const {loading, tracks} = this.state;
    return (
      <SafeAreaView style={TracksStyles.mainContainer}>
        <ScrollView>
          {loading ? (
            <WaveIndicator
              count={1}
              waveFactor={0.1}
              color={'rgb(29, 38, 54)'}
              size={60}
            />
          ) : tracks.length === 0 ? (
            <Text style={TracksStyles.centerText}>
              No hay elementos para mostrar aquí.
            </Text>
          ) : (
            tracks.map((item, i) => (
              <TracksItemComponent key={i} track={item} />
            ))
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  componentDidMount() {
    this.trackService.getAllTopTracks().then((resp) => {
      const data: TracksResponse = resp.data;
      this.setState({tracks: data.tracks.track, loading: false});
    });
  }
}
