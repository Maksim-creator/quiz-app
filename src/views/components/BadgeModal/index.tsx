import React from 'react';
import Modal from 'react-native-modal';
import {Image, View} from 'react-native';
import Text from '../../../components/Text';
import {Badge} from '../../../redux/auth/entities';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import Medal from '../../../assets/svg/Medal';
import {renderBadgeValues, roundBadgeValue} from './utils';

interface Props {
  isVisible: boolean;
  badge: Badge & {value: number};
  onClose: () => void;
}

const BadgeModal: React.FC<Props> = ({isVisible, badge, onClose}) => {
  return (
    <Modal
      isVisible={isVisible}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      onBackdropPress={onClose}
      useNativeDriver
      useNativeDriverForBackdrop
      hideModalContentWhileAnimating
      backdropTransitionOutTiming={0}>
      <View style={styles.container}>
        <Image
          source={require('../../../assets/badge_top_modal.jpeg')}
          resizeMode={'cover'}
          style={styles.topImage}
        />
        <Icon
          name={'close'}
          size={25}
          color={'black'}
          onPress={onClose}
          style={styles.closeIcon}
        />
        <Text style={styles.title}>{badge.title}</Text>
        <Text style={styles.description}>{badge.description}</Text>
        {renderBadgeValues(badge).map(item => (
          <View key={item.value} style={styles.card}>
            <Medal palette={item.palette} />
            <View style={styles.cardInfo}>
              <Text
                style={[
                  styles.progressText,
                  {
                    ...((roundBadgeValue(badge, item.value) * 100) /
                      +item.value ===
                      100 && {
                      color: '#279601',
                    }),
                  },
                ]}>
                {(roundBadgeValue(badge, item.value) * 100) / +item.value ===
                100
                  ? 'Done'
                  : 'In progress'}
              </Text>
              <View style={styles.progressLine}>
                <View style={styles.outerLine} />
                <View
                  style={[
                    styles.innerLine,
                    {
                      width: `${
                        (roundBadgeValue(badge, item.value) * 100) / +item.value
                      }%`,
                    },
                  ]}
                />
              </View>
              <Text style={styles.score}>
                {roundBadgeValue(badge, item.value)}/{item.value}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </Modal>
  );
};

export default BadgeModal;
