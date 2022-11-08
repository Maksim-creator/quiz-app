import {Dimensions, StyleSheet} from 'react-native';
import {violet, white} from '../../../assets/colors';

export default StyleSheet.create<any>({
  headerTitle: {
    textAlign: 'center',
    paddingTop: 3,
    fontSize: 22,
    fontWeight: '700',
    color: white,
  },
  backIcon: {
    position: 'absolute',
    left: 8,
    bottom: 0,
  },
  header: {
    width: '100%',
    paddingTop: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  container: {
    backgroundColor: violet,
    height: '100%',
  },
  content: {
    backgroundColor: white,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: Dimensions.get('window').height,
    width: '100%',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  contentTitle: {
    fontWeight: '700',
    fontSize: 20,
    letterSpacing: 0.3,
    paddingTop: 3,
  },
  topPosition: {
    height: 25,
    width: 25,
    borderRadius: 100,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: white,
  },
  avatar: {
    alignSelf: 'center',
    width: 65,
    height: 65,
    borderRadius: 100,
    marginHorizontal: 15,
  },
  topPlayer: {
    position: 'relative',
    backgroundColor: '#695adf',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 10,
    maxHeight: '45%',
  },
  item: {
    marginVertical: 7,
    width: '44%',
    borderRadius: 30,
    paddingVertical: 25,
    backgroundColor: '#efeefc',
    zIndex: 10,
  },
  category: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: violet,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 18,
    paddingTop: 5,
  },
  titleContainer: {
    position: 'relative',
    width: '100%',
    paddingBottom: 15,
    paddingTop: 8,
  },
  iconContainer: {
    backgroundColor: white,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 10,
  },
  input: {
    width: '85%',
    alignSelf: 'center',
  },
  inputStyles: {
    backgroundColor: '#5b4dc3',
    color: white,
  },
  spinnerContainer: {
    paddingTop: 25,
  },
  error: {
    textAlign: 'center',
    color: white,
    paddingVertical: 18,
    fontWeight: '700',
  },
  leaderboard: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  firstText: {
    color: white,
    fontSize: 12,
  },
  leaderboardContent: {
    height: '70%',
  },
  leaderName: {
    color: white,
    fontWeight: '700',
  },
  totalPoints: {
    color: white,
    fontSize: 13,
    paddingTop: 5,
  },
  crownIcon: {
    position: 'absolute',
    right: 5,
    top: 5,
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
  noQuizzesCard: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'rgba(215,215,215,0.5)',
    paddingBottom: 20,
    borderRadius: 15,
  },
  noQuizzesCardLottie: {
    width: Dimensions.get('screen').width / 2,
    height: 180,
  },
  noQuizzesText: {
    fontSize: 15,
    fontWeight: '800',
  },
  actionSheet: (isVisible: boolean) => ({
    flexDirection: 'row',
    paddingTop: 25,
    alignItems: 'center',
    justifyContent: isVisible ? 'space-between' : 'flex-start',
  }),
});
