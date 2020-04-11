import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import KudaBtn from '../components/Button';
import QusOpt from '../components/QusOpt';

const {width, height} = Dimensions.get('window');

class AuthWelcome extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={style.main}>
        <View>
          <Text style={style.logoText}>!Kuda.</Text>
        </View>
        <View style={style.illustration}>
          <Image
            style={style.illustrationImage}
            source={require('../../asset/illustration/promo-support-img.png')}
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
        <QusOpt
          question={'Have an Account'}
          option={'Sign in'}
          onPress={() => navigation.navigate('Signin')}
        />
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
    fontSize: 40,
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
