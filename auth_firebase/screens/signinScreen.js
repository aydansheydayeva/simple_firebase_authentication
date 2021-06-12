import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

export default class Signin extends React.Component{
  constructor(props){
    super(props);

    this.state = ({
      email:"",
      password:""
    })
  }

  signIn = (email, password)=>{
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(user){
      if(user){
        console.log(user);
        console.log('logged in');
      }
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput 
          placeholder = "Email"
          onChangeText={(email)=>this.setState({email})}
          style = {styles.inputT}
        />

        <TextInput 
          placeholder = "Password"
          secureTextEntry={true}
          onChangeText={(password)=>this.setState({password})}
          style = {styles.inputT}
        />

        <TouchableOpacity 
                onPress = {()=> this.signIn(this.state.email, this.state.password)}
                style = {styles.buttonI} 
            >
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>

        <TouchableOpacity 
                onPress = { () => this.props.navigation.navigate('Signup') }
                style = {styles.buttonU} 
            >
                <Text style={styles.buttonTextU}>Sign Up</Text>
            </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
    width: "60%",
    marginLeft: "20%"
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  buttonTextU: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#48BBEC'
  },
  buttonI: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: "40%",
    marginLeft: "30%"
  },
  buttonU: {
    height: 36,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: "40%",
    marginLeft: "30%",
    borderBottomColor: '#48BBEC',
    borderBottomWidth: 1
  },
  inputT:{
      color: '#555555',
      marginBottom: 20,
      padding: 10,
      height: '100%', 
      borderColor: '#58BBDD',
      borderWidth: 1,
      borderRadius: 2,
      alignSelf: 'center',
      backgroundColor: '#ffffff'
  }
})