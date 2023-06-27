import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { ButtonLogin } from '../Components/ButtonSubmit';

const LoginScreen = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Увійти</Text>      
      <TextInput
        placeholder="Адреса електронної пошти"
        onChangeText={(newEmail) => setEmail(newEmail)}
        defaultValue={email}
        style={emailFocus ? styles.inputOnFocus : styles.input}
        onFocus={() => setEmailFocus(true)}
        onBlur={() => setEmailFocus(false)}
      />
      <TextInput
        placeholder="Пароль"
        onChangeText={(newPassword) => setPassword(newPassword)}
        defaultValue={password}
        style={passwordFocus ? styles.passwordOnFocus : styles.password}
        onFocus={() => setPasswordFocus(true)}
        onBlur={() => setPasswordFocus(false)}
      />
      <ButtonLogin />
      <Text style={styles.text}>Немає акаунту? Зареєструватися</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-end',
    marginTop: 323,
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 132,

    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: 32,
    
    textAlign: 'center',
    color: '#212121',
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 0.3,
  },
  input: {
    height: 50,
    padding: 16,
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
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF6C00",
  },
  password: {
    height: 50,
    padding: 16,
    marginBottom: 43,
    fontSize: 16,
    lineHeight: 19,
    color: '#BDBDBD',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
  passwordOnFocus: {
    height: 50,
    padding: 16,
    marginBottom: 43,
    fontSize: 16,
    lineHeight: 19,
    color: '#212121',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FF6C00',
    borderRadius: 8,
  },
  text: {
    marginTop: 16,
    
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 19,
    color: '#1B4371',
  },
});

export default LoginScreen;