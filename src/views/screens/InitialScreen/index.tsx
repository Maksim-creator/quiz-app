import React, {useEffect, useRef} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {screenNames} from '../../../navigation/screenNames';
import {NavigationStack} from '../../../navigation/entities';
import {styles} from './styles';
import TopCircles from '../../../components/TopCircles';
import MiddleCircles from '../../../components/MiddleCircles';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import Lottie from 'lottie-react-native';
import Logo from '../../../assets/svg/Logo';

const InitialScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const ref = useRef<Lottie>(null);

  useEffect(() => {
    ref.current?.play();
  }, []);

  const handleRegistration = () => {
    navigation.navigate(screenNames.SIGN_UP);
  };

  const handleLogin = () => {
    navigation.navigate(screenNames.SIGN_IN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopCircles />
      <MiddleCircles />
      <Logo />
      <Lottie
        style={styles.lottieAnimation}
        source={require('../../../assets/initialScreen.json')}
        ref={ref}
      />
      <View style={styles.mainBlock}>
        <Text style={styles.label}>Login or Sign Up</Text>
        <Text style={styles.description}>
          Login or create an account to take quiz, take part in challenges and
          more.
        </Text>
        <View style={styles.buttons}>
          <Button text={'Login'} onPress={handleLogin} styles={styles.button} />
          <Button
            text={'Create an account'}
            onPress={handleRegistration}
            styles={styles.createAccountButton}
            textStyles={styles.buttonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InitialScreen;
