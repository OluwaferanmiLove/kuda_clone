import React from 'react';
import {View, StyleSheet} from 'react-native';
import KudaInputBar from '../components/InputBar';

class PinInputBar extends React.Component {
  render() {
    return (
      <View style={style.inputs}>
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
    );
  }
}

const style = StyleSheet.create({
  inputs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '12%',
    marginTop: '15%',
    marginBottom: '60%',
  },
});

export default PinInputBar;
