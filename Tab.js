// import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Profile from './Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import PostJob from './components/PostJob'
const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator 
        screenOptions={ ({route}) => ({
            "tabBarActiveTintColor": "orangered",
            "tabBarInactiveTintColor": "gray",
            "tabBarStyle": [
                {
                "display": "flex"
                },
                null
            ],
            "tabBarIcon" : ( {focused, color, size} ) => {
                let iconName;

                if (route.name === "Home"){
                    iconName = focused ? 'list' : 'bars';
                }else if (route.name === "Profile"){
                    iconName = focused ? 'gear' : 'gears';
                }
                // else if (route.name === "ViewCart"){
                // iconName = focused ? 'cart-plus' : 'cart-plus';
                // }
                else if (route.name === "PostJob"){
                    iconName = focused ? 'rocket' : 'rocket';
                
            }
                return <Icon name={iconName} size={size} color={color} />;
            }
        }) } 
        
        >
            <Tab.Screen options={{ 
                headerStyle: {
                backgroundColor: '#F13507'
                  },
                 headerTintColor: "white"}} 
                 name='Home' component={Home} />

           {/* <Tab.Screen component={ViewCart} name="ViewCart" 
            options={{ 
                headerStyle: {
                backgroundColor: 'orangered'
                  },
                 headerTintColor: "white"}} /> */}

            <Tab.Screen component={PostJob} name="PostJob" 
            options={{ 
                headerStyle: {
                backgroundColor: 'green'
                  },
                 headerTintColor: "white"}} />
            <Tab.Screen options={{ 
                headerStyle: {
                backgroundColor: '#2557a7'
                  },
                 headerTintColor: "white"}} 
            
            name='Profile' component={Profile} />
            
           

        </Tab.Navigator>
    )
}
export default Tabs;