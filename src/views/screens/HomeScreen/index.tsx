import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {white} from '../../../assets/colors';
import TopCircles from '../../../components/TopCircles';
import Text from '../../../components/Text';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';
import {AuthState} from '../../../redux/auth/entities';
import Level from '../../components/Level';
import {Route, SceneMap, TabBar, TabView} from 'react-native-tab-view';
import Badges from '../../components/Badges';
import Rating from '../../components/Rating';
import UserDetails from '../../components/UserDetails';
import {
  NavigationState,
  SceneRendererProps,
} from 'react-native-tab-view/lib/typescript/types';
import {getUserBadgesThunk, signOutThunk} from '../../../redux/auth/thunk';
import {tabRoutes as routes} from './constants';

const renderScene = SceneMap({
  badge: Badges,
  stats: Rating,
  details: UserDetails,
});

const HomeScreen = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {data, name} = useSelector<RootState, AuthState>(state => state.auth);
  useEffect(() => {
    dispatch(getUserBadgesThunk());
  }, [dispatch]);

  const [tabIndex, setTabIndex] = useState(0);

  const renderTabBar = (
    props: SceneRendererProps & {
      navigationState: NavigationState<Route>;
    },
  ) => {
    return (
      <TabBar
        {...props}
        renderLabel={({focused, route}) => {
          return <Text style={styles.tabText(focused)}>{route.title}</Text>;
        }}
        indicatorStyle={styles.tabIndicator}
        style={styles.tabBar}
      />
    );
  };

  const handleLogout = () => {
    dispatch(signOutThunk());
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopCircles />
      {data && (
        <View style={styles.header}>
          <Level exp={data.totalExperience} />
          <Icon
            name={'logout-variant'}
            color={white}
            size={30}
            style={styles.signOutIcon}
            onPress={handleLogout}
          />
        </View>
      )}
      <View style={styles.wrapper}>
        <View>
          <Image
            source={{
              uri: 'https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-3-1024.png',
            }}
            resizeMode={'cover'}
            style={styles.avatar}
          />
          <Text style={styles.name}>{name}</Text>
          {data && (
            <View style={styles.info}>
              <View style={styles.item}>
                <Icon name={'puzzle-outline'} size={25} color={white} />
                <Text style={styles.label}>BALANCE</Text>
                <Text style={styles.text}>{data.balance}</Text>
              </View>
              <View style={styles.item}>
                <Icon name={'star-outline'} size={25} color={white} />
                <Text style={styles.label}>EXP</Text>
                <Text style={styles.text}>{data.totalExperience}</Text>
              </View>
              <View style={styles.item}>
                <Icon name={'earth'} size={25} color={white} />
                <Text style={styles.label}>RANK</Text>
                <Text style={styles.text}>#{data.rank}</Text>
              </View>
            </View>
          )}
        </View>
        <TabView
          onIndexChange={setTabIndex}
          navigationState={{
            index: tabIndex,
            routes,
          }}
          renderScene={renderScene}
          initialLayout={styles.initialLayout}
          sceneContainerStyle={styles.sceneContainer}
          renderTabBar={renderTabBar}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
