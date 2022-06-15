import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import {Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import {PostJobdetails, PostJobdetailsref} from '../models/PostJobdetails';


const PostJob = () => {

  const [PostJobdetail, setPostJobdetails] = useState([]);

  const [Company_Name,setCompany_Name ] = useState('');
  const [Job_Description, setJob_Description] = useState('');
  const [Job_Title, setJob_Title] = useState('');
  const [Job_Type, setJob_Type] = useState('');
  const [Location, setLocation] = useState('');

  const navigation = useNavigation();

 
  useEffect(() => {
    PostJobdetailsref.onSnapshot((query) => {
      const objs = [];
      query.forEach((doc) => {
        objs.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPostJobdetails(objs);
    })
  }, []);

const handlepostjob = async () => {
    const dataObj = { Company_Name:Company_Name,Job_Description:Job_Description,
    Job_Title:Job_Title,Job_Type:Job_Type,Location:Location};
    const JobInstance = new PostJobdetails(dataObj);
    await JobInstance.addJobDetails();
    alert("Your Job is Posted Now !")

  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >    
      <View style={styles.inputContainer}>
      <Image style={{width:"100%", height:100, alignItems:'center',justifyContent:'center',position:'relative',margin:'auto'}} source={require('../assets/job.jpg')}></Image>

      <TextInput
          placeholder="Enter Company_Name"
          value={Company_Name}
          onChangeText={text => setCompany_Name(text)}
          style={styles.input}
        />
         <TextInput
          placeholder="Enter Job_Description"
          value={Job_Description}
          onChangeText={text => setJob_Description(text)}
          style={styles.input}
        />
       
        <TextInput
          placeholder="Enter Job_Title"
          value={Job_Title}
          onChangeText={text => setJob_Title(text)}
          style={styles.input}
        />

         <TextInput
          placeholder="Enter Job_Type"
          value={Job_Type}
          onChangeText={text => setJob_Type(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Location"
          value={Location}
          onChangeText={text => setLocation(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handlepostjob}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Post Job</Text>
        </TouchableOpacity>
    
      </View>
    </KeyboardAvoidingView>
  )
}

export default PostJob

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
