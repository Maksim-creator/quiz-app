import React, {useCallback, useMemo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {compact} from 'lodash';
import {sleep} from '../../utils';
import {Answers} from '../../entities';
import styles from './styles';

interface Props {
  answers: Answers;
  correctAnswer: string;
  showNextQuestion: () => void;
}

const AnswerButtons: React.FC<Props> = ({
  answers,
  correctAnswer,
  showNextQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isRightAnswer, setRightAnswer] = useState<boolean | null>(null);

  const answersArray = useMemo(
    () =>
      compact(
        Object.entries(answers).map(([key, value]) => value && {key, value}),
      ),
    [answers],
  );

  const resetAnswers = () => {
    setRightAnswer(null);
    setSelectedAnswer(null);
  };

  const handleAnswerSelect = async (answer: {key: string; value: string}) => {
    setSelectedAnswer(answer.key);
    setRightAnswer(answer.key === correctAnswer);
    await sleep(2000);
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
          onPress={() => handleAnswerSelect(answer)}
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
