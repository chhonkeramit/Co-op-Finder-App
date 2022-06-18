import { StyleSheet, Text, View, Image , TextInput , TouchableOpacity} from 'react-native';
import React, { useState ,useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { auth, fireDB } from '../firebase'

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
      setUserLocation(bigArr)
      console.log("index fetched"+ " "+index)
      console.log(bigArr[index])
      console.log("company name" +" "+ bigArr[index][0])
      
  });
   }
     return (
          <View style={styles.container}>
            <Text>JOB DETAIL{index}</Text>
          </View>
     );
}

export default JobDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});