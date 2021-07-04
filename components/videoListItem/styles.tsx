import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  videoCard: {},
  thumbnail: {
    width: '100%',
    aspectRatio: 16 / 9,
  },
  timeContainer: {
    backgroundColor: '#00000099',
    width: 50,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    position: 'absolute',
    right: 5,
    bottom: 5,
  },
  time: {
    color: 'white',
    fontWeight: 'bold',
  },
  titleRow: {
    flexDirection: 'row',
    padding: 10,
  },
  middleContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  avator: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  videoTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  videoSubTitle: {
    color: 'grey',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default styles;
