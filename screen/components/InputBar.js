import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const KudaInputBar = props => {
  return (
    <TextInput
      returnKeyType={props.returnKeyType}
      style={style.input}
      margin={props.margin}
      keyboardType={props.keyboardType}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      marginHorizontal={props.marginHorizontal}
      maxLength={props.maxLength}
    />
  );
};

const style = StyleSheet.create({
  input: {
    textAlign: 'center',
    fontSize: 16,
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(225, 225, 225, 1)',
    borderRadius: 8,
    margin: 'margin',
    marginHorizontal: 'marginHorizontal',
  },
});

export default KudaInputBar;
