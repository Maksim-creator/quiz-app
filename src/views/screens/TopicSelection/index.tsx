import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Question} from '../../../entities';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';
import {getTopicsThunk} from '../../../redux/questions/thunk';
import {QuestionsState} from '../../../redux/questions/entities';
import {violet, white} from '../../../assets/colors';
import TopCircles from '../../../components/TopCircles';
import Text from '../../../components/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationStack} from '../../../navigation/entities';
import {screenNames} from '../../../navigation/screenNames';
import {icons} from './icons';
import styles from './styles';

export type ParamList = {
  TopicSelection: {
    category: string;
  };
};

const TopicSelection = () => {
  const route = useRoute<RouteProp<ParamList, 'TopicSelection'>>();
  const dispatch = useDispatch<AppDispatch>();
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();

  const {topic, topicLoading} = useSelector<RootState, QuestionsState>(
    state => state.questions,
  );

  const navigateToQuestions = ({
    topicName,
    author,
  }: {
    topicName: string;
    author: string;
  }) =>
    navigation.navigate(screenNames.QUIZ_SCREEN, {
      categoryName: route.params.category,
      topicName,
      author,
    });

  const renderItem: ListRenderItem<{
    topic: string;
    selectedTimes: number;
    quiz: Question[];
    author: string;
  }> = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigateToQuestions({topicName: item.topic, author: item.author})
        }
        style={styles.cardItem}>
        <View style={styles.cardItemContent}>
          <View style={styles.iconContainer}>
            <Icon
              name={
                icons[topic!.category.toLowerCase()][item.topic.toLowerCase()]
              }
              color={violet}
              size={20}
            />
          </View>
          <View style={styles.cardItemInfo}>
            <Text style={styles.topicName}>{item.topic}</Text>
            <Text style={styles.author}>{item.author}</Text>
          </View>
        </View>
        <Icon name={'chevron-right'} color={violet} size={20} />
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    dispatch(getTopicsThunk({category: route.params.category}));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TopCircles />
      <View style={styles.header}>
        <Icon
          name={'chevron-left'}
          size={35}
          onPress={() => navigation.goBack()}
          color={white}
          style={styles.backIcon}
        />
        <Text style={styles.label}>Choose topic</Text>
      </View>
      <View style={styles.content}>
        {topicLoading || !topic ? (
          <ActivityIndicator
            size={'large'}
            color={violet}
            style={styles.spinner}
          />
        ) : (
          <View style={styles.cards}>
            <Text style={styles.category}>{topic.category}</Text>
            <FlatList
              data={topic.data}
              renderItem={renderItem}
              style={styles.flatList}
            />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default TopicSelection;
