import React, {useEffect, useMemo, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Text from '../../../components/Text';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {pink, violet, white} from '../../../assets/colors';
import styles from './styles';
import Input from '../../../components/Input';
import TopPicksCard from '../../components/TopPicksCard';
import BottomRightLines from '../../../assets/svg/BottomRightLines';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../../navigation/screenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationStack} from '../../../navigation/entities';
import Lottie from 'lottie-react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserLeaderThunk} from '../../../redux/leaderboard/thunk';
import {AppDispatch, RootState} from '../../../redux/store';
import {InitialState as LeaderboardState} from '../../../redux/leaderboard/entinties';
import {
  getCategoriesThunk,
  getTopSelectedThunk,
} from '../../../redux/questions/thunk';
import {QuestionsState} from '../../../redux/questions/entities';
import {isTablet} from '../../../utils';
import {defaultAvatar} from '../../../constants';

const MAX_TRANSLATE_Y = -Dimensions.get('window').height + 180;
const MIN_TRANSLATE_Y = !isTablet()
  ? -Dimensions.get('window').height / 1.9
  : -Dimensions.get('window').height / 1.4;

const Discover = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const dispatch = useDispatch<AppDispatch>();
  const ref = useRef<Lottie>(null);
  const [search, setSearch] = useState('');
  const [isShowButtonVisible, setShowButtonVisible] = useState(false);
  const translateY = useSharedValue(0);
  const context = useSharedValue({y: 0});

  const {leader, leaderError, leaderLoading} = useSelector<
    RootState,
    LeaderboardState
  >(state => state.leaderboard);
  const {categories} = useSelector<RootState, QuestionsState>(
    state => state.questions,
  );

  const handleChangeSearch = (value: string) => {
    setSearch(value);
  };

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {y: translateY.value};
    })
    .onUpdate(e => {
      translateY.value = e.translationY + context.value.y;
      if (translateY.value <= MAX_TRANSLATE_Y) {
        runOnJS(setShowButtonVisible)(true);
      } else {
        runOnJS(setShowButtonVisible)(false);
      }
      if (translateY.value > MIN_TRANSLATE_Y) {
        translateY.value = withSpring(MIN_TRANSLATE_Y);
      } else if (translateY.value < MAX_TRANSLATE_Y) {
        translateY.value = withSpring(MAX_TRANSLATE_Y, {
          damping: 10,
        });
      }
    });

  const reanimatedSheetStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  useEffect(() => {
    dispatch(getUserLeaderThunk());
    dispatch(getCategoriesThunk());
    dispatch(getTopSelectedThunk());
    translateY.value = withSpring(MIN_TRANSLATE_Y);
  }, []);

  const navigateToQuiz = (category: string) => {
    navigation.navigate(screenNames.TOPICS, {category});
  };

  useEffect(() => {
    if (search.length) {
      translateY.value = withSpring(MAX_TRANSLATE_Y);
    } else {
      translateY.value = withSpring(MIN_TRANSLATE_Y);
    }
  }, [search]);

  const renderItem: ListRenderItem<{icon: string; label: string}> = ({
    item: category,
  }) => {
    return (
      <TouchableHighlight
        underlayColor={pink}
        key={category.icon}
        onPress={() => navigateToQuiz(category.label)}
        style={styles.item}>
        <View style={styles.category}>
          <View style={styles.iconContainer}>
            <Icon color={violet} size={25} name={category.icon} />
          </View>
          <Text style={[styles.label, {color: violet}]}>{category.label}</Text>
        </View>
      </TouchableHighlight>
    );
  };

  const navigateToCategories = () =>
    navigation.navigate(screenNames.QUIZ_SELECTION, {});

  const filteredCategories = useMemo(() => {
    if (categories) {
      return categories.filter(category =>
        category.label.toLowerCase().includes(search),
      );
    } else {
      return [];
    }
  }, [categories, search]);

  const goHome = () => navigation.navigate(screenNames.HOME);

  useEffect(() => {
    if (ref.current) {
      if (!filteredCategories.length && search.length) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  }, [filteredCategories.length, search]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name={'chevron-left'}
          size={30}
          color={white}
          style={styles.backIcon}
          onPress={goHome}
        />
        <Text style={styles.headerTitle}>Discover</Text>
      </View>
      <Input
        styles={styles.input}
        inputStyles={styles.inputStyles}
        value={search}
        handleValueChange={handleChangeSearch}
        handleBlur={() => {}}
        placeholder={'Quiz or categories'}
        label={''}
        iconName={'magnify'}
        iconColor={white}
        placeholderTextColor={'#d7d7d7'}
      />
      <TopPicksCard />
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.content, reanimatedSheetStyle]}>
          <Text style={styles.contentTitle}>Top rank of the game</Text>
          {leaderLoading ? (
            <View style={styles.spinnerContainer}>
              <ActivityIndicator size={'large'} color={violet} />
            </View>
          ) : (
            <View style={styles.topPlayer}>
              {leaderError ? (
                <Text style={styles.error}>{leaderError}</Text>
              ) : (
                <View>
                  {leader ? (
                    <View style={styles.leaderboard}>
                      <View style={styles.topPosition}>
                        <Text style={styles.firstText}>1</Text>
                      </View>
                      <Image
                        source={{
                          uri: leader.avatar
                            ? 'data:image/jpeg;base64,' + leader.avatar
                            : defaultAvatar,
                        }}
                        resizeMode={'cover'}
                        style={styles.avatar}
                      />
                      <View style={styles.leaderboardContent}>
                        <Text style={styles.leaderName}>{leader.name}</Text>
                        <Text style={styles.totalPoints}>
                          {leader.totalExperience} points
                        </Text>
                      </View>
                    </View>
                  ) : null}
                </View>
              )}
              {!leaderError && !leaderLoading && (
                <>
                  <BottomRightLines />
                  <Icon
                    name={'crown'}
                    size={30}
                    color={'#fed54b'}
                    style={styles.crownIcon}
                  />
                </>
              )}
            </View>
          )}
          <View style={styles.actionSheet(isShowButtonVisible)}>
            <Text style={styles.contentTitle}>Categories</Text>
            {isShowButtonVisible && (
              <TouchableOpacity
                onPress={navigateToCategories}
                style={styles.showAllButton}>
                <Text style={styles.showAllButtonText}>See all</Text>
              </TouchableOpacity>
            )}
          </View>
          {filteredCategories.length ? (
            <FlatList
              data={filteredCategories}
              renderItem={renderItem}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              columnWrapperStyle={styles.columnWrapperStyle}
              contentContainerStyle={styles.contentContainerStyle}
              style={styles.list}
            />
          ) : (
            <View style={styles.noQuizzesCard}>
              <Lottie
                style={styles.noQuizzesCardLottie}
                ref={ref}
                source={require('../../../assets/purple-dog-walking.json')}
              />
              <Text style={styles.noQuizzesText}>
                There are no quizzes in this category
              </Text>
            </View>
          )}
        </Animated.View>
      </GestureDetector>
    </SafeAreaView>
  );
};

export default Discover;
