import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Screens/Home';
import { LoginA } from '../Screens/LoginA';
import { LoginU } from '../Screens/LoginU';
import { Register } from '../Screens/Register';
import { AccueilU } from '../Screens/AccueilU';
import { AccueilA } from '../Screens/AccueilA';
import { ProfileU } from '../Screens/ProfileU';
import { ProfileA } from '../Screens/ProfileA';
import { NotificationU } from '../Screens/NotificationU';
import { NotificationA } from '../Screens/NotificationA';
import { Aider } from '../Screens/Aider';
import { Ajouter } from '../Screens/Ajouter';
import { Payer } from '../Screens/Payer';

const Stack = createNativeStackNavigator();
const RootStack = () => {
    return(
        <NavigationContainer
            screenOptions = {{
                headerStyle: { 
                    backgroundColor: 'transparent'
                },
                headerTintColor: '#1F2937',
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                }
        }}
            initialRouteName="Home"

        >
            <Stack.Navigator>
                <Stack.Screen name = "Home" component = { Home }/>
                <Stack.Screen name = "LoginA" component = { LoginA }/>
                <Stack.Screen name = "LoginU" component = { LoginU }/>
                <Stack.Screen name = "Register" component = { Register }/>
                <Stack.Screen name = "AccueilU" component = { AccueilU }/>
                <Stack.Screen name = "AccueilA" component = { AccueilA }/>
                <Stack.Screen name = "ProfileU" component = { ProfileU }/>
                <Stack.Screen name = "ProfileA" component = { ProfileA }/>
                <Stack.Screen name = "NotificationU" component = { NotificationU }/>
                <Stack.Screen name = "NotificationA" component = { NotificationA }/>
                <Stack.Screen name = "Aider" component = { Aider }/>
                <Stack.Screen name = "Ajouter" component = { Ajouter }/>
                <Stack.Screen name = "Payer" component = { Payer }/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;