import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { Alert,KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Image} from 'react-native'

const Studentoremployee = () => {
    
    const navigation = useNavigation();

    const studentpressed = () =>{
        console.log("studentpressed");
        navigation.navigate("Tabstu")
    }
    const recruiterpressed = () =>{
        console.log("recruiterpresses");
        navigation.navigate("Tab")
    }

    return(
       <View style={styles.container}> 
       {/* <Image style={styles.image1} source={require('../assets/recPage1.png')}/> */}
       {/* <View style={styles.btnsContainer}> */}
   <Text style={styles.description}>Upload your resume – It only takes a few seconds</Text> 
       <View style={styles.stuContainer}>
       <TouchableOpacity style={styles.loginBtn} onPress={studentpressed}> 
        <Text>Upload your resume</Text>
        </TouchableOpacity>
       <Image style={styles.image} source={require('../assets/uploadresume.png')}/>
       </View>
    <Text style={styles.description}>Employers: Post a job – Your next hire is here</Text>
       <View style={styles.recContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={recruiterpressed}>
        <Text>Employers: Post a job</Text>
        </TouchableOpacity>
        <Image style={styles.image} source={require('../assets/recruiting.jpeg')}/>
        </View>
        {/* </View> */}
      </View>
    );
}
export default Studentoremployee
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
      marginTop:50,
      backgroundColor:"#f0e68c",
    },
    image1:{
      width:500,
      height:150,
    },
    image:{
      flex:1,
      marginTop:10,
      marginLeft:10,
      width:150,
      height:145,
      marginBottom:10
      
    },
    description:{
      fontSize:20,
      color:"#e9967a",
      fontWeight:"900",
      marginLeft:15,
      marginTop:20,
    },
  });