import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {auth} from '../firebase';

const StudentRegisterScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    
    const handleSignUp = () => {
      auth.createUserWithEmailAndPassword(email, password).then(userCred => {
        const user = userCred.user;
        console.log("Student Registered with:", user.email);
        alert("Your registered successfully");
        alert("You are Redirected to Login Page.");
        navigation.navigate("Login");
      }).catch(error => alert(error.message))
    }

       

   return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
     <View style={styles.inputContainer}>
         <TextInput
          placeholder="Enter Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
       
        <TextInput
          placeholder="Enter Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        /> 
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default StudentRegisterScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })
  