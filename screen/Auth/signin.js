import React from 'react';
import {View, Text, Button} from 'react-native';

class signin extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <View>
        <View>
          <Text>Nav top</Text>
        </View>
        <View>
          <Text>logo</Text>
          <Text>Hey There</Text>
        </View>
        <View>
          <Text>input 1</Text>
          <Text>input 2</Text>
          <Text>signin Button</Text>
        </View>
        <View>
          <Text>signin question</Text>
        </View>
      </View>
    );
  }
}

export default signin;
