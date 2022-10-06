import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {FlatList, ListRenderItem, TouchableOpacity, View} from 'react-native';
import {compact} from 'lodash';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {sleep} from '../../utils';
import {Question} from '../../entities';
import {white} from '../../assets/colors';
import Lottie from 'lottie-react-native';
import Timer from '../../views/components/Timer';
import FailModal from '../../views/components/FailModal';
import {screenNames} from '../../navigation/screenNames';
import {NavigationStack} from '../../navigation/entities';
import {animations} from '../../constants';
import Text from '../Text';
import styles from './styles';

interface Props {
  questions: Question[];
  questionIndex: number;
  showNextQuestion: (score: number, extraPoints?: number) => void;
}

const AnswerButtons: React.FC<Props> = ({
  questions,
  questionIndex,
  showNextQuestion,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isRightAnswer, setRightAnswer] = useState<boolean | null>(null);
  const [timerNumber, setTimerNumber] = useState(15);
  const [isVisible, setIsVisible] = useState(false);
  const [lives, setLives] = useState(3);
  const animationRef = useRef<Lottie>(null);
  const timer = useRef<NodeJS.Timer>();
  const score = useRef(0);

  const {question, answers, correctAnswers, extraAnswer} = useMemo(
    () => ({
      correctAnswers: questions[questionIndex].correctAnswers,
      extraAnswer: questions[questionIndex].correctAnswer,
      answers: questions[questionIndex].answers,
      question: questions[questionIndex].question,
    }),
    [questionIndex, questions],
  );
  const correctAnswer = useMemo(() => {
    const correctValue = Object.keys(correctAnswers).find(
      key => correctAnswers[key as keyof typeof correctAnswers] === 'true',
    );

    if (correctValue) {
      return correctValue.replace('Correct', '');
    } else {
      const split = extraAnswer?.split('_');
      const letter = split![1].toUpperCase();

      return split![0].concat(letter);
    }
  }, [correctAnswers]);

  const resetAnswers = () => {
    setRightAnswer(null);
    setSelectedAnswer(null);
  };

  const answersArray = useMemo(
    () =>
      compact(
        Object.entries(answers).map(([key, value]) => value && {key, value}),
      ),
    [answers],
  );

  const handleAnswerSelect =
    (answer: {key: string; value: string}) => async () => {
      if (answer.key === correctAnswer) {
        score.current++;
      }
      setSelectedAnswer(answer.key);
      setRightAnswer(answer.key === correctAnswer);
      await sleep(1000);
      showNextQuestion(score.current);
      resetAnswers();
      setTimerNumber(15);
    };

  const renderItem: ListRenderItem<{key: string; value: string}> = ({item}) => {
    return (
      <TouchableOpacity
        key={item.key}
        onPress={handleAnswerSelect(item)}
        style={{
          ...styles.answerButton,
          backgroundColor: item.key === selectedAnswer ? renderColor() : white,
        }}>
        <Text style={styles.answerText}>{item.value}</Text>
      </TouchableOpacity>
    );
  };

  const renderColor = useCallback(() => {
    if (selectedAnswer) {
      if (isRightAnswer) {
        return 'rgba(139,236,104,0.48)';
      } else {
        return 'rgba(225,48,48,0.47)';
      }
    } else {
      return 'white';
    }
  }, [isRightAnswer, selectedAnswer]);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  const animation = useMemo(() => {
    const number = Math.floor(Math.random() * animations.length - 1) + 1;
    return animations[number];
  }, []);

  const donePercent = useMemo(
    () => (100 * questionIndex) / questions.length,
    [questions, questionIndex],
  );

  const keyExtractor = (item: {value: string; key: string}) => item.key;

  useEffect(() => {
    timer.current = setInterval(
      () => setTimerNumber(prevState => prevState - 1),
      1000,
    );
    return () => clearInterval(timer.current);
  }, [lives]);

  useEffect(() => {
    if (timerNumber <= 0) {
      setIsVisible(true);
      clearTimeout(timer.current);
    }
  }, [timerNumber]);

  const handleClose = () => {
    if (lives === 1) {
      setIsVisible(false);
      navigation.navigate(screenNames.RESULT, {
        questions,
        score: score.current,
      });
    } else {
      setLives(prevState => prevState - 1);
      setTimerNumber(15);
      showNextQuestion(score.current);
      setIsVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Icon name={'heart-outline'} color={white} size={20} />
          <Text style={styles.iconText}>{lives}</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={styles.innerProgress} />
          <View style={styles.outerProgress(donePercent)} />
        </View>
        <View style={styles.iconContainer}>
          <Icon name={'puzzle-outline'} size={20} color={white} />
          <Text style={styles.iconText}>{score.current * 5}</Text>
        </View>
      </View>
      <View style={styles.mainBlock}>
        <Lottie
          style={[styles.lottieAnimation, animation.styles]}
          ref={animationRef}
          source={animation.path}
        />
        <View style={styles.infoContainer}>
          <View style={styles.question}>
            <Timer
              containerStyles={styles.timerContainer}
              timerNumber={timerNumber}
              innerStyles={styles.innerTimer}
              textStyles={styles.timerText}
            />
            <Text style={styles.questionCount}>
              QUESTION {questionIndex + 1} OF {questions.length}
            </Text>
            <Text style={styles.questionText}>{question}</Text>
          </View>
        </View>
        <FlatList
          data={answersArray}
          renderItem={renderItem}
          style={styles.answers}
          keyExtractor={keyExtractor}
        />
      </View>
      <FailModal isVisible={isVisible} onClose={handleClose} />
    </View>
  );
};

export default AnswerButtons;
