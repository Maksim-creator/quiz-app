import React, {useEffect, useMemo, useState} from 'react';
import {
  Animated,
  Easing,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {isUndefined} from 'lodash';
import {NavigationStack} from '../../../navigation/entities';
import {screenNames} from '../../../navigation/screenNames';
import {categories} from './constants';
import {pink, violet, white} from '../../../../assets/colors';
import Button from '../../../components/Button';
import styles from './styles';

const QuizSelection = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const [selectedTopic, setSelectedTopic] = useState<string>();

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
    Animated.stagger(100, animations).start();
  };

  const handleCategorySelect = (categoryName: string) => () => {
    setSelectedTopic(categoryName);
  };

  const renderItem: ListRenderItem<any> = ({item: category, index}) => {
    const isSelected = category.label === selectedTopic;
    return (
      <Animated.View
        key={category.icon}
        style={{
          ...styles.item,
          backgroundColor: isSelected ? pink : '#efeefc',
          opacity: animatedSections[index],
          transform: [
            {
              translateY: Animated.multiply(
                animatedSections[index],
                new Animated.Value(-4),
              ),
            },
          ],
        }}>
        <TouchableOpacity onPress={handleCategorySelect(category.label)}>
          <View style={styles.content}>
            <View style={styles.iconContainer(isSelected)}>
              <Icon
                color={isSelected ? white : violet}
                size={25}
                name={category.icon}
              />
            </View>
            <Text style={[styles.label, {color: isSelected ? white : violet}]}>
              {category.label}
            </Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  };

  const handleContinue = () => {
    if (selectedTopic) {
      navigation.navigate(screenNames.QUIZ_SCREEN, {
        categoryName: selectedTopic,
      });
    }
  };

  useEffect(() => {
    animated();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Icon
          name={'arrow-left-thin'}
          style={styles.backIcon}
          onPress={() => {
            navigation.goBack();
          }}
          color={white}
          size={35}
        />
        <Text style={styles.title}>Choose Category</Text>
      </View>
      <Text style={styles.description}>
        Test your skills with our top topics with a variety of questions set for
        beginners and seniors alike!
      </Text>
      <View style={styles.items}>
        <FlatList
          data={categories}
          renderItem={renderItem}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={styles.columnWrapperStyle}
          contentContainerStyle={styles.contentContainerStyle}
          style={styles.list}
        />
        <Button
          disabled={isUndefined(selectedTopic)}
          text={'Continue'}
          styles={styles.button}
          onPress={handleContinue}
        />
      </View>
    </SafeAreaView>
  );
};

export default QuizSelection;
