import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Easing, SafeAreaView} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AnswerButtons from '../../components/AnswerButtons';
import {screenNames} from '../../../navigation/screenNames';
import CountSelection from '../../components/CountSelection';
import Timer from '../../components/Timer';
import {NavigationStack} from '../../../navigation/entities';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';
import {getQuestionsThunk} from '../../../redux/questions/thunk';
import {QuestionsState} from '../../../redux/questions/entities';
import Overlay from '../../../components/Overlay';

export type ParamList = {
  QuizScreen: {
    topicName: string;
    categoryName: string;
    limit: number;
    imageUrl: string;
    author: string;
  };
};

const QuizScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const dispatch = useDispatch<AppDispatch>();
  const {questions, questionsLoading} = useSelector<RootState, QuestionsState>(
    state => state.questions,
  );
  const {params} = useRoute<RouteProp<ParamList, 'QuizScreen'>>();
  const timer = useRef<NodeJS.Timer>();
  const [currentStep, setCurrentStep] = useState('count');
  const [timerNumber, setTimerNumber] = useState(3);
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  const scaleAnimation = new Animated.Value(1.2);
  const opacityAnimation = new Animated.Value(1);

  const handleStart = useCallback(
    async (count: number) => {
      dispatch(
        getQuestionsThunk({
          category: params.categoryName,
          topic: params.topicName,
          count,
        }),
      );
      if (!questionsLoading) {
        setCurrentStep('timer');
      }
    },
    [questionsLoading],
  );

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
      {questionsLoading && <Overlay />}
      {currentStep !== 'started' && currentStep !== 'timer' && (
        <Icon
          onPress={() => {
            navigation.goBack();
          }}
          style={styles.backIcon}
          name={'chevron-left'}
          size={35}
          color={'white'}
        />
      )}
      {currentStep === 'count' && (
        <CountSelection
          handleStart={handleStart}
          category={params.categoryName}
          author={params.author}
          topic={params.topicName}
        />
      )}
      {currentStep === 'timer' && !questionsLoading && (
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
