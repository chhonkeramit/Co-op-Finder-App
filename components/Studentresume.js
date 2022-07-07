import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import {Alert, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Image } from 'react-native'
import {Resumedetails, Resumedetailsref } from '../models/Resumedetails';

const Studentresume= () => {

  const [Resumedetail, setResumedetail] = useState([]);

  const [firstname,setfirstname ] = useState('');
  const [lastname, setlastname] = useState('');
  const [mailid, setmailid] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [education, seteducation] = useState('');
  const [workexperience, setworkexperience] = useState('');
  const [certificates, setcertificates] = useState('');


  const navigation = useNavigation();

 
  useEffect(() => {
    Resumedetailsref.onSnapshot((query) => {
      const objs = [];
      query.forEach((doc) => {
        objs.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setResumedetail(objs);
    })
  }, []);

const handleresume= async() => {

//   if (Job_Title != '' && Company_Name != '' && Job_Type != '' && Location != '' && Job_Description != '') {
//     alert("Please fill the details");
    
//   } else {

    const dataObj = { firstname:firstname,lastname:lastname,
    mailid:mailid,phonenumber:phonenumber,education:education,workexperience:workexperience,certificates:certificates};
    const JobInstance = new Resumedetails(dataObj);
    await JobInstance.addResumeDetails();
    alert("Your Resume is Saved!")
//   }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >    
      <View style={styles.inputContainer}>
      <Image style={{width:"100%", height:170, alignItems:'center',justifyContent:'center',position:'relative',margin:'auto'}} source={require('../assets/Resume.jpg')}></Image>
      <TextInput
          placeholder="Firstname"
          value={firstname}
          onChangeText={text => setfirstname(text)}
          style={styles.input}
        />

      <TextInput
          placeholder="Lastname"
          value={lastname}
          onChangeText={text => setlastname(text)}
          style={styles.input}
        />
           

         <TextInput
          placeholder="Email address"
          value={mailid}
          onChangeText={text => setmailid(text)}
          style={styles.input}
        />

        <TextInput
          placeholder="Phonenumber"
          value={phonenumber}
          onChangeText={text => setphonenumber(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Add your Education"
          value={education}
          onChangeText={text => seteducation(text)}
          style={styles.input}
        />

     <TextInput
          placeholder="Add your work Experience"
          value={workexperience}
          onChangeText={text => setworkexperience(text)}
          style={styles.input1}
        />

        <TextInput
          placeholder="Add your certifications/licenses"
          value={certificates}
          onChangeText={text => setcertificates(text)}
          style={styles.input1}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleresume}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Save and Continue</Text>
        </TouchableOpacity>
    
      </View>
    </KeyboardAvoidingView>
  )
}

export default Studentresume

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
  input1: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 5,
    height: 100,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 11,
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