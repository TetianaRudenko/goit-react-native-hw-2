import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from "react-native";


const RegistrationScreen = () => {

    const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginFocus, setLoginFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Реєстрація </Text>
            <TextInput
                placeholder="Логін"
                defaultValue={login}
                style={loginFocus ? styles.inputOnFocus : styles.input}
                onFocus={() => setLoginFocus(true)}
        onBlur={() => setLoginFocus(false)}
            />
            <TextInput placeholder="Адреса електронної пошти" defaultValue={email} style={emailFocus ? styles.inputOnFocus : styles.input}
                onFocus={() => setEmailFocus(true)}
                onBlur={()=> setEmailFocus(false)}
            />
            <TextInput placeholder="Пароль" defaultValue={password} style={styles.input} />
            <Text style={styles.text}>Вже є акаунт? Увійти </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 219,
        backgroundColor: '#fff',
    },
    title: {
        marginTop: 92,
        marginBottom: 33,
        color: "#212121",
        textAlign: 'center',
        fontSize: 30,
        //fontFamily: Roboto,
        fontWeight: 'bold',
        letterSpacing: 0.3,
    },
    input: {
        height: 50,
      padding: 16,
        marginHorizontal: 16,
        marginBottom: 16,
        fontSize: 16,
        lineHeight: 19,
        color: '#BDBDBD',
        backgroundColor: "#F6F6F6",
        borderWidth: 1,
        borderColor: "#E8E8E8",
        borderRadius: 8,
    },
    inputOnFocus: {
        height: 50, 
        padding: 16,
      marginBottom: 16,
        marginHorizontal: 16,
        fontSize: 16,
        lineHeight: 19,
        backgroundColor: "#F6F6F6",
        borderRadius: 8,
        borderWidth:1, 
        borderColor:"#FF6C00",
    },
    password: {
        height: 50,
        padding: 16,
        marginHorizontal: 16,
        fontSize: 16,
        lineHeight: 19,
        color:  '#BDBDBD',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        borderRadius: 8,
        marginBottom: 43,
    },
    passwordOnFocus: {
        height: 50,
        padding: 16,
        marginBottom: 43,
        // fontFamily: 'Roboto',
        fontSize: 16,
        lineHeight: 19,
        color:  '#BDBDBD',
        backgroundColor: '#F6F6F6',    
        borderWidth: 1,
        borderColor: '#FF6C00',
        borderRadius: 8,
    },
    text: {
        marginTop: 16,
        marginBottom: 66,
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 19,
        color: '#1B4371',
    }
})

export default RegistrationScreen;