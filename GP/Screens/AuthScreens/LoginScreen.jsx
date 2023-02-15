import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

import logo from '../../assets/logo.png'

export default function LoginScreen() {
    const [Email, setEmail] = useState('');
    return (
        <View>
            <View style={{ alignItems: 'center' }}>
                <Image resizeMode="cover"
                    style={styles.Image}
                    source={logo}
                />
                <Text style={styles.text}> Welcome Back</Text>

            </View>

            <View style={styles.inputContainer}>

                <TextInput
                    style={styles.input}
                    placeholder="Enter Email" //dummy@abc.com
                    autoCapitalize="none"
                    keyboardType="email-address"
                    returnKeyType="next"
                    placeholderTextColor="rgba(0,0,0,0.5)"
                    type="Text"
                    label='Email'
                    onChangeText={(text) => setEmail(text)}
                    value={Email}
                />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Image: {
        marginTop: 50,
        marginBottom: 5,
        resizeMode: 'stretch',
        height: 110,
        width: 90

    },
    safeAreaView: {

        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: "black",
        fontFamily: 'Cochin',
        fontSize: 20,
        fontWeight: 'bold',

    },
    input: {
        height: 40,
        margin: 12,
        padding: 10,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: 'color',
        borderRadius: 8
    }
})