import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {white} from '../../../assets/colors';
import Button from '../../../components/Button';
import {screenNames} from '../../../navigation/screenNames';
import {NavigationStack} from '../../../navigation/entities';
import TopCircles from '../../../components/TopCircles';
import Text from '../../../components/Text';
import styles from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {AuthState} from '../../../redux/auth/entities';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const {data, name} = useSelector<RootState, AuthState>(state => state.auth);

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
          <Text style={styles.name}>{name}</Text>
          {data && (
            <View style={styles.info}>
              <View style={styles.item}>
                <Icon name={'cash'} size={25} color={white} />
                <Text style={styles.label}>BALANCE</Text>
                <Text style={styles.text}>{data?.balance}</Text>
              </View>
              <View style={styles.item}>
                <Icon name={'star-outline'} size={25} color={white} />
                <Text style={styles.label}>LEVEL</Text>
                <Text style={styles.text}>{data?.level}</Text>
              </View>
              <View style={styles.item}>
                <Icon name={'earth'} size={25} color={white} />
                <Text style={styles.label}>RANK</Text>
                <Text style={styles.text}>#{data?.rank}</Text>
              </View>
            </View>
          )}
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
