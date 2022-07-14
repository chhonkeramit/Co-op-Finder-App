import { StyleSheet, Text, View, Image , TextInput , TouchableOpacity} from 'react-native';
import React, { useState ,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { auth, fireDB } from '../firebase'
import { ScrollView } from 'react-native-gesture-handler';
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';

const JobDetail = ({route,navigation}) => {
  const{index} = route.params;
  const [displaydata, setUserLocation] = useState([[]]);

  useEffect(() => {
    //Runs on every render
        detailData();

  },[]);
  
  function detailData() {
    fireDB.collection("Job-Postings").get().then((querySnapshot) => {
        let bigArr = []
      querySnapshot.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`)
          console.log("datafetched")
          let newArr = []
          newArr.push(`${doc.data().Company_Name}`)
          newArr.push(`${doc.data().Job_Description}`)
          newArr.push(`${doc.data().Job_Title}`)
          newArr.push(`${doc.data().Job_Type}`)
          newArr.push(`${doc.data().Location}`)
          bigArr.push(newArr)
      });
      // setting only display data to array
      setUserLocation(bigArr[index])
      console.log("index fetched"+ " "+index)
      console.log(bigArr[index])
      console.log("company name" +" "+ bigArr[index][0])
      console.log("data display "+ displaydata)
      
  });
   }
   function ApplyButton(){
    fireDB.collection(auth.currentUser?.email).add({
      User: auth.currentUser?.email  ,
      Company_Name: displaydata[0],
      Job_Description:displaydata[1],
      Job_Title: displaydata[2],
      Location: displaydata[4], 
      Job_Type: displaydata[3]
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })

   }
     return (
      <ScrollView>
      
      <View style ={styles.FirstContainer}>                 
          <Text style ={styles.title}>{displaydata[2]}</Text>
          <Text style = {styles.CompanyName}>{displaydata[0]}</Text>
          <Text style={styles.location}>{displaydata[4]}</Text>
          
           <View style={styles.align}>
             <TouchableOpacity onPress={ApplyButton}><Text style={styles.ApplyButton}>Apply now</Text></TouchableOpacity>
             {/* <TouchableOpacity><Text style={{marginTop:13, fontSize:20, color:'gray'}}><FontAwesomeIcon color={'#a9a9a9'} size={30} icon={ faBookBookmark } />Saved Jobs</Text></TouchableOpacity> */}
           </View>
      </View>
      <View style = {styles.SecondContainer}>
            <Text style={styles.durationHeading}>Salary:</Text>
            <Text style={styles.duration}>$20-30$ per hour</Text>
            <Text style={styles.durationHeading}>Job Type:</Text>
            <Text style={styles.duration}>{displaydata[3]}</Text>
           <View
             style={{
               marginTop: 20,
               marginBottom: 20,
               borderBottomColor: 'black',
               borderBottomWidth: StyleSheet.hairlineWidth,
             }}
           />
            <Text style={{fontWeight:'bold',fontSize:18}}>Benefits</Text>
            <Text style={{fontStyle:'italic'}}>Pulled from the full job description</Text>
            <View style={styles.align}>
            <Text style={styles.box}>Dental care</Text>
            <Text style={styles.box}>Extended health care</Text>
            <Text style={styles.box}>Vision care</Text>
            </View>
            <Text style={styles.detailsHeading}>Job Details:</Text>
            <Text style={styles.details}>{displaydata[1]}</Text>
            <Text style={styles.detailsHeading}>Technical Skills</Text>
            <Text>HTML</Text>
            <Text>CSS</Text>
            <Text>Javascript</Text>
            <Text>jQuery</Text>
            <Text>React Native</Text>
            <Text>React Js</Text>
            <Text>Node Js</Text>
            <Text style={styles.detailsHeading}>Flexible Language requirement:</Text>
            <Text style={{fontStyle:'italic'}}>French not required</Text>
            <Text style={styles.detailsHeading}>Schedule:</Text>
            <Text style={{fontStyle:'italic'}}>8 hour shift</Text>
            <Text style={styles.detailsHeading}>COVID-19 considerations:</Text>
            <Text>We have been working remotely since March 2020. Our management team is evaluating whether we will continue remote working beyond the current health crisis.</Text>

      </View>
     
      </ScrollView>
     )
}

export default JobDetail

const styles = StyleSheet.create({
  FirstContainer: {
    flex:1,
    padding:17,
    backgroundColor: '#fff',
    borderWidth:3,
    borderRadius:10,
  },
  SecondContainer:{
    flex:2,
    padding:17,
    backgroundColor: '#fff',
    borderRadius:10,
    borderWidth:3,
  },
   title:{
    marginTop :10,
    fontWeight:"bold",
    marginBottom:10,
  },
  durationHeading:{
    marginTop :10,
    fontWeight:"bold",
    marginBottom:10,
  },
  detailsHeading:{
    marginTop :10,
    fontWeight:"bold",
    marginBottom:10,
  },
  ApplyButton:{
    backgroundColor:"blue",
    color:"#fff",
    width:100,
    padding:10,
    margin:10,
    textAlign:'center'

  },
  align:{
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  box: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    borderColor: '#f3f2f1',
    marginBottom: 5,
    width: '30%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 10,
    marginTop: 15
  }
});