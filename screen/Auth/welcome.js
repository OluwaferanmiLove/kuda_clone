import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {WelcomeIllustration} from '../../mockData/mockData';
import KudaBtn from './components/Button';

function Next() {
  return (
    <TouchableOpacity
      style={style.nextButton}
      onPress={() => this.setState({isOnBoarded: true})}>
      <Text style={style.nextButtonText}>Next</Text>
    </TouchableOpacity>
  );
}

function Gotit() {
  return (
    <TouchableOpacity
      style={style.nextButton}
      onPress={() => this.setState({isOnBoarded: true})}>
      <Text style={style.nextButtonText}>Got It</Text>
    </TouchableOpacity>
  );
}

const {width, height} = Dimensions.get('window');

function IllustrationRender({id, image, title, description}) {
  id === 1
    ? () => this.setState({welcomeLast: true})
    : () => this.setState({welcomeLast: null});
  return (
    <View style={style.illustrationContent}>
      <Image style={style.illustrationImage} source={image} />
      <View style={style.illustrationText}>
        <Text style={style.illustrationTitle}>{title}</Text>
        <Text style={style.illustrationDescription}>{description}</Text>
      </View>
    </View>
  );
}

function Steps() {
  return (
    <View>
      <Text>* * *</Text>
    </View>
  );
}

class Welcome extends React.Component {
  constructor() {
    super();
    this.state = {
      welcomeLast: null,
    };
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={style.main}>
        <StatusBar />
        <TouchableOpacity
          style={style.skip}
          onPress={() => navigation.navigate('AuthWelcome')}>
          <Text style={style.skipText}> Skip</Text>
        </TouchableOpacity>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'center'}
          scrollEventThrottle={20}
          data={WelcomeIllustration}
          renderItem={({item}) => (
            <IllustrationRender
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          )}
          keyExtractor={item => item.id}
        />
        <View style={style.illustrationStep}>
          <Steps />
        </View>
        <View style={style.next}>
          <KudaBtn
            btnName={this.state.welcomeLast === true ? 'Got it' : 'Next'}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  skip: {
    alignItems: 'flex-end',
  },
  skipText: {
    fontSize: 25,
    color: '#48d38a',
    paddingRight: 15,
    paddingTop: 30,
  },
  illustrationContent: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 50,
    width: '100%',
  },
  illustrationImage: {
    width,
    height: height / 3.5,
    resizeMode: 'contain',
    marginBottom: 50,
  },
  illustrationText: {
    width: '85%',
    marginLeft: '7.5%',
  },
  illustrationTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  illustrationDescription: {
    fontSize: 15,
  },
  illustrationStep: {
    alignItems: 'center',
    marginBottom: 20,
  },
  next: {
    alignItems: 'center',
    marginBottom: 20,
  },
});
/*<ScrollView
          horizontal
          snapToAlignment="center"
          pagingEnabled
          scrollEnabled
          style={style.illustrationView}>
          <View style={style.illustrationContent}>
            <Image
              style={style.illustrationImage}
              source={require('../asset/illustration/undraw_wallet_aym5.svg.png')}
            />
          </View>
        </ScrollView>*/
export default Welcome;
