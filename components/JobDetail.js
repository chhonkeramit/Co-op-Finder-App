import { StyleSheet, Text, View, Image , TextInput , TouchableOpacity} from 'react-native';
import React, { useState ,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { auth, fireDB } from '../firebase'
import { ScrollView } from 'react-native-gesture-handler';

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
     return (
      <ScrollView>
      
      <View style ={styles.FirstContainer}>                 
          <Text style ={styles.title}>{displaydata[2]}</Text>
          <Text style = {styles.CompanyName}>{displaydata[0]}</Text>
          <Text style={styles.location}>{displaydata[4]}</Text>
          <TouchableOpacity><Text style={styles.ApplyButton}>APPLY NOW</Text></TouchableOpacity>
      </View>
      <View style = {styles.SecondContainer}>
            <Text style={styles.durationHeading}>Salary:</Text>
            <Text style={styles.duration}>$20-30$ per hour</Text>
            <Text style={styles.durationHeading}>Job Type:</Text>
            <Text style={styles.duration}>{displaydata[3]}</Text>
            <Text style={styles.detailsHeading}>Job Details:</Text>
            <Text style={styles.details}>{displaydata[1]}</Text>
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
  }
});