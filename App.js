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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator style={styles.container}>
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginPage} />
        <Stack.Screen name="Home" component={Home} />
         <Stack.Screen name="Register" component={RegisterPage} />
         <Stack.Screen name="StudentRegister" component={StudentRegister} />
         <Stack.Screen name="RecruiterRegister" component={RecruiterRegister} />
         <Stack.Screen name="Tab" component={Tab} options={{ headerShown: false }} />
         <Stack.Screen name="PostJob" component={PostJob} />
         <Stack.Screen name="Profile" component={Profile} />
         <Stack.Screen name="JobDetail" component={JobDetail} />

         
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
  },
});
