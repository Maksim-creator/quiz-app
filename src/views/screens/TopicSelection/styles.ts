import {StyleSheet} from 'react-native';
import {violet, white} from '../../../assets/colors';

export default StyleSheet.create({
  cardItem: {
    backgroundColor: '#ececf6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 15,
    paddingVertical: 10,
    shadowOpacity: 1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    shadowColor: '#ececf6',
  },
  cardItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: white,
    padding: 5,
    borderRadius: 10,
  },
  cardItemInfo: {
    marginLeft: 10,
  },
  topicName: {
    color: violet,
    fontWeight: '700',
    fontSize: 17,
  },
  author: {
    color: violet,
    fontSize: 13,
  },
  container: {
    height: '100%',
    backgroundColor: violet,
  },
  header: {
    position: 'relative',
    paddingBottom: 25,
  },
  backIcon: {
    position: 'absolute',
    left: 5,
    zIndex: 100,
  },
  label: {
    color: white,
    fontWeight: '700',
    fontSize: 22,
    paddingTop: 13,
    textAlign: 'center',
  },
  content: {
    height: '80%',
    backgroundColor: white,
    borderRadius: 15,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  spinner: {
    alignItems: 'center',
  },
  cards: {
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
  category: {
    fontSize: 25,
    fontWeight: '800',
    paddingTop: 8,
  },
  flatList: {
    height: '100%',
  },
});
