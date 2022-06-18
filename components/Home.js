import React from 'react'
import { useState,useEffect} from "react";
import { View,Text,Image,ScrollView,StyleSheet,TouchableOpacity,Button} from "react-native";
import { Card  } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';



import { auth, fireDB } from '../firebase'
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = () => {
    const [displayList, setUserLocation] = useState([[]]);
    const [colorActive, setColor] = useState('#89CFF0')
    const navigation = useNavigation();


    useEffect(() => {
        //Runs on every render
            dummyData();

      },[]);
      
      function dummyData() {
        fireDB.collection("Job-Postings").get().then((querySnapshot) => {
            let bigArr = []
          querySnapshot.forEach((doc) => {
              console.log(`${doc.id} => ${doc.data()}`)
              let newArr = []
              newArr.push(`${doc.data().Company_Name}`)
              newArr.push(`${doc.data().Job_Description}`)
              newArr.push(`${doc.data().Job_Title}`)
              newArr.push(`${doc.data().Job_Type}`)
              newArr.push(`${doc.data().Location}`)
              bigArr.push(newArr)
          });
          setUserLocation(bigArr)
          
      });
       }

       const cardSelected = (ind) => {
              console.log("card selected"+ind);
              // console.log(ind);
              navigation.navigate("JobDetail",{index:ind})
       }

  return (
    <ScrollView>
        <View>
        <Icon onPress={() => navigation.navigate("PostJob")} style={{marginLeft:'46%'}} name='plus' size={40} color='green' />
        {displayList.map((row, ind) => {
                {console.log("~~~~~~~~~~ row:", row)};
                return ( 
                 
                  <View key={ind} style = {styles.listitem}>
                <TouchableOpacity onPress={() => cardSelected(ind)}>
                  <Card>
                    <Text style={styles.score} >Position: {row[2]}</Text>
                    <Text style={{
                      fontSize: 15,
                      textAlign: 'center',
                      padding: 8,
                      color: 'black',
                      fontWeight: 'bold',
                      backgroundColor: colorActive,
                      display: 'flex',
                    }} onPress={() => setColor('#00bfff')} ><Icon name='rocket' size={20} color='orangered' /> {row[3]}</Text>
                    <Text style={styles.title} >{row[1]}</Text>
                    
                  </Card>
                  </TouchableOpacity>
                </View>  
                      
              )             
            })}
           
        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    sectionContainer:{
        marginTop: 10,
        paddingHorizontal: 24,
        flex:1,
    },
      separator :{
          height : 1,
          backgroundColor : "#dddddd",
      },
      imagestyle:{
          width: '80%',
           padding: 10,
           borderRadius : 1,
           height: 150,

           display: 'flex',
 

      },
      listitem : {
          flexDirection:'column',
          alignItems :'center',
          padding :10,
          backgroundColor:'#d7dbc8'
          
        },
        title: {
             fontSize : 16,
             textAlign : 'center',
             padding : 5,
             color: 'gray',   
           display:'flex',
           height: 82
          
        },
        text: {
            fontSize : 16,
            textAlign : 'center',
           fontWeight:'bold',  
       },
        pickerstyle:{
            width:50,
            height:20,
             },
        synopsis : {
            fontSize : 15,
            textAlign : 'center',
            padding : 10,
            color: 'black',         
       },
       score:{
        fontSize : 15,
        textAlign : 'center',
        padding : 8,
        color: 'black', 
        fontWeight : 'bold',   
        display:'flex',
       
       },
      
       button: {
        backgroundColor: '#0782F9',
        width: '40%',
        borderRadius: 10,
        alignItems: 'center',
      }, 
      buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
      },
      buttonalign:{
          flexDirection : "row",
        padding :10,
        alignItems: 'flex-end',
      }
});



export default Home