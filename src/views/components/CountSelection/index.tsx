import React from 'react';
import {Text, View} from 'react-native';
import Button from '../../../components/Button';
import styles from './styles';

interface Props {
  questionsCount: number;
  setQuestionsCount: Function;
  handleStart: () => void;
}

const CountSelection: React.FC<Props> = ({
  questionsCount,
  setQuestionsCount,
  handleStart,
}) => {
  return (
    <View style={styles.numOfQuestionsWrapper}>
      <View style={styles.items}>
        <Text style={styles.subtitle}>Choose number of questions:</Text>
        <View style={styles.buttons}>
          {[5, 10, 15, 20].map(item => (
            <Button
              key={item}
              styles={styles.button(questionsCount, item)}
              text={item.toString()}
              onPress={() => setQuestionsCount(item)}
            />
          ))}
          <Button
            styles={styles.randomButton(questionsCount)}
            text={'Random (5 - 20)'}
            onPress={() => setQuestionsCount(-1)}
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
