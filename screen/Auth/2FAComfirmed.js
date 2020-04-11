import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import NavBarAuth from '../components/NavBarAuth';
import KudaBtn from '../components/Button';

class TwoFAComfirmed extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: null,
      loaded: true,
      userToken: null,
      userPin: null,
    };
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={style.main}>
        <NavBarAuth
          leftText={'<'}
          rightText={'?'}
          rightTextStyle={style.rightText}
          rightBtnStyle={style.rightBtn}
          leftOnPress={() => navigation.goBack()}
          rightOnPress={() => navigation.navigate.goBack()}
        />
        <View style={style.logoContainer}>
          <Image
            style={style.pinAuthIllustration}
            source={require('../../asset/illustration/pinComfirmed.png')}
          />
          <Text style={style.pinAuthText}>Device Changed</Text>
          <Text style={style.pinAuthTextDescription}>
            This device has been linked to your !kuda account
          </Text>
        </View>
        <KudaBtn
          btnName={'Submit'}
          onPress={() => navigation.navigate('ResetPin')}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
  },
  rightBtn: {
    width: 30,
    height: 30,
    backgroundColor: '#40196d40',
    borderRadius: 150,
  },
  rightText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#40196d',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: '10%',
  },
  pinAuthText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '5%',
    marginBottom: '2%',
  },
  pinAuthTextDescription: {
    fontSize: 16,
    marginBottom: '90%',
  },
  pinAuthIllustration: {
    resizeMode: 'contain',
    height: 100,
  },
  signinBtn: {
    alignItems: 'center',
  },
});

export default TwoFAComfirmed;
