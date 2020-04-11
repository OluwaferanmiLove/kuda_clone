import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const NavBarAuth = props => {
  return (
    <View style={style.main}>
      <View style={style.leftNavContainer}>
        <TouchableOpacity style={style.leftBtn} onPress={props.leftOnPress}>
          <Text style={style.leftText}>{props.leftText}</Text>
        </TouchableOpacity>
      </View>
      <View style={style.rightNavContainer}>
        <TouchableOpacity
          style={props.rightBtnStyle}
          onPress={props.RightOnPress}>
          <Text style={props.rightTextStyle}>{props.rightText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: '#48d38a',
    width: '100%',
    height: 50,
  },
  leftNavContainer: {
    marginLeft: '5%',
  },
  rightNavContainer: {
    marginRight: '5%',
  },
  leftText: {
    fontSize: 30,
    color: '#40196d',
    fontWeight: 'bold',
  },
});

export default NavBarAuth;
