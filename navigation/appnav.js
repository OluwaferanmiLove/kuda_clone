import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screen/home';
import budget from '../screen/budget';
import payments from '../screen/payments';
import card from '../screen/card';
import settings from '../screen/settings';
import fundAcct from '../screen/fundAcct';
import Welcome from '../screen/Auth/welcome';
import signin from '../screen/Auth/signin';
import signup from '../screen/Auth/signup';
import Splash from '../screen/splash';
import AuthWelcome from '../screen/Auth/AuthWelcome';

const authStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <NavigationContainer>
      <authStack.Navigator headerMode={'none'}>
        <authStack.Screen name="Welcome" component={Welcome} />
        <authStack.Screen name="AuthWelcome" component={AuthWelcome} />
        <authStack.Screen name="Signin" component={signin} />
        <authStack.Screen name="Signup" component={signup} />
      </authStack.Navigator>
    </NavigationContainer>
  );
}

const homeStack = createStackNavigator();

function homeStackScreen() {
  return (
    <homeStack.Navigator>
      <homeStack.Screen name="Home" component={Home} />
      <homeStack.Screen name="Fund Account" component={fundAcct} />
    </homeStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function HomeApp() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={homeStackScreen} />
        <Tab.Screen name="Budget" component={budget} />
        <Tab.Screen name="Payments" component={payments} />
        <Tab.Screen name="Card" component={card} />
        <Tab.Screen name="Settings" component={settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userToken: null,
      isSignedin: null,
      isOnboarded: false,
      isLoading: false,
      welcomeLast: null,
    };
  }
  render() {
    if (this.state.isLoading === true) {
      return <Splash />;
    }
    switch (this.state.isSignedin) {
      case null:
        return <AuthStackScreen />;
      case true:
        return <HomeApp />;
    }
  }
}

/*function App() {
  this.state = {
    userToken: null,
    isLoading: null,
  };

}*/

export default App;
