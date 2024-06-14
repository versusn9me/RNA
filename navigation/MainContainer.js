import * as React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from '@react-native-vector-icons/ionicons';

import HomeScreen from './navigation/screens/HomeScreen';
import RegistraitionScreen from './navigation/screens/RegistraitionScreen';
import AuthoriztionCreen from './navigation/screens/AuthorizationCreen';

const homeName = 'Home';
const RS = 'Registraion';
const AS = 'Authorization';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator initialRouteName={homeName}
            screenOptions={({route})=>({
                tabBarIcon: ({focused, color, size})=> {
                    let iconName;
                    let rn = rout.name;

                    if (rn = homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    }else if (rn = RS){
                        iconName = focused ? 'registraion' : 'registraion-outline'
                    }else if (rn = AS){
                        iconName = focused ? 'authorization' : 'authorization-outline'
                    }

                    return <Icon name={iconName} size={size} color={color}/>

                }
            })}
            tabBarOptions={{
                activeTintColor: tomato,
                inactiveTintColor: grey,
                labelStyle: {paddingBottom: 10, fontSize: 10},
                style: {padding: 10, height: 70}

            }}
            >

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={RS} component={RegistraitionScreen}/>
            <Tab.Screen name={AS} component={AuthoriztionCreen}/>

            </Tab.Navigator>
        </NavigationContainer>
    );
}