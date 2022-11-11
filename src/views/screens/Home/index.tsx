import React, {useEffect} from 'react';
import {
  Dimensions,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import HomeHeader from '../../components/HomeHeader';
import RecentQuizCard from '../../components/RecentQuizCard';
import {violet} from '../../../assets/colors';
import FindFriendsCard from '../../components/FindFriendsCard';
import Text from '../../../components/Text';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {isTablet} from '../../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';
import {getTopicsThunk} from '../../../redux/questions/thunk';
import {QuestionsState} from '../../../redux/questions/entities';
import {Question} from '../../../entities';
import {icons} from '../TopicSelection/icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationStack} from '../../../navigation/entities';
import {screenNames} from '../../../navigation/screenNames';

const MAX_TRANSLATE_Y = -Dimensions.get('window').height + 250;
const MIN_TRANSLATE_Y = !isTablet()
  ? -Dimensions.get('window').height / 2.7
  : -Dimensions.get('window').height / 1.4;

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});
  const dispatch = useDispatch<AppDispatch>();

  const {topic} = useSelector<RootState, QuestionsState>(
    state => state.questions,
  );

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(e => {
      translateY.value = e.translationY + context.value.y;
      if (translateY.value > MIN_TRANSLATE_Y) {
        translateY.value = withSpring(MIN_TRANSLATE_Y);
      } else if (translateY.value < MAX_TRANSLATE_Y) {
        translateY.value = withSpring(MAX_TRANSLATE_Y, {
          damping: 10,
        });
      }
    })
    .onEnd(e => {
      if (e.translationY < MIN_TRANSLATE_Y / 2) {
        translateY.value = withSpring(MAX_TRANSLATE_Y);
      } else {
        translateY.value = withSpring(MIN_TRANSLATE_Y);
      }
    });

  const reanimatedSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  const navigateToQuiz =
    (item: {
      topic: string;
      selectedTimes: number;
      quiz: Question[];
      author: string;
    }) =>
    () => {
      navigation.navigate(screenNames.QUIZ_SCREEN, {
        author: item.author,
        topicName: item.topic,
        categoryName: topic!.category,
      });
    };

  const navigateToTopic = () => {
    navigation.navigate(screenNames.TOPICS, {
      category: topic!.category,
    });
  };

  const renderItem: ListRenderItem<{
    topic: string;
    selectedTimes: number;
    quiz: Question[];
    author: string;
  }> = ({item}) => {
    return (
      <TouchableOpacity style={styles.card} onPress={navigateToQuiz(item)}>
        <View style={styles.item}>
          <View style={styles.itemIconWrapper}>
            <Icon
              name={
                icons[topic!.category.toLowerCase()][item.topic.toLowerCase()]
              }
              color={violet}
              size={24}
            />
          </View>
          <View style={styles.itemTopicDetails}>
            <Text style={styles.itemTopicName}>{item.topic}</Text>
            <Text style={styles.itemCategoryName}>{topic?.category}</Text>
          </View>
        </View>
        <Icon name={'chevron-right'} size={27} color={violet} />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    translateY.value = withSpring(MIN_TRANSLATE_Y);
    dispatch(getTopicsThunk({category: 'Math'}));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <HomeHeader />
        <RecentQuizCard />
        <FindFriendsCard />
      </View>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.actionsheet, reanimatedSheetStyle]}>
          <View style={styles.header}>
            <Text style={styles.title}>Live Quizzes</Text>
            <TouchableOpacity
              style={styles.showAllButton}
              onPress={navigateToTopic}>
              <Text style={styles.showAllButtonText}>See all</Text>
            </TouchableOpacity>
          </View>
          {topic ? (
            <FlatList
              data={topic.data}
              renderItem={renderItem}
              style={styles.flatList}
            />
          ) : null}
        </Animated.View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default Home;
