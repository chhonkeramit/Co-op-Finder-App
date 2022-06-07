import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Alert,KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Image} from 'react-native'

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
       <Image style={styles.image1} source={require('../assets/recPage1.png')}/>
       <View style={styles.btnsContainer}>
       <Text style={styles.description}>PLEASE CLICK ON STUDENT FOR STUDENT REGISTRATION</Text>
       <View style={styles.stuContainer}>
       <TouchableOpacity style={styles.loginBtn} onPress={studentpressed}> 
        <Text>STUDENT</Text>
        </TouchableOpacity>
       <Image style={styles.image} source={require('../assets/stuPic.jpg')}/>
       </View>
       <Text style={styles.description}>PLEASE CLICK ON RECRUITER FOR RECRUITER REGISTRATION</Text>
       <View style={styles.recContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={recruiterpressed}>
        <Text>RECRUITER</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={require('../assets/recPic.jpg')}/>
        </View>
        </View>
      </View>
    );
}
export default RegisterScreen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'center',
    },
    btnsContainer:{
      marginTop:"10%",
    },
     stuContainer:{
       flexDirection:"row",
       padding:20,
     },
     recContainer:{
       flexDirection:"row",
       padding:20,
     },
    loginBtn:
    {
      flex:1,
      width:"50%",
      borderRadius:25,
      height:55,
      alignItems:"center",
      justifyContent:"center",
      marginTop:40,
      backgroundColor:"#00BFFF",
    },
    image1:{
      width:500,
      height:150,
    },
    image:{
      flex:1,
      marginTop:20,
      marginLeft:10,
      width:150,
      height:150,
      
    },
    description:{
      fontSize:15,
      color:"#FFC0CB",
      fontWeight:"900",
      marginLeft:15,
      marginTop:20,
    },
  });