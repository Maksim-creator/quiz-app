import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {white} from '../../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {AuthState, Badge, UserData} from '../../../redux/auth/entities';
import {isTablet} from '../../../utils';
import BadgeModal from '../BadgeModal';
import styles from './styles';

const Badges = () => {
  const {badges, data} = useSelector<RootState, AuthState>(state => state.auth);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState<Badge & {value: number}>();

  const handleModalOpen = (badge: Badge) => () => {
    if (data) {
      setIsVisible(true);
      setSelectedBadge({...badge, value: data[badge.name as keyof UserData]});
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setSelectedBadge(undefined);
  };

  return (
    <View>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.content}>
          {badges &&
            badges.map((item, index) => {
              return (
                <TouchableOpacity
                  key={item.name}
                  onPress={handleModalOpen(item)}
                  activeOpacity={0.5}
                  style={[
                    styles.hexagon,
                    index <= 2 && !isTablet() ? styles.firstLine : styles.line,
                  ]}>
                  <View style={styles.hexagonInner(item.badgeColor)} />
                  <View style={styles.hexagonBefore(item.badgeColor)} />
                  <View style={styles.hexagonAfter(item.badgeColor)} />
                  <View style={styles.halfCircle} />
                  <View style={styles.iconContainer(item)}>
                    <Icon name={item.icon} color={white} size={25} />
                  </View>
                </TouchableOpacity>
              );
            })}
        </View>
      </ScrollView>
      {selectedBadge && (
        <BadgeModal
          isVisible={isVisible}
          badge={selectedBadge}
          onClose={handleClose}
        />
      )}
    </View>
  );
};
export default Badges;
