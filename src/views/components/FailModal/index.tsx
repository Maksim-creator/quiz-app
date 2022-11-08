import React, {useEffect, useRef} from 'react';
import Modal from 'react-native-modal';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Lottie from 'lottie-react-native';
import Button from '../../../components/Button';
import {quotes} from '../../../constants';
import Text from '../../../components/Text';
import styles from './styles';

interface Props {
  isVisible: boolean;
  onClose: () => void;
}

const FailModal: React.FC<Props> = ({isVisible, onClose}) => {
  const ref = useRef<Lottie>(null);
  const numberOfQuote = Math.floor(Math.random() * 3);

  useEffect(() => {
    if (ref.current) {
      ref.current.play();
    }
  }, []);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      useNativeDriver
      useNativeDriverForBackdrop={true}
      hideModalContentWhileAnimating
      backdropTransitionOutTiming={0}>
      <View style={styles.container}>
        <View>
          <Icon
            onPress={onClose}
            style={styles.icon}
            name={'close'}
            size={25}
            color={'black'}
          />
          <Text style={styles.label}>Oh no, your time is up!</Text>
          <Text style={styles.description}>But you still have a chance</Text>
          <Lottie
            style={styles.clock}
            source={require('../../../assets/times_up.json')}
            ref={ref}
          />
          <View style={styles.quoteWrapper}>
            <Text style={styles.quote}>
              {quotes[numberOfQuote].quote}
              <Text style={styles.author}>{quotes[numberOfQuote].author}</Text>
            </Text>
          </View>
        </View>
        <Button text={'Continue'} onPress={onClose} />
      </View>
    </Modal>
  );
};

export default FailModal;
