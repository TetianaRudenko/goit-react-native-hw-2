import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';
import  SubmitBtn from '../Components/ButtonSubmit';


const LoginForm = () => { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [emailFocus, setEmailFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  return (
   
      <View style={styled.container}>
        <Text style={styled.title}>Увійти</Text>      
        <TextInput
          placeholder="Адреса електронної пошти"
          onChangeText={(newEmail) => setEmail(newEmail)}
          defaultValue={email}
          style={emailFocus ? styled.inputOnFocus : styled.input}
          onFocus={() => setEmailFocus(true)}
          onBlur={() => setEmailFocus(false)}
          />
        <TextInput
          placeholder="Пароль"
          onChangeText={(newPassword) => setPassword(newPassword)}
          defaultValue={password}
        style={passwordFocus ? [styled.inputOnFocus, {marginBottom: 42,}] : [styled.input, {marginBottom: 42,}]}
          onFocus={() => setPasswordFocus(true)}
          onBlur={() => setPasswordFocus(false)}
        />
        <SubmitBtn title="Увійти"/>
        <Text style={styled.text}>Немає акаунту? Зареєструватися</Text>
      </View>
   
  );
};

const styled = StyleSheet.create({
  container: {
    marginTop: "auto",
    height: '50%',
    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 66,
    
    
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
    marginBottom: 42,
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
    marginBottom: 42,
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

export default LoginForm;