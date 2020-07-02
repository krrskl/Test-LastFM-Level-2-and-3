import React, {Component} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import {ArtistService} from '../../core/services/artist-service';
import {ArtistResponse} from '../../core/models/Artist-response.model';
import {Artist} from '../../core/models/Artist.model';
import {WaveIndicator} from 'react-native-indicators';
import ArtistStyles from './styles';
import ArtistItemComponent from './../../components/Artist-item';

interface ArtistScreenState {
  loading: boolean;
  artists: Artist[];
}

export default class ArtistScreen extends Component<any, ArtistScreenState> {
  artistService = new ArtistService();
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      artists: [],
    };
  }

  render() {
    const {loading, artists} = this.state;
    return (
      <SafeAreaView style={ArtistStyles.mainContainer}>
        <ScrollView>
          {loading ? (
            <WaveIndicator
              count={1}
              waveFactor={0.1}
              color={'rgb(29, 38, 54)'}
              size={60}
            />
          ) : artists.length === 0 ? (
            <Text style={ArtistStyles.centerText}>
              No hay elementos para mostrar aquí.
            </Text>
          ) : (
            artists.map((item, i) => (
              <ArtistItemComponent key={i} artist={item} />
            ))
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  componentDidMount() {
    this.artistService.getAllTopArtist().then((resp) => {
      const data: ArtistResponse = resp.data;
      this.setState({artists: data.topartists.artist, loading: false});
    });
  }
}
