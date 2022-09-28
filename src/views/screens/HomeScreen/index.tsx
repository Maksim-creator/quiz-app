import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {white} from '../../../../assets/colors';
import Button from '../../../components/Button';
import {userInfo} from './constants';
import {screenNames} from '../../../navigation/screenNames';
import {NavigationStack} from '../../../navigation/entities';
import TopCircles from '../../../components/TopCircles';
import styles from './styles';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();

  const redirectTo = () => {
    navigation.navigate(screenNames.QUIZ_SELECTION);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopCircles />
      <View style={styles.wrapper}>
        <View>
          <Image
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-1024.png',
            }}
            resizeMode={'cover'}
            style={styles.avatar}
          />
          <Text style={styles.name}>John Doe</Text>
          <View style={styles.info}>
            {userInfo.map(item => (
              <View key={item.label} style={styles.item}>
                <Icon name={item.icon} size={25} color={white} />
                <Text style={styles.label}>{item.label}</Text>
                <Text style={styles.text}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.buttons}>
          <Button
            styles={styles.button}
            text={'Random quiz'}
            onPress={() => {}}
          />
          <Button
            styles={styles.button}
            text={'Select quiz'}
            onPress={redirectTo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
