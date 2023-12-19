import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const SignupScreen = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('It is required'),
    password: Yup.string().required('It is required'),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref('password')],
      'Passwords must match',
    ),
  });
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit:async (values) => {
      const {email,password,confirmPassword}= values
        try {
          console.log(values)
            const response = await axios.post("http://192.168.137.1:3000/create-user",{
              email,
              password,
              confirmPassword
            })
            console.log(response.data)
        } catch (error) {
          console.log(error)
        }

    },
  });
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: Dimensions.get('window').width,
      }}>
      <TextInput
        placeholder="email"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
        }}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
      />
      {formik.errors['email'] && formik.touched['email'] && (
        <Text>{formik.errors['email']}</Text>
      )}
      <TextInput
        placeholder="password"
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
        }}
      />
      {formik.errors['password'] && formik.touched['password'] && (
        <Text>{formik.errors['password']}</Text>
      )}
      <TextInput
        placeholder="confirm password"
        onChangeText={formik.handleChange('confirmPassword')}
        onBlur={formik.handleBlur('confirmPassword')}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
        }}
      />
      {formik.errors['confirmPassword'] &&
        formik.touched['confirmPassword'] && (
          <Text>{formik.errors['confirmPassword']}</Text>
        )}
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
        }}
        onPress={formik.handleSubmit}>
        <Text
          style={{
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
          }}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;
