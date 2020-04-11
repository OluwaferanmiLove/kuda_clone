import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ResetIcon = props => {
  return <Text style={style.reseticon}>****</Text>;
};

const style = StyleSheet.create({
  reseticon: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#40196d',
    textAlign: 'center',
    color: '#fff',
    height: 80,
    width: 80,
    paddingTop: 25,
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius: 10,
  },
});

export default ResetIcon;
