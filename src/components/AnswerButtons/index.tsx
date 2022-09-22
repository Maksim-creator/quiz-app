import React, {useCallback, useMemo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {compact} from 'lodash';
import {sleep} from '../../utils';
import {Answers, CorrectAnswers} from '../../entities';
import styles from './styles';

interface Props {
  answers: Answers;
  correctAnswers: CorrectAnswers;
  extraAnswer?: string;
  showNextQuestion: () => void;
  setScore: Function;
}

const AnswerButtons: React.FC<Props> = ({
  answers,
  correctAnswers,
  extraAnswer,
  showNextQuestion,
  setScore,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isRightAnswer, setRightAnswer] = useState<boolean | null>(null);

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
        setScore((prevState: number) => prevState + 1);
      }
      setSelectedAnswer(answer.key);
      setRightAnswer(answer.key === correctAnswer);
      await sleep(1000);
      showNextQuestion();
      resetAnswers();
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

  return (
    <View style={styles.container}>
      {answersArray.map(answer => (
        <TouchableOpacity
          key={answer.key}
          onPress={handleAnswerSelect(answer)}
          style={{
            ...styles.answerButton,
            backgroundColor:
              answer.key === selectedAnswer ? renderColor() : 'white',
          }}>
          <Text>{answer.value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default AnswerButtons;
