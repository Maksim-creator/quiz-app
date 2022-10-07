import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../../../components/Text';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Button from '../../../components/Button';
import Google from '../../../assets/svg/Google';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationStack} from '../../../navigation/entities';
import {useDispatch, useSelector} from 'react-redux';
import {signInThunk} from '../../../redux/auth/thunk';
import {AppDispatch, RootState} from '../../../redux/store';
import {AuthState} from '../../../redux/auth/entities';
import Overlay from '../../../components/Overlay';
import {signInSchema} from '../../../utils';

const SignIn = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const dispatch = useDispatch<AppDispatch>();
  const {loading} = useSelector<RootState, AuthState>(state => state.auth);

  const goBack = () => navigation.goBack();

  const handleLogin = (values: {email: string; password: string}) => {
    dispatch(signInThunk(values));
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && <Overlay />}
      <View style={styles.header}>
        <Icon
          name={'arrow-left-thin'}
          size={35}
          color={'black'}
          style={styles.icon}
          onPress={goBack}
        />
        <Text style={styles.label}>Sign Up</Text>
      </View>
      <View style={styles.googleButtonWrapper}>
        <Button
          text={'Sign Up with Google'}
          onPress={() => {}}
          styles={styles.googleButton}
          textStyles={styles.googleButtonText}
          leftIcon={() => <Google />}
        />
      </View>
      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={signInSchema}
        onSubmit={values => handleLogin(values)}>
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
              <Input
                value={values.password}
                handleValueChange={handleChange('password')}
                handleBlur={handleBlur('password')}
                placeholder={'Your password'}
                styles={styles.input}
                label={'Password'}
                iconName={'lock-outline'}
                error={errors.password}
                touched={touched.password}
                isPassword
              />
              <Button
                disabled={
                  hasErrors || !values.email.length || !values.password.length
                }
                text={'Login'}
                onPress={handleSubmit}
                styles={styles.confirmButton}
              />
            </View>
          );
        }}
      </Formik>
      <TouchableOpacity style={styles.resetPassword}>
        <Text style={styles.resetPasswordText}>Forgot password?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
