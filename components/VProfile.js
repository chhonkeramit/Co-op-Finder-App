import React from 'react'
import { useState,useEffect} from "react";
import { View,Text,Image,ScrollView,StyleSheet,TouchableOpacity, Button} from "react-native";
import { TextInput } from "react-native-gesture-handler";

import { auth, fireDB } from '../firebase'

const VProfile = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');


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

const updatePass = () => {
  // const auth = getAuth();

const user = auth.currentUser;
// const newPassword = getASecureRandomPassword();

user.updatePassword(pass).then(() => {
  // Update successful.
  alert("Password updated Successfuly")
  alert("Please Login Again To Check Your Updated Password")
}).catch((error) => {
  // An error ocurred
  alert("Error")
  // ...
});
}




    return(
        <View style={styles.container}>

            <Image style={styles.image}  source={require('../assets/profile.jpg')} />
           
        <Text style={{fontWeight:'bold', textAlign:'center'}}>User Name :{auth.currentUser?.email}</Text>


        <TextInput
          placeholder="Update Your Email"
            // value={email}
          onChangeText={text => setEmail(text)}
          style={{ color: 'black', fontWeight: 'bold', textAlign: 'center',marginTop:20 }}
        />
           {/* <Button
        color='green'
        title="Update User"
        onPress={updateUser}
        ></Button> */}

        <TouchableOpacity style={styles.viewBtn} onPress={updateUser}>
       <Text style={styles.viewText}>Update User</Text>
     </TouchableOpacity>
            {/* <TouchableOpacity style={styles.deleteBtn} onPress={console.log("delete profile")}>
                <Text style={styles.deleteText}>Delete Profile</Text>
            </TouchableOpacity> */}
        <TextInput
          placeholder="Update Your Password"
          onChangeText={text => setPass(text)}
          style={{ color: 'black', fontWeight: 'bold', textAlign: 'center' , marginTop:20}}
        />
        {/* <Button
       style={styles.viewBtn}
        title="Update Password"
        onPress={updatePass}
        ></Button> */}

<TouchableOpacity style={styles.viewBtn} onPress={updatePass}>
       <Text style={styles.viewText}>Update Password</Text>
     </TouchableOpacity>

             {/* <Button

        color='orangered'
        title="Delete User"
        onPress={remove}
        >
             </Button>  */}

             <TouchableOpacity style={styles.deletebtn} onPress={remove}>
       <Text style={styles.viewText}>Delete User</Text>
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
      viewBtn:
      {
        width:"90%",
        borderRadius:25,
        height:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginLeft :20,
        marginRight:20,
        backgroundColor:'#008b8b'
      },
      viewText:{
       fontWeight:"bold",
       fontSize : 16
      },
      deletebtn :{
        width:"90%",
        borderRadius:25,
        height:55,
        alignItems:"center",
        justifyContent:"center",
        marginTop:10,
        marginLeft :20,
        marginRight:20,
        backgroundColor:'#dc143c'
      },
});