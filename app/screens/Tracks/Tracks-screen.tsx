import React, {Component} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Text, SearchBar, Button, Icon} from 'react-native-elements';
import {TrackService} from '../../core/services/track-service';
// import {TracksResponse} from '../../core/models/Tracks-response.model';
import {Track} from '../../core/models/Track.model';
import {WaveIndicator} from 'react-native-indicators';
import TracksStyles from './styles';
import TracksItemComponent from '../../components/Track-item';
import {connect} from 'react-redux';
import {
  fetchTracks,
  fetchNextPage,
  fetchPrevPage,
} from './../../core/store/effects/track.effects';
import {TracksAttr} from './../../core/models/Tracks-response.model';

interface TracksScreenProps {
  loading: boolean;
  tracks: Track[];
  paginator: TracksAttr;
  fetchTracks: () => {};
  fetchNextPage: () => {};
  fetchPrevPage: () => {};
  dataSource: any;
}

class TracksScreen extends Component<TracksScreenProps, any> {
  trackService = new TrackService();
  constructor(props: any) {
    super(props);
    this.state = {query: '', tracks: []};
  }

  _renderTracks = () => {
    const {tracks} = this.state;

    if (tracks) {
      return tracks.map((item: any, i: number) => (
        <TracksItemComponent key={i} track={item} />
      ));
    }
  };

  _search = (query: string) => {
    this.setState({query});

    query = query.trim().toLowerCase();

    if (query !== '') {
      const tracks = this.props.tracks.filter(
        (track) => track.name.toLowerCase().indexOf(query) > -1,
      );

      this.setState({tracks});
    } else {
      this.setState({tracks: this.props.tracks});
    }
  };

  _renderPaginator() {
    const {totalPages, page} = this.props.paginator;
    return (
      <View style={TracksStyles.paginatorContent}>
        <Button
          onPress={() => {
            this.props.fetchPrevPage();
          }}
          disabled={page === '1'}
          icon={<Icon name={'arrow-back'} color="white" size={15} />}
        />
        <Text> </Text>
        <Button
          onPress={() => {
            this.props.fetchNextPage();
          }}
          icon={<Icon name={'arrow-forward'} color="white" size={15} />}
        />
        <Text>
          {' '}
          Página <Text style={TracksStyles.boldText}>{page}</Text> de{' '}
          <Text style={TracksStyles.boldText}>{totalPages}</Text>
        </Text>
      </View>
    );
  }

  render() {
    const {loading, tracks} = this.props;

    return (
      <SafeAreaView style={TracksStyles.mainContainer}>
        <SearchBar
          placeholder="Buscar..."
          platform="ios"
          onChangeText={this._search}
          value={this.state.query}
        />

        {this._renderPaginator()}

        <ScrollView>
          {loading ? (
            <WaveIndicator
              count={1}
              waveFactor={0.1}
              color={'rgb(29, 38, 54)'}
              size={60}
            />
          ) : null}

          {!loading && tracks.length !== 0 ? this._renderTracks() : null}

          {!loading && tracks.length === 0 ? (
            <Text style={TracksStyles.centerText}>
              No hay elementos para mostrar aquí.
            </Text>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    );
  }

  componentDidMount() {
    this.props.fetchTracks();
  }

  shouldComponentUpdate(props: any) {
    if (
      props.paginator.page !== this.props.paginator.page ||
      this.props.tracks !== props.tracks
    ) {
      this.setState({tracks: props.tracks});
    }
    return true;
  }
}

const mapStateToProps = (state: any) => {
  const {tracksScreenStore} = state;
  return {
    tracks: tracksScreenStore.tracks,
    loading: tracksScreenStore.loading,
    paginator: tracksScreenStore.paginator,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchTracks: () => {
      return dispatch(fetchTracks());
    },
    fetchNextPage: () => {
      return dispatch(fetchNextPage());
    },
    fetchPrevPage: () => {
      return dispatch(fetchPrevPage());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TracksScreen);
