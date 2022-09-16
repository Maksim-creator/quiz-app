import {StyleSheet} from 'react-native';

export default StyleSheet.create<any>({
  numOfQuestionsWrapper: {
    height: '40%',
    width: '70%',
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: (count: number, item: number) => ({
    width: 100,
    alignItems: 'center',
    margin: 7,
    backgroundColor: count === item ? '#c8d5f1' : 'white',
  }),
  startButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    alignSelf: 'center',
  },
  items: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  randomButton: (questionsCount: number) => ({
    marginTop: 5,
    backgroundColor: questionsCount < 0 ? '#c8d5f1' : 'white',
  }),
});
