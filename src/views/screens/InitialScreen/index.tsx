import React, {useCallback, useEffect, useMemo} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  ImageBackground,
  SafeAreaView,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Button from '../../../components/Button';
import {welcomeMessage} from '../../../constants';
import {screenNames} from '../../../navigation/screenNames';
import {NavigationStack} from '../../../navigation/entities';
import {styles, animatedText} from './styles';

const InitialScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const buttonAnimation = useMemo(() => new Animated.Value(0), []);
  const welcomeMessageArray = welcomeMessage.split('');
  const animatedValues: Animated.Value[] = welcomeMessageArray.map(
    _ => new Animated.Value(0),
  );

  const animated = useCallback((toValue = 1) => {
    const animations = welcomeMessageArray.map((word, idx) => {
      return Animated.timing(animatedValues[idx], {
        useNativeDriver: true,
        toValue,
        easing: Easing.linear,
        duration: 400,
      });
    });

    Animated.sequence([
      Animated.stagger(100, animations),
      Animated.timing(buttonAnimation, {
        toValue: 1,
        useNativeDriver: true,
        duration: 1000,
      }),
    ]).start();
  }, []);

  const handleStart = () => {
    navigation.navigate(screenNames.HOME_SCREEN);
  };

  const translation = buttonAnimation.interpolate({
    inputRange: [0, 0.6, 0.9, 1],
    outputRange: [Dimensions.get('screen').height / 4 + 50, -20, 20, 0],
  });

  useEffect(() => {
    animated();
  }, [animated]);

  return (
    <ImageBackground
      style={styles.image}
      source={{
        uri: 'https://www.fonewalls.com/wp-content/uploads/2019/10/Clouds-White-Mountain-Wallpaper-HD.jpg',
      }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          {welcomeMessageArray.map((word, index) => (
            <Animated.Text
              style={animatedText(animatedValues, index)}
              key={`${word}-${index}`}>
              {word}
            </Animated.Text>
          ))}
        </View>
        <Animated.View style={{transform: [{translateY: translation}]}}>
          <Button onPress={handleStart} text={"Let's start"} />
        </Animated.View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default InitialScreen;
