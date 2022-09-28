import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, SafeAreaView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {client} from '../../../api/api.config';
import AnswerButtons from '../../../components/AnswerButtons';
import {screenNames} from '../../../navigation/screenNames';
import {Question} from '../../../entities';
import {xApiKey} from '../../../constants';
import CountSelection from '../../components/CountSelection';
import Timer from '../../components/Timer';
import {NavigationStack} from '../../../navigation/entities';
import styles from './styles';

export type ParamList = {
  QuizScreen: {
    categoryName: string;
    limit: number;
    imageUrl: string;
  };
};

const QuizScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const {params} = useRoute<RouteProp<ParamList, 'QuizScreen'>>();
  const timer = useRef<NodeJS.Timer>();
  const [currentStep, setCurrentStep] = useState('count');
  const [timerNumber, setTimerNumber] = useState(3);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);

  const scaleAnimation = new Animated.Value(1.2);
  const opacityAnimation = new Animated.Value(1);

  const handleStart = async (count: number) => {
    const res = await client.get(
      `/questions?category=${params.categoryName}&limit=${count}`,
      {
        headers: {
          'X-Api-Key': xApiKey,
        },
      },
    );
    setQuestions(
      res.data.filter(
        (item: Question) => item.multipleCorrectAnswers === 'false',
      ),
    );
    setCurrentStep('timer');
  };

  const handleShowNextQuestion = (score: number) => {
    if (questionIndex === questions.length - 1) {
      navigation.navigate(screenNames.RESULT, {
        score,
        questions,
      });
    } else {
      setQuestionIndex(prevState => prevState + 1);
    }
  };

  useEffect(() => {
    if (currentStep === 'timer') {
      timer.current = setInterval(
        () => setTimerNumber(prevState => prevState - 1),
        1000,
      );
      return () => clearInterval(timer.current);
    }
  }, [currentStep]);

  useEffect(() => {
    if (timerNumber === 0) {
      clearInterval(timer.current);
      Animated.parallel([
        Animated.timing(scaleAnimation, {
          useNativeDriver: true,
          toValue: 6,
          duration: 400,
          easing: Easing.linear,
        }),
        Animated.timing(opacityAnimation, {
          useNativeDriver: true,
          toValue: 0,
          duration: 400,
          easing: Easing.linear,
        }),
      ]).start(({finished}) => finished && setCurrentStep('started'));
    }
  }, [timerNumber]);

  return (
    <SafeAreaView style={styles.container}>
      {currentStep !== 'started' && currentStep !== 'timer' && (
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backIcon}
          name={'arrow-left-thin'}
          size={35}
          color={'white'}
        />
      )}
      {currentStep === 'count' && (
        <CountSelection
          handleStart={handleStart}
          category={params.categoryName}
        />
      )}
      {currentStep === 'timer' && (
        <Timer
          scaleAnimation={scaleAnimation}
          opacityAnimation={opacityAnimation}
          timerNumber={timerNumber}
          finalWord={'Start!'}
        />
      )}
      {questions.length && !timerNumber && currentStep === 'started' ? (
        <AnswerButtons
          questions={questions}
          questionIndex={questionIndex}
          showNextQuestion={handleShowNextQuestion}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default QuizScreen;
