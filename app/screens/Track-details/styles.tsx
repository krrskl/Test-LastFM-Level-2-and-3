import {StyleSheet} from 'react-native';

const TrackDetailsStyles = StyleSheet.create({
  mainContainer: {flex: 1, marginTop: 20},
  centerText: {textAlign: 'center'},
  badgeListeners: {paddingHorizontal: 10},
  badgeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  whiteText: {color: '#ffffff'},
  col: {
    width: '50%',
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textBold: {fontWeight: 'bold'},
  marginLeftText: {marginLeft: 10},
});

export default TrackDetailsStyles;
