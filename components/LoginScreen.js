import React, { Component, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput, CheckBox, TouchableOpacity } from 'react-native';

const SignIn = ({ navigation }) => {
    const [email,setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [currentEmail,setCurrentEmail] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [rememberMe, setRememberMe] = useState(false)
    
    useEffect(() => {
      getData()
    }, []);
    
    const getData = async () => {
      try {
          const currentEmail = await AsyncStorage.getItem('userEmail')
          const currentPassword = await AsyncStorage.getItem('userPassword')
          const rememberMe = await AsyncStorage.getItem('rememberMe')
          setCurrentEmail(currentEmail)
          setCurrentPassword(currentPassword)
          if (rememberMe != "false") {
            setEmail(currentEmail)
          }
      }
      catch(e) {
          console.log(error in getData)
      }
    }
    const storeUserInfo = async () => {
      try{
          await AsyncStorage.setItem("userEmail", email)
          await AsyncStorage.setItem("userPassword", password)
          await AsyncStorage.setItem("rememberMe", rememberMe)
      } catch(e) {
          console.log("error in storeData")
      }
  }
    const check = () => {
      if (email === currentEmail && password === currentPassword) {
          storeUserInfo()
          navigation.navigate("Recipe")
      }
      else{
          alert("Wrong User Information")
      }
    }
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'}} style={styles.imageBackground}>
    </ImageBackground>
    <View style={styles.FormContainer}>
    <View>
      <Text style={styles.inputext}>MengCook</Text>
        <TextInput
          value={email}
          onChangeText={email => setEmail(email)}
          placeholder='Email'
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={password => setPassword(password)}
          placeholder='Password'
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={{flexDirection:"row", justifyContent:"space-between"}}><View style={{flexDirection:"row"}}><CheckBox
          style={{marginRight:3}}
          value={rememberMe}
          onValueChange={() => {setRememberMe(true)}}
        /><Text>Remember Me</Text></View><View style={{alignSelf:"end"}}><Text style={{borderBottomWidth:1, marginBottom:10}}>Forgot Password?</Text></View></View>
        <Button
          title= "Sign In"
          style={styles.input}
          color="black"
          onPress={check}
        />
        <View style={{flexDirection:"row", marginTop:1, alignItems:"center", justifyContent:"center"}}>
        <Text style={{marginRight:3}}>Don't have a account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign-Up")}><Text>Register now.</Text></TouchableOpacity>
      </View>
      </View>
      </View>
    </View>
  );
}
export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems:"center"
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.8
  },
  FormContainer: {
    flex: 1,
    width:500,
    height:550,
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute', 
    backgroundColor:"white",
  },
  input: {
    width: 295,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
  inputext: {
    fontSize:40,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    marginBottom: 10,
  },
});

