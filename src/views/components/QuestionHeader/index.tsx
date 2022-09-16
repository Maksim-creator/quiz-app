import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, View} from 'react-native';
import {Question} from '../../../entities';
import styles from './styles';

interface Props {
  questions: Question[];
  questionIndex: number;
  timerNumber: number;
  currentStep: string;
  params: {
    categoryName: string;
    limit: number;
    imageUrl: string;
  };
}

const QuestionHeader: React.FC<Props> = ({
  questions,
  questionIndex,
  timerNumber,
  currentStep,
  params,
}) => {
  const {goBack} = useNavigation();

  return (
    <View style={styles.header}>
      <Image source={{uri: params.imageUrl}} style={styles.image} />
      <View style={styles.overlay} />
      {currentStep !== 'started' && (
        <Icon
          onPress={goBack}
          style={styles.backIcon}
          name={'chevron-left'}
          size={35}
          color={'white'}
        />
      )}
      {questions.length && !timerNumber && currentStep === 'started' ? (
        <View style={styles.wrapper}>
          {questions[questionIndex] && (
            <Text style={styles.questionText}>
              {questions[questionIndex].question}
            </Text>
          )}
        </View>
      ) : (
        <Text style={styles.title}>{params.categoryName}</Text>
      )}
    </View>
  );
};

export default QuestionHeader;
