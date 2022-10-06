import React, {useRef, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Popover from 'react-native-popover-view';
import Text from '../../../components/Text';
import {white} from '../../../assets/colors';
import styles from './styles';

interface Props {
  exp: number;
}

const Level: React.FC<Props> = ({exp}) => {
  const touchableRef = useRef<TouchableOpacity>(null);
  const [isVisible, setIsVisible] = useState(false);

  const level = Math.floor(exp / 50);
  const remainingExp = exp - 50 * level;
  const completed = (remainingExp * 120) / 50;

  const handleOpen = () => {
    setIsVisible(true);
  };
  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.level}>
        <Text style={styles.levelText}>{level}</Text>
      </View>
      <TouchableOpacity
        onPress={handleOpen}
        activeOpacity={0.7}
        ref={touchableRef}>
        <View style={styles.progressBar}>
          <View style={styles.inner} />
          <View style={styles.outer(completed)} />
        </View>
      </TouchableOpacity>
      <Popover
        popoverStyle={styles.popover}
        onRequestClose={handleClose}
        from={touchableRef}
        isVisible={isVisible}>
        <Text style={{color: white}}>{50 - remainingExp} points left</Text>
      </Popover>
    </View>
  );
};

export default Level;
