import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput } from 'react-native';

export default class Signup extends React.Component{
  constructor(props){
    super(props);

    this.state = ({
      email:"",
      password:""
    })
  }

  signUp = (email, password)=>{
    if(this.state.password.length < 6){
      alert('Password should be less than 6 chars');
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password);
    alert('Account was created');

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
                onPress = {()=> this.signUp(this.state.email, this.state.password)}
                style = {styles.button} 
            >
                <Text style={styles.buttonText}>Sign Up</Text>
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
  button: {
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