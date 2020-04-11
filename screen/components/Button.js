import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const KudaBtn = props => {
  return (
    <View style={style.main}>
      <TouchableOpacity style={style.btn} onPress={props.onPress}>
        <Text style={style.btnText}>{props.btnName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  main: {
    justifyContent: 'center',
    backgroundColor: '#40196d',
    height: 50,
    width: '85%',
    borderRadius: 4,
    marginTop: 40,
    marginBottom: 40,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default KudaBtn;
