import React from 'react';
import {View, Text, StyleSheet, Image, Keyboard} from 'react-native';
import NavBarAuth from '../components/NavBarAuth';
import KudaInputBar from '../components/InputBar';
import KudaBtn from '../components/Button';

const CODE_LENGTH = new Array(6).fill(0);

class TwoFA extends React.Component {
  constructor() {
    super();
    this.state = {
      userEmail: null,
      loaded: true,
      userToken: null,
      code: [],
    };
  }

  render() {
    const {code} = this.state;
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
            source={require('../../asset/illustration/enterPin.png')}
          />
          <Text style={style.pinAuthText}>Comfirm</Text>
          <Text style={style.pinAuthTextDescription}>
            We sent you a code by text
          </Text>
        </View>
        <View style={style.inputs}>
          {CODE_LENGTH.map((v, index) => {
            let handleChange = text => {
              code[index] = text;
              this.setState({code: code});
            };

            let handleKeyPress = e => {
              if (e.nativeEvent.key === 'Backspace') {
              }
            };
            return (
              <KudaInputBar
                key={index}
                marginHorizontal={'10%'}
                keyboardType={'numeric'}
                placeholder={'-'}
                onChangeText={handleChange}
                onKeyPress={handleKeyPress}
                maxLength={1}
              />
            );
          })}
          {this.state.code != null ? (
            <View>
              <Text>{this.state.code}</Text>
            </View>
          ) : (
            <View />
          )}
        </View>
        <KudaBtn
          btnName={'Submit'}
          onPress={() => navigation.navigate('2FAComfirmed')}
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
  },
  pinAuthIllustration: {
    resizeMode: 'contain',
    height: 100,
  },
  inputs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '12%',
    marginTop: '15%',
    marginBottom: '60%',
  },
  signinBtn: {
    alignItems: 'center',
  },
});

export default TwoFA;
