import {StyleSheet} from 'react-native';
import {darkTan, pink, white} from '../../../assets/colors';

export default StyleSheet.create({
  container: {
    marginVertical: 18,
    backgroundColor: '#ffe0e6',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 25,
    position: 'relative',
    height: 175,
  },
  topPicksWrapper: {
    backgroundColor: pink,
    borderRadius: 5,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  topPicksText: {
    color: white,
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 0.5,
  },
  quizName: {
    fontWeight: '800',
    color: darkTan,
    fontSize: 18,
    letterSpacing: 0.3,
  },
  quizInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 4,
    zIndex: 2,
  },
  category: {
    color: darkTan,
    fontSize: 12,
    paddingHorizontal: 5,
  },
  dot: {
    color: darkTan,
    paddingRight: 5,
  },
  numOfQuizzes: {
    color: darkTan,
    fontSize: 12,
  },
  lottieAnimation: {
    position: 'absolute',
    right: -70,
    bottom: -5,
    zIndex: -1,
  },
  content: {
    flex: 1,
  },
  spinner: {
    paddingTop: 40,
  },
  card: {
    paddingTop: 80,
  },
});
