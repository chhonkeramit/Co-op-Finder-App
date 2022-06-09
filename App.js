import { StyleSheet} from 'react-native';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import StudentRegister from './components/StudentRegister';
import RecruiterRegister from './components/RecruiterRegister';

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
