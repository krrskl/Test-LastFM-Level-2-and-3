import React, {Component} from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {Text, SearchBar, Button, Icon} from 'react-native-elements';
import {ArtistService} from '../../core/services/artist-service';
import {Artist} from '../../core/models/Artist.model';
import {WaveIndicator} from 'react-native-indicators';
import ArtistStyles from './styles';
import ArtistItemComponent from './../../components/Artist-item';
import {ArtistAttr} from './../../core/models/Artist-response.model';
import {connect} from 'react-redux';
import {
  fetchArtists,
  fetchNextPage,
  fetchPrevPage,
} from './../../core/store/effects/artist.effects';
interface ArtistScreenProps {
  loading: boolean;
  artists: Artist[];
  paginator: ArtistAttr;
  fetchArtists: () => {};
  fetchNextPage: () => {};
  fetchPrevPage: () => {};
}

class ArtistScreen extends Component<ArtistScreenProps, any> {
  artistService = new ArtistService();
  constructor(props: any) {
    super(props);
    this.state = {
      loading: true,
      artists: [],
    };
  }

  _search = (query: string) => {
    this.setState({query});

    query = query.trim().toLowerCase();

    if (query !== '') {
      const artists = this.props.artists.filter(
        (artist) => artist.name.toLowerCase().indexOf(query) > -1,
      );

      this.setState({artists});
    } else {
      this.setState({artists: this.props.artists});
    }
  };

  _renderArtists() {
    const {artists} = this.state;

    if (artists) {
      return artists.map((item: any, i: number) => (
        <ArtistItemComponent key={i} artist={item} />
      ));
    }
  }

  _renderPaginator() {
    const {totalPages, page} = this.props.paginator;
    return (
      <View style={ArtistStyles.paginatorContent}>
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
          Página <Text style={ArtistStyles.boldText}>{page}</Text> de{' '}
          <Text style={ArtistStyles.boldText}>{totalPages}</Text>
        </Text>
      </View>
    );
  }

  render() {
    const {loading, artists} = this.props;
    return (
      <SafeAreaView style={ArtistStyles.mainContainer}>
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

          {!loading && artists.length !== 0 ? this._renderArtists() : null}

          {!loading && artists.length === 0 ? (
            <Text style={ArtistStyles.centerText}>
              No hay elementos para mostrar aquí.
            </Text>
          ) : null}
        </ScrollView>
      </SafeAreaView>
    );
  }

  componentDidMount() {
    this.props.fetchArtists();
  }

  shouldComponentUpdate(props: any) {
    if (
      props.paginator.page !== this.props.paginator.page ||
      this.props.artists !== props.artists
    ) {
      this.setState({artists: props.artists});
    }
    return true;
  }
}

const mapStateToProps = (state: any) => {
  const {artistsScreenStore} = state;
  return {
    artists: artistsScreenStore.artists,
    loading: artistsScreenStore.loading,
    paginator: artistsScreenStore.paginator,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchArtists: () => {
      return dispatch(fetchArtists());
    },
    fetchNextPage: () => {
      return dispatch(fetchNextPage());
    },
    fetchPrevPage: () => {
      return dispatch(fetchPrevPage());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistScreen);
