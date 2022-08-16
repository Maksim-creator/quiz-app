import React from 'react';
import {Image, ImageBackground, SafeAreaView, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {lightBlack} from '../../../../assets/colors';
import Button from '../../../components/Button';
import {userInfo} from './constants';
import styles from './styles';

const HomeScreen = () => {
  const img = require('../../../../assets/homeScreenBackground.png');
  return (
    <ImageBackground source={img}>
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <Icon name={'cog'} color={lightBlack} size={25} />
            <Icon name={'help-circle-outline'} color={lightBlack} size={25} />
          </View>
          <View style={styles.user}>
            <Image
              source={{
                uri: 'https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-1024.png',
              }}
              resizeMode={'cover'}
              style={styles.avatar}
            />
            <View style={styles.content}>
              <View style={styles.infoContainer}>
                <Text style={styles.boldText}>Nickname</Text>
                <View style={styles.info}>
                  {userInfo.map(item => (
                    <View key={item.label}>
                      <Text style={styles.boldText}>{item.label}</Text>
                      <Text style={styles.text}>{item.value}</Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.buttons}>
          <Button text={'Random quiz'} onPress={() => {}} />
          <Button text={'Select quiz'} onPress={() => {}} />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
