import React from 'react';
import { auth, fireDB } from '../firebase';
import { useState,useEffect} from "react";
import { View,Text,Image,ScrollView,StyleSheet,TouchableOpacity,Alert} from "react-native";
import { Card } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAnglesRight, faBriefcase, faClock, faLocationDot, faMoneyBill } from '@fortawesome/free-solid-svg-icons';



const SavedJobs = ({navigation}) => {
    const [displayList, setUserLocation] = useState([[]]);

    useEffect(() => {
        //Runs on every render
            showData();

      },[]);

      const cardSelected = (ind) => {
        console.log("card selected"+ind);
        // console.log(ind);
        Alert.alert("Already applied ");
        navigation.navigate("JobDetail",{index:ind})
      }

    function showData() {
        fireDB.collection(auth.currentUser?.email).get().then((querySnapshot) => {
            let bigArr = []
          querySnapshot.forEach((doc) => {
              // console.log(`${doc.id} => ${doc.data().first}`)
              let newArr = []
              newArr.push(`${doc.data().Company_Name}`)
          newArr.push(`${doc.data().Job_Description}`)
          newArr.push(`${doc.data().Job_Title}`)
          newArr.push(`${doc.data().Job_Type}`)
          newArr.push(`${doc.data().Location}`)
          newArr.push(`${doc.data().Date}`)
          bigArr.push(newArr)
          });
          setUserLocation(bigArr)
          
        //   console.warn("~~~~~~~~~~~~~~ newArr: ", newArr)
      });
       }


  return (<>
  <ScrollView>
     {displayList.map((row, ind) => {
                  {console.log("~~~~~~~~~~ row:", row)};
                  return ( <View key={ind} style = {styles.listitem}>
  <TouchableOpacity onPress={()=> cardSelected(ind)}>

                    <Card>
                      <Text style={styles.score} >{row[2]}</Text>
                      <Text style={styles.loc} >{row[0]}</Text>
                      <Text style={styles.loc} ><FontAwesomeIcon icon={ faLocationDot } />{row[4]}</Text>
  
                    <View style={styles.align}>
                    <Text style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: 'bold',
                        backgroundColor: '#f3f2f1',
                        marginBottom:5,
                        width:'30%',
                        textAlign:'center'
                      }}><FontAwesomeIcon icon={ faMoneyBill } />  $30 - $40</Text>
                      <Text style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: 'bold',
                        backgroundColor: '#f3f2f1',
                        marginBottom:5,
                        width:'30%',
                        textAlign:'center'
                      }} onPress={() => setColor('#00bfff')} ><FontAwesomeIcon icon={ faBriefcase } />{row[3]}</Text>
                      
                      <Text style={{
                        fontSize: 15,
                        color: 'black',
                        fontWeight: 'bold',
                        backgroundColor: '#f3f2f1',
                        marginBottom:5,
                        width:'30%',
                        textAlign:'center'
                      }}><FontAwesomeIcon icon={ faClock } />8 hour shift</Text>
                      </View>
                      <Text style={{
                        fontSize: 15,
                        color: 'black',
                      }} ><FontAwesomeIcon icon={ faAnglesRight } color='royalblue'/>  Easily Apply to this Job</Text>
                      <Text style={styles.title} >{row[1]}</Text>
                      <Text></Text>
                      <Text style={styles.loc} > Applied on {row[5]}</Text>
                    </Card>
                    </TouchableOpacity>

                  </View>         
  )
              })}
              </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
    sectionContainer:{
        marginTop: 10,
        paddingHorizontal: 24,
        flex:1,
    },
    alignSearch:{
      flexDirection:'row',
      justifyContent: 'space-around'
    },
    align:{
      flexDirection:'row',
      justifyContent: 'space-between'
    },
    searchButton : {
        backgroundColor:'#2557a7',
        width: '25%',
        borderRadius: 10,
        
    } ,
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
          // flexDirection:'column',
          // alignItems :'center',
          // padding :10,
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
        fontSize : 16,
        
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


export default SavedJobs