import { useRef } from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import SignupScreen from '../signup/SignupScreen';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const SigninScreen = () => {
  const scrollview = useRef();
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('It is required'),
    password: Yup.string().required('It is required'),
  });
  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues:{
      email:'',
      password:""
    },
    onSubmit:() =>{
      console.log("submit the form..")
    }
  })
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
        <TouchableWithoutFeedback
          onPress={() => scrollview.current.scrollTo({ x: 0 })}>
          <View
            style={{
              width: '50%',
              backgroundColor: 'rgb(60, 60, 60)',
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            }}>
            <Text>Login</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() =>
            scrollview.current.scrollTo({ x: Dimensions.get('window').width })
          }>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(90, 90, 90)',
              padding: 10,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            }}>
            <Text>Signup</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView horizontal pagingEnabled ref={scrollview}>
        <View
          style={{
            backgroundColor: 'white',
            width: Dimensions.get('window').width,
            flex: 1,
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
            onBlur={formik.handleBlur("email")}
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
          {
            formik.errors['password']&&formik.touched['password']&&(
              <Text>{formik.errors['password']}</Text>
            )
          }
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
        <SignupScreen />
      </ScrollView>
    </View>
  );
};

export default SigninScreen;
