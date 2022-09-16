import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';

interface Props {
  questionsCount: number;
  setQuestionsCount: Function;
  handleStart: () => void;
}

const VARIANTS = [5, 10, 15, 20];

const CountSelection: React.FC<Props> = ({
  questionsCount,
  setQuestionsCount,
  handleStart,
}) => {
  const setCountValue = (item: number) => () => {
    setQuestionsCount(item);
  };

  return (
    <View style={styles.numOfQuestionsWrapper}>
      <View style={styles.items}>
        <Text style={styles.subtitle}>Choose number of questions:</Text>
        <View style={styles.buttons}>
          {VARIANTS.map(item => (
            <Button
              key={item}
              styles={styles.button(questionsCount, item)}
              text={item.toString()}
              onPress={setCountValue(item)}
            />
          ))}
          <Button
            styles={styles.randomButton(questionsCount)}
            text={'Random (5 - 20)'}
            onPress={setCountValue(-1)}
          />
        </View>
      </View>
      <Button
        styles={styles.startButton}
        text={'Start'}
        onPress={handleStart}
      />
    </View>
  );
};

export default CountSelection;
