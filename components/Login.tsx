import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

import Colors from '../constants/Colors';

const Login = () => {
    
    const [value, onChangeText] = useState('User Name')
    
    return (
        <View>
            <View style={styles.getStartedContainer}>
                <TextInput
                    style={styles.input}
                    onChangeText = {text => onChangeText(text)}
                    value = {value}
                />
                <TextInput
                    style={styles.input}
                    onChangeText = {text => onChangeText(text)}
                    value = {value}
                />

                <Button
                onPress={() => console.log('log in')}
                title="Log in"
                color="#f194ff"
                accessibilityLabel="Learn more about this purple button"
                />
            </View>

            <View style={styles.helpContainer}>
                <TouchableOpacity onPress={() => console.log('forgot pass')} style={styles.helpLink}>
                <Text style={styles.helpLinkText}>
                    Forgot password?
                </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    helpContainer: {
        marginTop: 15,
        marginHorizontal: 20,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        textAlign: 'center',
        color: '#3aa28d'
    },
    input: {
        borderWidth: 1,
        borderColor: '#bbbbbb',
        backgroundColor: '#aaaaaa',
        paddingTop: 5,
        paddingBottom: 5,
        marginTop: 10,
        marginBottom: 10,
        color: '#de3d81',
        width: 200
    }    
})

export default Login
