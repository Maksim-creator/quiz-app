import React, {useEffect, useMemo} from 'react';
import {
  Animated,
  Easing,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationStack} from '../../../navigation/entities';
import {screenNames} from '../../../navigation/screenNames';
import {categories} from './constants';
import styles from './styles';

const QuizSelection = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const animatedSections: Animated.Value[] = useMemo(
    () => categories.map(_ => new Animated.Value(0)),
    [],
  );

  const animated = () => {
    const animations = categories.map((item, i) => {
      return Animated.timing(animatedSections[i], {
        toValue: 1,
        useNativeDriver: true,
        duration: 200,
        easing: Easing.linear,
      });
    });
    Animated.stagger(300, animations).start();
  };

  const handleCategorySelect =
    (categoryName: string, imageUrl: string) => () => {
      navigation.navigate(screenNames.QUIZ_SCREEN, {categoryName, imageUrl});
    };

  useEffect(() => {
    animated();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name={'chevron-left'}
          style={styles.backIcon}
          onPress={navigation.goBack}
          color={'black'}
          size={35}
        />
        <Text style={styles.title}>Our Top Topics</Text>
      </View>
      <Text style={styles.description}>
        Test your skills with our top topics with a variety of questions set for
        beginners and seniors alike!
      </Text>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.items}>
        {categories.map((category, idx) => (
          <Animated.View
            key={category.icon}
            style={{
              opacity: animatedSections[idx],
              transform: [
                {
                  translateY: Animated.multiply(
                    animatedSections[idx],
                    new Animated.Value(-4),
                  ),
                },
              ],
            }}>
            <TouchableOpacity
              onPress={handleCategorySelect(category.label, category.imageUrl)}
              style={styles.item}>
              <Image source={{uri: category.imageUrl}} style={styles.image} />
              <View style={styles.overlay} />
              <View style={styles.content}>
                <Icon
                  style={styles.icon}
                  color={'white'}
                  size={25}
                  name={category.icon}
                />
                <Text style={styles.label}>{category.label}</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizSelection;
