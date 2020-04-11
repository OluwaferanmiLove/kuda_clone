import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavBarAuth from '../components/NavBarAuth';
import KudaInputBar from '../components/InputBar';
import KudaBtn from '../components/Button';
import ResetIcon from '../components/ResetIcon';

class ResetPassword extends React.Component {
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
          <ResetIcon />
          <Text style={style.resetText}>Forgot Password</Text>
          <Text style={style.resetTextDescription}>
            Type in the email linked to your !kuda profile
          </Text>
        </View>
        <View style={style.inputs}>
          <KudaInputBar
            margin={'2%'}
            keyboardType={'email-address'}
            placeholder={'Email Address'}
          />
        </View>
        <KudaBtn btnName={'Reset'} />
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
  resetText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '5%',
    marginBottom: '2%',
  },
  resetTextDescription: {
    fontSize: 16,
  },
  inputs: {
    alignItems: 'center',
    width: '80%',
    marginTop: '10%',
    marginBottom: '70%',
  },
  signinBtn: {
    alignItems: 'center',
  },
});

export default ResetPassword;
