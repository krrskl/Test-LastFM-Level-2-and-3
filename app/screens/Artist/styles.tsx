import {StyleSheet} from 'react-native';

const ArtistStyles = StyleSheet.create({
  mainContainer: {flex: 1},
  centerText: {textAlign: 'center'},
  boldText: {fontWeight: 'bold'},
  paginatorContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
  },
});

export default ArtistStyles;
