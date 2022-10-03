import React from 'react';
import {SafeAreaView, TouchableOpacity, View} from 'react-native';
import Text from '../../../components/Text';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from '../../../components/Input';
import {Formik} from 'formik';
import Button from '../../../components/Button';
import {signupSchema} from '../../../utils';
import Google from '../../../assets/svg/Google';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../../../navigation/screenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NavigationStack} from '../../../navigation/entities';
import {useDispatch, useSelector} from 'react-redux';
import {signUpThunk} from '../../../redux/auth/thunk';
import {AppDispatch, RootState} from '../../../redux/store';
import Overlay from '../../../components/Overlay';
import {AuthState} from '../../../redux/auth/entities';
import {registrationFields} from '../../../constants';

const SignUp = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<NavigationStack>>();
  const {loading} = useSelector<RootState, AuthState>(state => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  const goBack = () => navigation.goBack();

  const handleLogin = () => {
    navigation.navigate(screenNames.SIGN_IN);
  };

  const handleFormSubmit = (values: {
    email: string;
    password: string;
    name: string;
  }) => {
    dispatch(signUpThunk(values));
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
          disabled
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
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={signupSchema}
        onSubmit={values => handleFormSubmit(values)}>
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
              {registrationFields.map(field => (
                <Input
                  key={field.name}
                  value={values[field.name as keyof {name: string}]}
                  handleValueChange={handleChange(field.name)}
                  handleBlur={handleBlur(field.name)}
                  placeholder={field.placeholder}
                  styles={styles.input}
                  label={field.label}
                  iconName={field.iconName}
                  error={errors[field.name as keyof {name: string}]}
                  touched={touched[field.name as keyof {name: string}]}
                  isPassword={field.isPassword}
                />
              ))}
              <Button
                disabled={hasErrors}
                text={'Registration'}
                onPress={handleSubmit}
                styles={styles.confirmButton}
              />
            </View>
          );
        }}
      </Formik>
      <View style={styles.loginWrapper}>
        <Text style={styles.loginText}>Already have an account?</Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
