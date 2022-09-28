import {StyleSheet} from 'react-native';

export default StyleSheet.create<any>({
  card: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    alignSelf: 'center',
    paddingVertical: 7,
    paddingHorizontal: 7,
    backgroundColor: 'rgb(106,91,226)',
    width: '85%',
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  answers: {marginVertical: 5},
  answer: (isCorrect: boolean) => ({
    minWidth: '100%',
    backgroundColor: isCorrect ? 'rgba(139,236,104,0.8)' : 'white',
    borderRadius: 10,
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 6,
  }),
  answerText: (isCorrect: boolean) => ({
    color: isCorrect ? 'white' : 'black',
  }),
  container: {
    backgroundColor: 'white',
    height: '75%',
    borderRadius: 15,
    paddingVertical: 15,
    position: 'relative',
  },
  label: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
    paddingTop: 6,
  },
  closeIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingTop: 15,
    paddingRight: 10,
  },
});
