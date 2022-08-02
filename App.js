import { StyleSheet} from 'react-native';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StudentRegister from './components/StudentRegister';
import RecruiterRegister from './components/RecruiterRegister';
import Tab from './Tab';
import Profile from './Profile';
import JobDetail from './components/JobDetail';
import PostJob from './components/PostJob'
import SavedJobs from './components/SavedJobs';
import Studentoremployee from './components/Studentoremployee';
import Studentresume from './components/Studentresume';
import Tabstu from './Tabstu';
import VProfile from './components/VProfile';
import Location from './components/Location';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator  screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }} >
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}  />
         <Stack.Screen name="Register" component={RegisterPage} />
         <Stack.Screen name="StudentRegister" component={StudentRegister} />
         <Stack.Screen name="RecruiterRegister" component={RecruiterRegister} />
         <Stack.Screen name="Tab" component={Tab} options={{ headerShown: false }} />
         <Stack.Screen name="PostJob" component={PostJob} />
         <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="JobDetail" component={JobDetail}  options={{ 
          title: 'Job Details'}}/>
         <Stack.Screen name="SavedJobs" component={SavedJobs}  options={{
          title: 'Saved Jobs'}} />
         <Stack.Screen name="Tabstu" component={Tabstu} options={{ headerShown: false }} />
         <Stack.Screen name="Studentresume" component={Studentresume}  options={{
          title: 'Student Resume'}}/>
         <Stack.Screen name="Studentoremployee" component={Studentoremployee}  options={{
          title: 'Student/Employee'}}/>
         <Stack.Screen name="ViewProfile" component={VProfile} options={{ 
          title: 'My Profile'}} />
         <Stack.Screen name="Location" component={Location} />
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});