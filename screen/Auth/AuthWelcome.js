import React from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import KudaBtn from '../Auth/components/Button';

const {width, height} = Dimensions.get('window');

class AuthWelcome extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={style.main}>
        <View>
          <Text style={style.logoText}>!Kuda</Text>
        </View>
        <View style={style.illustration}>
          <Image
            style={style.illustrationImage}
            source={require('../../asset/illustration/undraw_mobile_pay_9abj.svg.png')}
          />
        </View>
        <View />
        <View style={style.welcomeText}>
          <Text style={style.welcomeTextTop}>Welcome to your</Text>
          <Text style={style.welcomeTextBottom}>Freedom.</Text>
        </View>
        <KudaBtn
          btnName={'Join Kuda'}
          onPress={() => navigation.navigate('Signup')}
        />
        <View style={style.signin}>
          <Text style={style.signinQuestion}>Have an account?</Text>
          <TouchableOpacity
            style={style.signinOption}
            onPress={() => navigation.navigate('Signin')}>
            <Text style={style.signinOptionText}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15,
  },
  logoText: {
    color: '#40196d',
    fontSize: 50,
    fontWeight: 'bold',
  },
  illustration: {
    alignItems: 'center',
  },
  illustrationImage: {
    width,
    height: height / 2,
    resizeMode: 'contain',
  },
  welcomeText: {
    alignItems: 'center',
  },
  welcomeTextTop: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#40196d',
  },
  welcomeTextBottom: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#40196d',
  },
  signin: {
    display: 'flex',
    flexDirection: 'row',
  },
  signinQuestion: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  signinOption: {},
  signinOptionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#48d38a',
  },
});

export default AuthWelcome;
