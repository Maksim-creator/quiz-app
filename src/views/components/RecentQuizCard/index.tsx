import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {darkTan, white} from '../../../assets/colors';
import Text from '../../../components/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {QuestionsState} from '../../../redux/questions/entities';
import {icons} from '../../screens/TopicSelection/icons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationStack} from '../../../navigation/entities';
import {screenNames} from '../../../navigation/screenNames';
import Lines from '../../../assets/svg/Lines';

const RecentQuizCard = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const {recentQuiz} = useSelector<RootState, QuestionsState>(
    state => state.questions,
  );

  const navigateToQuiz = () => {
    navigation.navigate(screenNames.QUIZ_SCREEN, {
      categoryName: recentQuiz.category,
      topicName: recentQuiz.topic,
      author: recentQuiz.author,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={navigateToQuiz}>
      {recentQuiz.topic.length ? (
        <View style={styles.wrapper}>
          <View style={styles.info}>
            <Text style={styles.label}>RECENT QUIZ</Text>
            <View style={styles.quizInfo}>
              <Icon
                name={
                  icons[recentQuiz?.category.toLowerCase()][
                    recentQuiz?.topic.toLowerCase()
                  ]
                }
                size={20}
                color={darkTan}
              />
              <Text style={styles.quizTitle}>A {recentQuiz.category} Quiz</Text>
            </View>
          </View>
          <View style={styles.circle}>
            <Text style={styles.circleText}>{recentQuiz.donePercentage}%</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.noRecentQuizzes}>Try to take part in quizzes</Text>
      )}
      <Lines />
    </TouchableOpacity>
  );
};

export default RecentQuizCard;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#ffccd5',
    marginVertical: 15,
    borderRadius: 15,
  },
  noRecentQuizzes: {
    paddingVertical: 37,
    textAlign: 'center',
    paddingHorizontal: 25,
    fontWeight: '700',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 25,
  },
  info: {
    height: 50,
    justifyContent: 'space-between',
  },
  label: {
    color: '#bb727e',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 2,
  },
  quizInfo: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  quizTitle: {
    color: '#700e1f',
    fontSize: 18,
    fontWeight: '700',
    paddingTop: 3,
    marginLeft: 6,
  },
  circle: {
    height: 50,
    width: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,143,162,0.5)',
  },
  circleText: {color: white, fontWeight: '700'},
});
