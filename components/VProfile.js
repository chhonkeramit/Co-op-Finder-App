import React from 'react'
import { useState,useEffect} from "react";
import { View,Text,Image,ScrollView,StyleSheet,TextInput,TouchableOpacity} from "react-native";

const VProfile = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.image}  source={require('../assets/profile.jpg')} />
            <TouchableOpacity style={styles.password} onPress={console.log("password change")}>
            <Text style={styles.passwordText}>Change Password</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteBtn} onPress={console.log("delete profile")}>
                <Text style={styles.deleteText}>Delete Profile</Text>
            </TouchableOpacity>
        </View>
    );
}

export default VProfile
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
    image :{
        borderRadius: "100%",
        margin: 80,
        marginBottom: 40,
        height: 200,
        width: 200,
        backgroundColor: "black",
      },
      password: {
        marginBottom:20,
        marginLeft:50,
      },
      deleteBtn:{
        marginLeft:50,
      },
      passwordText:{
         fontWeight:"bold",
         fontSize: 30,
      },
      deleteText:{
         fontWeight:"bold",
         fontSize:30,
      },
});