import {StyleSheet} from 'react-native';
import {pink, white} from '../../assets/colors';
import {isAndroid} from '../../utils';

export default StyleSheet.create<any>({
  container: {
    height: '100%',
    position: 'relative',
  },
  answerButton: {
    borderColor: 'rgba(141,141,141,0.76)',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '90%',
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignSelf: 'center',
  },
  mainBlock: {
    alignSelf: 'center',
    width: '95%',
    height: '80%',
    backgroundColor: white,
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    paddingVertical: 15,
    alignItems: 'center',
    paddingBottom: 50,
    marginBottom: isAndroid() ? 10 : 0,
  },
  infoContainer: {
    alignItems: 'center',
    width: '100%',
  },
  question: {
    width: '100%',
    paddingHorizontal: 15,
  },
  questionCount: {
    color: 'rgb(168,168,168)',
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  questionText: {
    fontWeight: '800',
    lineHeight: 25,
    fontSize: 20,
    paddingVertical: 10,
  },
  answers: {
    width: '100%',
    alignSelf: 'center',
  },
  answerText: {
    textAlign: 'center',
  },
  lottieAnimation: {
    position: 'absolute',
  },
  iconContainer: {
    backgroundColor: 'rgba(171,171,171,0.47)',
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  progressBar: {width: '50%'},
  innerProgress: {
    width: '100%',
    backgroundColor: white,
    opacity: 0.3,
    height: 3,
    borderRadius: 10,
  },
  outerProgress: (donePercent: number) => ({
    position: 'absolute',
    width: `${donePercent}%`,
    backgroundColor: white,
    height: 3,
    borderRadius: 10,
  }),
  iconText: {
    color: white,
    paddingLeft: 5,
  },
  timerContainer: {
    height: 60,
    width: 60,
    alignSelf: 'center',
    marginBottom: 10,
  },
  innerTimer: {
    borderColor: pink,
    height: 60,
    width: 60,
    borderWidth: 5,
  },
  timerText: {color: pink, fontSize: 18},
});
