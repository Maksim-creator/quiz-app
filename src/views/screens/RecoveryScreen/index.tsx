import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Formik} from 'formik';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {resetSchema} from '../../../utils';
import Text from '../../../components/Text';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationStack} from '../../../navigation/entities';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../redux/store';
import {AuthState} from '../../../redux/auth/entities';
import Overlay from '../../../components/Overlay';
import {resetThunk} from '../../../redux/auth/thunk';

const RecoveryScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const dispatch = useDispatch<AppDispatch>();
  const {loading} = useSelector<RootState, AuthState>(state => state.auth);
  const handleReset = (values: {email: string}) => {
    dispatch(resetThunk(values));
  };
  const goBack = () => navigation.goBack();
  return (
    <SafeAreaView>
      {loading && <Overlay />}
      <View style={styles.header}>
        <Icon
          name={'chevron-left'}
          size={35}
          color={'black'}
          style={styles.icon}
          onPress={goBack}
        />
        <Text style={styles.label}>Reset Password</Text>
      </View>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={resetSchema}
        onSubmit={values => handleReset(values)}>
        {({
          handleChange,
          handleBlur,
          values,
          handleSubmit,
          errors,
          touched,
        }) => {
          const hasErrors = Object.keys(errors).length !== 0;
          return (
            <View>
              <Text style={styles.text}>
                Enter your email and we will send you a link to reset your
                password.
              </Text>
              <Input
                value={values.email}
                handleValueChange={handleChange('email')}
                handleBlur={handleBlur('email')}
                placeholder={'Your email address'}
                styles={styles.input}
                label={'Email'}
                iconName={'email-outline'}
                error={errors.email}
                touched={touched.email}
              />
              <Button
                disabled={
                  hasErrors || !values.email.length || !values.password.length
                }
                text={'Reset Password'}
                onPress={handleSubmit}
                styles={styles.confirmButton}
              />
            </View>
          );
        }}
      </Formik>
    </SafeAreaView>
  );
};

export default RecoveryScreen;
