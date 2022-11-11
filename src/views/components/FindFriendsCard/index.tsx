import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from '../../../components/Text';
import Button from '../../../components/Button';
import {violet, white} from '../../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Circle from '../../../assets/svg/Circle';

const FindFriendsCard = () => {
  return (
    <View style={styles.container}>
      <Circle right={-50} top={-50} />
      <Circle bottom={-50} left={-50} />
      <Text style={styles.label}>FEATURED</Text>
      <Text style={styles.text}>
        Take part in challenges with friends or other players
      </Text>
      <Button
        text={'Find Friends'}
        onPress={() => {}}
        styles={styles.button}
        textStyles={styles.buttonText}
        leftIcon={() => (
          <Icon
            name={'account-search'}
            style={styles.icon}
            size={20}
            color={violet}
          />
        )}
      />
    </View>
  );
};

export default FindFriendsCard;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'rgba(255,255,255, 0.2)',
    paddingVertical: 40,
    borderRadius: 17,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: white,
    width: '50%',
    alignSelf: 'center',
    borderRadius: 30,
    paddingVertical: 14,
  },
  buttonText: {
    color: violet,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    color: white,
    opacity: 0.7,
    fontWeight: '600',
    textAlign: 'center',
    letterSpacing: 1.5,
  },
  text: {
    color: white,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    paddingVertical: 15,
    width: '60%',
    alignSelf: 'center',
    lineHeight: 24,
  },
});
