import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import Button from '../../../components/Button';
import {screenNames} from '../../../navigation/screenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationStack} from '../../../navigation/entities';
import {StyleSheet} from 'react-native';
import {useCounter} from '../../../hooks/useCounter';
import Trophy from '../../../assets/svg/Trophy';
import CorrectAnswersModal from '../../components/CorrectAnswersModal';
import Text from '../../../components/Text';
import {Question} from '../../../entities';

export type ParamList = {
  Result: {
    score: number;
    questions: Question[];
  };
};

const results = [
  {
    message: 'Can be better!',
    min: 0,
    max: 15,
    colors: {
      main: '#CD7F32',
      shadow: '#a86421',
    },
  },
  {
    message: 'Never give up!',
    min: 16,
    max: 30,
    colors: {
      main: '#CD7F32',
      shadow: '#a86421',
    },
  },
  {
    message: 'Well!',
    min: 31,
    max: 50,
    colors: {main: '#C0C0C0', shadow: '#ababab'},
  },
  {
    message: 'Super!',
    min: 51,
    max: 75,
    colors: {main: '#C0C0C0', shadow: '#ababab'},
  },
  {
    message: 'Perfect!',
    min: 76,
    max: 95,
    colors: {main: '#FFD700', shadow: '#bba00e'},
  },
  {
    message: 'Excellent!',
    min: 96,
    max: 100,
    colors: {main: '#FFD700', shadow: '#bba00e'},
  },
];

const Result = () => {
  const {
    params: {score, questions},
  } = useRoute<RouteProp<ParamList, 'Result'>>();
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const donePercentage = useMemo(
    () => Math.floor((score / questions.length) * 100),
    [score, questions.length],
  );

  const animatedScore = useCounter(donePercentage);
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedWidth.setValue(0);

    Animated.timing(animatedWidth, {
      useNativeDriver: false,
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
    }).start();
  }, []);

  const widthInterpolation = animatedWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', `${donePercentage}%`],
  });

  const {message, colors} = results.find(
    item => donePercentage >= item.min && donePercentage <= item.max,
  )!;

  const handleClose = () => setIsModalVisible(false);
  const handleOpen = () => setIsModalVisible(true);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.message}>{message}</Text>
        <View style={styles.trophyCard}>
          <Trophy colors={colors} />
          <Text style={styles.points}>You get +{score * 5} Quiz Points</Text>
          <TouchableOpacity onPress={handleOpen} style={styles.button}>
            <Text style={styles.buttonText}>Check correct answers</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resultsWrapper}>
          <View style={styles.progressBar}>
            <Animated.View style={styles.innerProgress(widthInterpolation)} />
          </View>
          <View style={styles.results}>
            <View style={styles.column}>
              <View style={styles.columnItem}>
                <Text style={styles.label}>CORRECT ANSWER</Text>
                <Text style={styles.text}>{score} questions</Text>
              </View>
              <View style={styles.columnItem}>
                <Text style={styles.label}>COMPLETION</Text>
                <Text style={styles.text}>{animatedScore || 0}%</Text>
              </View>
            </View>
            <View style={styles.column}>
              <View style={styles.columnItem}>
                <Text style={styles.label}>SKIPPED</Text>
                <Text style={styles.text}>0</Text>
              </View>
              <View style={styles.columnItem}>
                <Text style={styles.label}>INCORRECT ANSWERS</Text>
                <Text style={styles.text}>{questions.length - score}</Text>
              </View>
            </View>
          </View>
        </View>
        <Button
          styles={styles.finishButton}
          text={'Finish'}
          onPress={() => navigation.navigate(screenNames.HOME_SCREEN)}
        />
      </View>
      <CorrectAnswersModal
        isVisible={isModalVisible}
        onClose={handleClose}
        questions={questions}
      />
    </SafeAreaView>
  );
};

export default Result;

const styles = StyleSheet.create<any>({
  container: {
    paddingVertical: 15,
  },
  trophyCard: {
    borderRadius: 15,
    backgroundColor: '#ff8fa2',
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingVertical: 40,
  },
  points: {
    color: 'white',
    fontSize: 20,
    paddingVertical: 18,
    fontWeight: '800',
  },
  button: {
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.37)',
    paddingVertical: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '800',
    fontSize: 15,
  },
  results: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  column: {
    marginTop: 5,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  columnItem: {marginVertical: 5},
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9d9d9d',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    paddingTop: 10,
  },
  message: {
    paddingTop: 10,
    marginBottom: 15,
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '700',
  },
  progressBar: {
    width: '100%',
    height: 7,
    borderRadius: 50,
  },
  innerProgress: (width: Animated.AnimatedInterpolation) => ({
    width,
    height: '100%',
    backgroundColor: '#24d7e7',
    borderRadius: 50,
  }),
  resultLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  finishButton: {
    alignSelf: 'center',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottieAnimation: {top: 20},
  resultsWrapper: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
});
