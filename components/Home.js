import React from 'react'
import { useState,useEffect} from "react";
import { View,Text,Image,ScrollView,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAnglesRight, faBriefcase, faClock, faLocationDot, faMoneyBill } from '@fortawesome/free-solid-svg-icons';


import { auth, fireDB } from '../firebase';

const Home = () => {
    const [displayList, setUserLocation] = useState([[]]);
    const [Keyword, setKeyword] = useState();
    const [datasearched, setdatasearched] = useState([[]]);


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

    //  testing
       const SearchJobs = () =>{
        console.log("searching data");
        let dataarr = [];
     displayList.forEach(element => {
      for( var i = 0 ;i< element.length ;i++)
      {
        if(element[i].match(Keyword))
        {
        dataarr.push(element);  
        setdatasearched(dataarr);
       console.log("data displayed",datasearched);
     }
    }
     })
      }
 

   const postresume = () =>{
     // console.log("Post resume");
 }
 const Postajob = () =>{
   // console.log("post jobs");
   navigation.navigate("PostJob");
}

const cardSelected = (ind) => {
  console.log("card selected"+ind);
  // console.log(ind);
  navigation.navigate("JobDetail",{index:ind})
}


  return (
    <ScrollView>
        <View>

{/* // testing  */}
<View style={styles.alignSearch}>
<TextInput placeholder="Search The Job " value={Keyword}
 onChangeText={text => setKeyword(text)}  style={styles.score} />

<TouchableOpacity style={styles.searchButton} onPress={SearchJobs}>
  <Text style={{textAlign:'center', padding:8, fontWeight:'bold', color:'white'}}>Search Jobs</Text>
</TouchableOpacity>
</View>
            {/* testing code** */}
            {Keyword?.length > 0 ?
        
        datasearched.map((row, ind) => {
                    // {console.log("~~~~~~~~~~ row:", row)};
                    return ( <View key={ind} style = {styles.listitem}>
    {/* <TouchableOpacity onPress={()=> cardSelected(ind)}> */}

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
                      }}  ><FontAwesomeIcon icon={ faBriefcase } />{row[3]}</Text>
                      
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
                      
                    </Card>
                    {/* </TouchableOpacity> */}

                     </View>         
    )
                }):
                displayList.map((row, ind) => {
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



export default Home