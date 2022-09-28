import React, {useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {violet, white} from '../../../../assets/colors';
import Button from '../../../components/Button';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TopCircles from '../../../components/TopCircles';

interface Props {
  handleStart: (count: number) => void;
  category: string;
}

const CountSelection: React.FC<Props> = ({handleStart, category}) => {
  const [count, setCount] = useState(5);
  const animatedBlock = useRef(new Animated.Value(0)).current;
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const blockInterpolation = animatedBlock.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -40, Dimensions.get('screen').height],
  });

  const opacityInterpolation = animatedOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.2, 0],
  });

  const handleIncrease = () => {
    if (count < 20) {
      setCount(prevState => prevState + 5);
    }
  };

  const handleDecrease = () => {
    if (count > 5) {
      setCount(prevState => prevState - 5);
    }
  };

  const start = () => {
    Animated.sequence([
      Animated.timing(animatedBlock, {
        useNativeDriver: true,
        duration: 600,
        toValue: 1,
        easing: Easing.linear,
      }),
      Animated.timing(animatedOpacity, {
        useNativeDriver: true,
        duration: 1000,
        toValue: 1,
        easing: Easing.linear,
      }),
    ]).start(() => handleStart(count));
  };

  return (
    <View style={styles.container}>
      <TopCircles opacity={opacityInterpolation} />
      <Animated.View
        style={[
          styles.mainBlock,
          {transform: [{translateY: blockInterpolation}]},
        ]}>
        <Text style={styles.label}>{category.toUpperCase()}</Text>
        <Text style={styles.title}>Basic {category} Quiz</Text>
        <View style={styles.configBlock}>
          <View style={styles.configItem}>
            <View style={styles.circleIcon(violet)}>
              <Icon name={'help'} size={20} color={white} />
            </View>
            <Text style={styles.itemText}>{count} questions</Text>
          </View>
          <View style={styles.picker}>
            <TouchableOpacity
              disabled={count === 20}
              onPress={handleIncrease}
              style={styles.pickerButton(count === 20)}>
              <Icon name={'chevron-up'} size={18} color={white} />
            </TouchableOpacity>
            <TouchableOpacity
              disabled={count === 5}
              onPress={handleDecrease}
              style={styles.pickerButton(count === 5)}>
              <Icon name={'chevron-down'} size={18} color={white} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.configBlock}>
          <View style={styles.configItem}>
            <View style={styles.circleIcon('#ff8fa2')}>
              <Icon name={'puzzle'} size={20} color={white} />
            </View>
            <Text style={styles.itemText}>+{count * 5} points</Text>
          </View>
        </View>
        <View style={styles.descriptionContent}>
          <Text style={styles.label}>DESCRIPTION</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            asperiores commodi deserunt dolore error, est illo incidunt
          </Text>
        </View>
        <View style={styles.authorBlock}>
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
            }}
            style={{height: 50, width: 50}}
            resizeMode={'cover'}
          />
          <View style={styles.nameContainer}>
            <Text style={styles.name}>Bernard Grey</Text>
            <Text style={styles.role}>Creator</Text>
          </View>
        </View>
        <Button
          textStyles={{color: violet}}
          styles={styles.startButton}
          text={'Start'}
          onPress={start}
        />
      </Animated.View>
    </View>
  );
};

export default CountSelection;
