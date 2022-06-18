import React from 'react'
import { useState,useEffect} from "react";
import { View,Text,Image,ScrollView,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import { Card } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { auth, fireDB } from '../firebase'

const Home = () => {
    const [displayList, setUserLocation] = useState([[]]);
    const [colorActive, setColor] = useState('#89CFF0')
    const navigation = useNavigation();
    const [Keyword, setKeyword] = useState();
    const [datasearched, setdatasearched] = useState([[]]);
  
    // console.log(Keyword?.length);
    useEffect(() => {
        //Runs on every render
            dummyData();

      },[]);

      function dummyData() {
        fireDB.collection("Job-Postings").get().then((querySnapshot) => {
            let bigArr = []
          querySnapshot.forEach((doc) => {
              // console.log(`${doc.id} => ${doc.data()}`)
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
  return (
    <ScrollView>
        <View>

<TextInput placeholder="Keyword" value={Keyword}
 onChangeText={text => setKeyword(text)}  style={styles.score} />

<TouchableOpacity  style={styles.button} onPress={SearchJobs}>
  <Text>Search Jobs</Text>
</TouchableOpacity>
<TouchableOpacity  style={styles.buttonText} onPress={postresume}>
  <Text style={styles.description} >Post your resume</Text>
</TouchableOpacity>
<TouchableOpacity  style={styles.buttonText} onPress={Postajob}>
  <Text style={styles.description} >Employers: Post a job</Text>
</TouchableOpacity>
       {/* <Icon onPress={() => navigation.navigate("PostJob")} style={{marginLeft:'46%'}} name='plus' size={40} color='green' /> */}
       
        {Keyword?.length > 0 ?
        
    datasearched.map((row, ind) => {
                // {console.log("~~~~~~~~~~ row:", row)};
                return ( <View key={ind} style = {styles.listitem}>

                  <Card>
                    <Text style={styles.score1} >{row[2]}</Text>
                    <Text style={styles.score} >{row[0]}</Text>
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
                 </View>         
)
            }):
displayList.map((row, ind) => {
                // {console.log("~~~~~~~~~~ row:", row)};
                return ( <View key={ind} style = {styles.listitem}>

                  <Card>
                    <Text style={styles.score1} >{row[2]}</Text>
                    <Text style={styles.score} >{row[0]}</Text>
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
                 </View>         
)
            })
        }
           
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
        // fontWeight : 'bold',   
        display:'flex',
       
       },
       score1:{
        fontSize : 20,
        textAlign : 'center',
        padding : 8,
        color: 'black', 
        fontWeight : 'bold',   
        display:'flex', 
       },
      
       button: {
        width:"60%",
        borderRadius:20,
        height:30,
        alignItems:"center",
        justifyContent:"center",
        marginLeft:80,
        marginTop:20,
        backgroundColor:"#00BFFF",
      }, 
      buttonText: {
        width:"60%",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        marginLeft:80,
        marginTop:20,
      },
      description:{
        fontSize:18,
        color:"#00BFFF",
        fontWeight:"900",
      },
});



export default Home