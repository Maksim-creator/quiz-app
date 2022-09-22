import React, {useEffect, useRef, useState} from 'react';
import {Animated, Easing, View} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {client} from '../../../api/api.config';
import AnswerButtons from '../../../components/AnswerButtons';
import {screenNames} from '../../../navigation/screenNames';
import {Question} from '../../../entities';
import {xApiKey} from '../../../constants';
import QuestionHeader from '../../components/QuestionHeader';
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
  const timer = useRef<any>();
  const [questionsCount, setQuestionsCount] = useState(0);
  const [currentStep, setCurrentStep] = useState('count');
  const [timerNumber, setTimerNumber] = useState(3);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [score, setScore] = useState(0);
  const scaleAnimation = new Animated.Value(1.2);
  const opacityAnimation = new Animated.Value(1);

  const handleStart = async () => {
    const limit =
      questionsCount < 0
        ? Math.floor(Math.random() * (20 - 5 + 1) + 5)
        : questionsCount;
    const res = await client.get(
      `/questions?category=${params.categoryName}&limit=${limit}`,
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

  const handleShowNextQuestion = () => {
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
    <View style={styles.container}>
      <QuestionHeader
        questions={questions}
        questionIndex={questionIndex}
        currentStep={currentStep}
        timerNumber={timerNumber}
        params={params}
      />
      {currentStep === 'count' && (
        <CountSelection
          questionsCount={questionsCount}
          setQuestionsCount={setQuestionsCount}
          handleStart={handleStart}
        />
      )}
      {currentStep === 'timer' && (
        <Timer
          scaleAnimation={scaleAnimation}
          opacityAnimation={opacityAnimation}
          timerNumber={timerNumber}
        />
      )}
      {questions.length && !timerNumber && currentStep === 'started' ? (
        <AnswerButtons
          answers={questions[questionIndex].answers}
          correctAnswers={questions[questionIndex].correctAnswers}
          extraAnswer={questions[questionIndex].correctAnswer}
          showNextQuestion={handleShowNextQuestion}
          setScore={setScore}
        />
      ) : null}
    </View>
  );
};

export default QuizScreen;
