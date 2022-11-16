import React, {useEffect, useRef} from 'react';
import {
  ActivityIndicator,
  Animated,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../../components/Text';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';
import {AuthState} from '../../../redux/auth/entities';
import {renderGreeting} from './utils';
import {launchImageLibrary} from 'react-native-image-picker';
import {uploadAvatarThunk} from '../../../redux/auth/thunk';
import {white} from '../../../assets/colors';

const HomeHeader = () => {
  const {name} = useSelector<RootState, AuthState>(state => state.auth);
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch<AppDispatch>();
  const {avatar, avatarLoading} = useSelector<RootState, AuthState>(
    state => state.auth,
  );

  const greeting = renderGreeting();

  useEffect(() => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      useNativeDriver: true,
      duration: 1000,
    }).start();
  }, []);

  const chooseFile = async () => {
    const {assets} = await launchImageLibrary({mediaType: 'photo'});

    const formData = new FormData();
    formData.append('file', {
      uri: assets![0]!.uri,
      type: assets![0]!.type!,
      name: assets![0].fileName,
    } as any);
    dispatch(uploadAvatarThunk(formData));
  };

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
        <TouchableOpacity style={styles.avatarContainer} onPress={chooseFile}>
          {avatarLoading ? (
            <ActivityIndicator color={white} size={'small'} />
          ) : (
            <Image
              source={{
                uri: avatar
                  ? 'data:image/jpeg;base64,' + avatar
                  : 'https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png',
              }}
              resizeMode={'cover'}
              style={styles.avatar}
            />
          )}
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default HomeHeader;
