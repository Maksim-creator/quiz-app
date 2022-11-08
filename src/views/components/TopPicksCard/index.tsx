import React, {useEffect, useRef} from 'react';
import {ActivityIndicator, TouchableOpacity, View} from 'react-native';
import {darkTan, white} from '../../../assets/colors';
import Text from '../../../components/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Lottie from 'lottie-react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {QuestionsState} from '../../../redux/questions/entities';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../../navigation/screenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationStack} from '../../../navigation/entities';
import {icons} from '../../screens/TopicSelection/icons';

const TopPicksCard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const ref = useRef<Lottie>(null);
  const {topSelected, topSelectedError, topSelectedLoading} = useSelector<
    RootState,
    QuestionsState
  >(state => state.questions);

  const topSelectedTopic = topSelected?.data.reduce(function (prev, current) {
    return prev.selectedTimes > current.selectedTimes ? prev : current;
  });

  const handleRedirect = () => {
    navigation.navigate(screenNames.QUIZ_SCREEN, {
      categoryName: topSelected!.category,
      topicName: topSelectedTopic!.topic,
      author: topSelectedTopic!.author,
    });
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.play();
    }
  }, []);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handleRedirect}
      style={styles.container}>
      <View style={styles.topPicksWrapper}>
        <Text style={styles.topPicksText}>TOP PICKS</Text>
      </View>
      {topSelectedError ? (
        <Text>Can not upload top picked quiz</Text>
      ) : (
        <View style={styles.content}>
          {topSelectedLoading ? (
            <ActivityIndicator
              size={'large'}
              style={styles.spinner}
              color={white}
            />
          ) : (
            <View style={styles.card}>
              <Text style={styles.quizName}>{topSelected?.category} quiz</Text>
              <View style={styles.quizInfo}>
                {topSelected && topSelectedTopic && (
                  <Icon
                    name={
                      icons[topSelected.category.toLowerCase()][
                        topSelectedTopic.topic.toLowerCase()
                      ]
                    }
                    color={darkTan}
                    size={18}
                  />
                )}
                <Text style={styles.category}>{topSelectedTopic?.topic}</Text>
                <Text style={styles.dot}>●</Text>
                <Text style={styles.numOfQuizzes}>
                  {topSelected?.data?.length} Quizzes
                </Text>
              </View>
            </View>
          )}
        </View>
      )}
      {!topSelectedError && !topSelectedLoading && (
        <Lottie
          style={styles.lottieAnimation}
          source={require('../../../assets/top-picks card.json')}
          ref={ref}
        />
      )}
    </TouchableOpacity>
  );
};

export default TopPicksCard;
