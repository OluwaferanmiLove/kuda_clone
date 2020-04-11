import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const QusOpt = props => {
  return (
    <View style={style.qusopt}>
      <Text style={style.question}>{props.question}?</Text>
      <TouchableOpacity style={style.signinOption} onPress={props.onPress}>
        <Text style={style.optionText}> {props.option}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  qusopt: {
    display: 'flex',
    flexDirection: 'row',
  },
  question: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  signinOption: {},
  optionText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#48d38a',
  },
});

export default QusOpt;
