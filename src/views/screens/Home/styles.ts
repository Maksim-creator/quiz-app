import {Dimensions, StyleSheet} from 'react-native';
import {violet, white} from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    position: 'relative',
    height: '100%',
    backgroundColor: violet,
  },
  content: {
    marginHorizontal: 22,
  },
  actionsheet: {
    backgroundColor: white,
    position: 'absolute',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    width: '100%',
    top: Dimensions.get('window').height,
    height: Dimensions.get('window').height,
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: 0.3,
    paddingTop: 3,
  },

  showAllButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  showAllButtonText: {
    fontSize: 13,
    fontWeight: '700',
    color: violet,
  },
  itemIconWrapper: {
    backgroundColor: 'rgba(218,203,255,0.49)',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  card: {
    borderWidth: 2,
    borderColor: 'rgba(164,164,164,0.15)',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  flatList: {
    maxHeight: '50%',
  },
  itemTopicName: {
    fontWeight: '700',
    fontSize: 16,
  },
  itemCategoryName: {
    fontSize: 13,
    color: 'gray',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemTopicDetails: {
    marginLeft: 15,
    height: 50,
    justifyContent: 'space-around',
  },
});
