import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Signin from './screens/signinScreen';
import Signup from './screens/signupScreen';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "api key here",
  authDomain: "auth domain here",
  projectId: "project id here",
  storageBucket: "storage bucket here",
  messagingSenderId: "messaging sender id here",
  appId: "app id here",
  measurementId: "measurement id  here"
};

firebase.initializeApp(firebaseConfig);

const navigator = createStackNavigator(
  {
    Signin: {
      screen: Signin
    },
    Signup: {
      screen: Signup
    }
  },
  {
    initialRouteName: 'Signin',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);
