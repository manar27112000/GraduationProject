import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from '../Screens/AuthScreens/StartScreen';
import LoginScreen from '../Screens/AuthScreens/LoginScreen';
import SignUpScreen from '../Screens/AuthScreens/SignUpScreen'

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="StartScreen" component={StartScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
                <Stack.Screen name="SignUpScreen" component={SignUpScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}
