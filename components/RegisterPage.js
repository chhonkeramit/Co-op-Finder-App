import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Alert,KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const RegisterScreen = () => {
    
    const navigation = useNavigation();

    const studentpressed = () =>{
        console.log("studentpressed");
        navigation.navigate("StudentRegister");
    }
    const recruiterpressed = () =>{
        console.log("recruiterpresses");
        navigation.navigate("RecruiterRegister");
    }

    return(
     <View style={styles.container}> 
        <TouchableOpacity style={styles.loginBtn} onPress={studentpressed}> 
        <Text>STUDENT</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.loginBtn} onPress={recruiterpressed}>
        <Text>RECRUITER</Text>
             </TouchableOpacity>
            </View>
    );
}
export default RegisterScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginBtn:
   {
     width:"80%",
     borderRadius:25,
     
     height:55,
     alignItems:"center",
     justifyContent:"center",
     marginTop:40,
     backgroundColor:"#00BFFF",
   },
  });