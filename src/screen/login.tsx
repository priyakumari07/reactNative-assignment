import AsyncStorage from '@react-native-async-storage/async-storage';
import * as React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import Loader from '../component/loader';
import loginStyle from './login-style';
import * as RootNavigation from '../navigation/RootNavigation';
import {LoginService} from '../service/login';

const Login = () => {
  const [userName, setUserName] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [errortext, setErrortext] = React.useState('');
  const passwordInputRef = React.createRef();

  const handleSubmitPress = async () => {
    setErrortext('');
    if (!userName) {
      alert('Please Enter your userName');
      return;
    }
    if (!userPassword) {
      alert('Please Enter your Password');
      return;
    }
    console.log('Login button', userName, userPassword);
    setLoading(true);
    const res = await LoginService.signin({
      userName: userName,
      password: userPassword,
    });

    if (res.success === true) {
      RootNavigation.navigate('WatchList');
    } else {
      setErrortext(res.msg);
      setLoading(false);
      console.log('Please check your email id or password');
    }
  };
  return (
    <View>
      <Loader loading={loading} />

      <KeyboardAvoidingView enabled>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require(`../asset/bigiron-dark.png`)}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        <View style={loginStyle.SectionStyle}>
          <TextInput
            style={loginStyle.inputStyle}
            onChangeText={userName => setUserName(userName)}
            placeholder="Enter UserName"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
        </View>
        <View>
          {!userName && errortext ? (
            <Text
              style={{
                color: 'red',
              }}>
              Please Enter your userName
            </Text>
          ) : null}
        </View>
        <View style={loginStyle.SectionStyle}>
          <TextInput
            style={loginStyle.inputStyle}
            onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholder="Enter Password" //12345
            placeholderTextColor="#8b9cb5"
            keyboardType="default"
            //ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            underlineColorAndroid="#f000"
            returnKeyType="next"
          />
        </View>
        {errortext != '' ? (
          <Text style={loginStyle.errorTextStyle}>{errortext}</Text>
        ) : null}
        <TouchableOpacity
          style={loginStyle.buttonStyle}
          activeOpacity={0.5}
          onPress={handleSubmitPress}>
          <Text style={loginStyle.buttonTextStyle}>LOGIN</Text>
        </TouchableOpacity>
        <Text
          style={loginStyle.textStyle}
          onPress={() => RootNavigation.navigate('InProgess')}>
          New Here ? Register
        </Text>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
