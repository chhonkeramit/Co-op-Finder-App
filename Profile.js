import { View,Text,Image,ScrollView,StyleSheet,TouchableOpacity} from "react-native";

const Profile = ({navigation}) => {
  return (
    <>
    <TouchableOpacity
          onPress={() => navigation.navigate('SavedJobs')}
        
      >
         <Text style={{bottom:-33,right:-82, fontWeight:'bold'}}>Saved Jobs</Text>
    <Image style = {{width:45,height:45,marginLeft:30}} source={{ uri: 'https://flyclipart.com/thumb2/heart-clipart-black-and-white-heart-black-and-white-clip-art-715443.png' }}></Image>
     
      </TouchableOpacity>
      <TouchableOpacity
          onPress={() => navigation.navigate('ViewCart')}
        
      >
         <Text style={{bottom:-33,right:-82, fontWeight:'bold'}}>Sign Out</Text>
    <Image style = {{width:45,height:45,marginLeft:30}} source={{ uri: 'https://www.freeiconspng.com/thumbs/sign-out-icon/sign-out-logout-icon-0.png' }}></Image>
     
      </TouchableOpacity>
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


export default Profile