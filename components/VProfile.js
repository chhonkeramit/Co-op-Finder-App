import React from 'react'
import { useState,useEffect} from "react";
import { View,Text,Image,ScrollView,StyleSheet,TouchableOpacity, Button} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { auth, fireDB } from '../firebase'

const VProfile = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const remove = () => {
    const user = auth.currentUser;

user.delete().then(() => {
    alert("User Deleted.Now you can't access the account with the same user email!")
   navigation.navigate('LoginPage');// User deleted.

}).catch((error) => {
// An error ocurred
console.log(error)
// ...
});

  }
const updateUser = () => {
  console.log("clicked")
  const user = auth.currentUser;

user.updateEmail(email).then(() => {
alert("User Updated!")
// updateUser();
navigation.replace("VProfile")
}).catch((error) => {
// An error occurred
// ...
});
}




    return(
        <View style={styles.container}>

            <Image style={styles.image}  source={require('../assets/profile.jpg')} />
            {/* <TouchableOpacity style={styles.password} onPress={console.log("password change")}>
            <Text style={styles.passwordText}>Change Password</Text>
            </TouchableOpacity> */}
        <Text style={{fontWeight:'bold', textAlign:'center'}}>User Name :{auth.currentUser?.email}</Text>


        <TextInput
          placeholder="Update Your Email"
            // value={email}
          onChangeText={text => setEmail(text)}
          style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' }}
        />
           <Button
        color='green'
        title="Update User"
        onPress={updateUser}
        ></Button>
            {/* <TouchableOpacity style={styles.deleteBtn} onPress={console.log("delete profile")}>
                <Text style={styles.deleteText}>Delete Profile</Text>
            </TouchableOpacity> */}
             <Button

        color='orangered'
        title="Delete User"
        onPress={remove}
        >
             </Button> 
        
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
        borderRadius: 100,
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