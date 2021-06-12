import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Signin from './screens/signinScreen';
import Signup from './screens/signupScreen';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDwG0e6fdIa1gqbuIpTXpRqXndSOGPB-uI",
  authDomain: "some-tutorial-project.firebaseapp.com",
  projectId: "some-tutorial-project",
  storageBucket: "some-tutorial-project.appspot.com",
  messagingSenderId: "795362819123",
  appId: "1:795362819123:web:398082c24b26c89294b746",
  measurementId: "G-VRQFWT8QWZ"
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