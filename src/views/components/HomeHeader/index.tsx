import React, {useEffect, useRef} from 'react';
import {Animated, Image, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../../components/Text';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {AuthState} from '../../../redux/auth/entities';
import {renderGreeting} from './utils';

const HomeHeader = () => {
  const {name} = useSelector<RootState, AuthState>(state => state.auth);
  const animatedOpacity = useRef(new Animated.Value(0)).current;

  const greeting = renderGreeting();

  useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, {opacity: animatedOpacity}]}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <View style={styles.dayInfo}>
            <Icon size={25} name={greeting.iconName} color={'#d0afde'} />
            <Text style={styles.dayInfoText}>{greeting.label}</Text>
          </View>
          <Text style={styles.name}>{name}</Text>
        </View>
        <Image
          source={{
            uri: 'https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-1024.png',
          }}
          resizeMode={'cover'}
          style={styles.avatar}
        />
      </View>
    </Animated.View>
  );
};

export default HomeHeader;
