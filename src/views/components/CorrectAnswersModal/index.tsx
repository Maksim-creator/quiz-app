import React from 'react';
import Modal from 'react-native-modal';
import {FlatList, Text, View, ListRenderItem} from 'react-native';
import {Question} from '../../../entities';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {compact} from 'lodash';
import styles from './styles';

interface Props {
  isVisible: boolean;
  questions: Question[];
  onClose: () => void;
}

const CorrectAnswersModal: React.FC<Props> = ({
  isVisible,
  questions,
  onClose,
}) => {
  const renderItem: ListRenderItem<Question> = ({item, index}) => {
    const answersArray = compact(
      Object.entries(item.answers).map(([key, value]) => value && {key, value}),
    );

    const correctAnswer = () => {
      const correctValue = Object.keys(item.correctAnswers).find(
        key =>
          item.correctAnswers[key as keyof typeof item.correctAnswers] ===
          'true',
      );

      if (correctValue) {
        return correctValue.replace('Correct', '');
      } else {
        const split = item.correctAnswer?.split('_');
        const letter = split![1].toUpperCase();

        return split![0].concat(letter);
      }
    };

    return (
      <View key={index} style={styles.card}>
        <Text numberOfLines={4} style={styles.question}>
          {item.question}
        </Text>
        <View style={styles.answers}>
          {answersArray.map(answer => {
            const isCorrect = answer.key === correctAnswer();
            return (
              <View style={styles.answer(isCorrect)}>
                <Text style={styles.answerText(isCorrect)}>{answer.value}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };

  const keyExtractor = (item: Question) => item.question;

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      useNativeDriver
      useNativeDriverForBackdrop={true}
      hideModalContentWhileAnimating
      backdropTransitionOutTiming={0}>
      <View style={styles.container}>
        <Text style={styles.label}>Correct answers</Text>
        <Icon
          onPress={onClose}
          style={styles.closeIcon}
          name={'close'}
          size={25}
          color={'black'}
        />
        <FlatList
          data={questions}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </Modal>
  );
};

export default CorrectAnswersModal;
