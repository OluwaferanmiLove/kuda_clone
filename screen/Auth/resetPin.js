import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavBarAuth from '../components/NavBarAuth';
import KudaInputBar from '../components/InputBar';
import KudaBtn from '../components/Button';
import ResetIcon from '../components/ResetIcon';

class ResetPin extends React.Component {
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
          <Text style={style.resetText}>Enter your new pin</Text>
          <Text style={style.resetTextDescription}>
            We care about your security enter your new pin
          </Text>
        </View>
        <View style={style.inputs1}>
          <KudaInputBar
            marginHorizontal={'10%'}
            keyboardType={'numeric'}
            placeholder={'-'}
            onChangeText={this.textChangeFirst}
            maxLength={1}
          />
          <KudaInputBar
            marginHorizontal={'10%'}
            keyboardType={'numeric'}
            placeholder={'-'}
            onChangeText={this.textChangeOthers}
            maxLength={1}
          />
          <KudaInputBar
            marginHorizontal={'10%'}
            keyboardType={'numeric'}
            placeholder={'-'}
            onChangeText={this.textChangeOthers}
            maxLength={1}
          />
          <KudaInputBar
            marginHorizontal={'10%'}
            keyboardType={'numeric'}
            placeholder={'-'}
            onChangeText={this.textChangeOthers}
            maxLength={1}
          />
          <KudaInputBar
            marginHorizontal={'10%'}
            keyboardType={'numeric'}
            placeholder={'-'}
            onChangeText={this.textChangeOthers}
            maxLength={1}
          />
          <KudaInputBar
            marginHorizontal={'10%'}
            keyboardType={'numeric'}
            placeholder={'-'}
            onChangeText={this.textChangeLast}
            maxLength={1}
          />
        </View>
        <View style={style.inputs2}>
          <KudaInputBar
            marginHorizontal={'10%'}
            keyboardType={'numeric'}
            placeholder={'-'}
            onChangeText={this.textChangeFirst}
            maxLength={1}
          />
          <KudaInputBar
            marginHorizontal={'10%'}
            keyboardType={'numeric'}
            placeholder={'-'}
            onChangeText={this.textChangeOthers}
            maxLength={1}
          />
          <KudaInputBar
            marginHorizontal={'10%'}
            keyboardType={'numeric'}
            placeholder={'-'}
            onChangeText={this.textChangeOthers}
            maxLength={1}
          />
          <KudaInputBar
            marginHorizontal={'10%'}
            keyboardType={'numeric'}
            placeholder={'-'}
            onChangeText={this.textChangeOthers}
            maxLength={1}
          />
          <KudaInputBar
            marginHorizontal={'10%'}
            keyboardType={'numeric'}
            placeholder={'-'}
            onChangeText={this.textChangeOthers}
            maxLength={1}
          />
          <KudaInputBar
            marginHorizontal={'10%'}
            keyboardType={'numeric'}
            placeholder={'-'}
            onChangeText={this.textChangeLast}
            maxLength={1}
          />
        </View>
        <KudaBtn btnName={'Reset'} onPress={navigation.navigate('PinAuth')} />
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
  inputs1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '12%',
    marginTop: '15%',
    marginBottom: '5%',
  },
  inputs2: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '12%',
    marginTop: '2%',
    marginBottom: '45%',
  },
  signinBtn: {
    alignItems: 'center',
  },
});

export default ResetPin;
