import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Login = (props) => {
    // const name = 'Sameer',
    //     age = 23
    const [name,setName]= useState("");
    const [password,setPassword]= useState("");

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 100, alignItems: 'center' }}>
                <Text style={styles.headerText}>Login</Text>
                <View style={styles.bodyContainer}>
                    <Text style={styles.labelText}>
                        Email
                    </Text>
                    <TextInput placeholder='Enter your name' placeholderTextColor={'white'} style={styles.inputStyle}
                    onChangeText={(text)=>{
                        setName(text);
                    }}
                    />
                </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.labelText}>
                        Password
                    </Text>
                    <TextInput placeholder='Enter your password' placeholderTextColor={'white'} style={styles.inputStyle} 
                    onChangeText={(text)=>{
                        setPassword(text);
                    }}
                    />
                </View>
            </View>
            <TouchableOpacity style={styles.button} activeOpacity={0.5} onPress={() => {
                props.navigation.navigate('Home',{
                    name:name,
                    password:password
                })
            }}>
                <Text style={styles.buttonText}>
                    Log in
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'skyblue',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        color: 'white',
        fontWeight: "bold",
    },
    inputStyle: {
        borderWidth: 1,
        color: 'white',
        fontSize: 18,
        width: '60%',
        paddingLeft: 10,
        borderRadius: 10,
        borderColor: 'red'
    },
    bodyContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 20,

    },
    labelText: {
        color: 'white',
        fontSize: 20,
        alignItems: 'center',
        width: '30%'
    },
    button: {
        marginTop: 50,
        width: '80%',
        backgroundColor: "red",
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        borderRadius: 15
    },
    buttonText: {
        color: 'yellow',
        fontSize: 20
    }

})