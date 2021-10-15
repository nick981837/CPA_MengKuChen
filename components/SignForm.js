import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { Component, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, CheckBox } from 'react-native';


const SignForm = ({kind, forgotPasswordShow, bottomMessage1, bottomMessage2, confirmPasswordShow }) => {
const [email,setEmail] = useState("")
const [password, setPassword] = useState("")
const [currentEmail,setCurrentEmail] = useState("")
const [currentPassword, setCurrentPassword] = useState("")
const [confirmPassword, setConfirmPassword] = useState("")
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

const check = () => {
    if (kind === "Login") {
        if (email === currentEmail && password === currentPassword) {
            console.log("123")
            storeUserInfo()
            // navigation.navigate("Recipe")
            alert("Correct User Information")
        }
        else{
            alert("Wrong User Information")
        }
    }
    else{
        if (checkSamePassword()) {
            storeUserInfo()
            // navigation.navigate("About-Us")
            alert("Password and Confirm Password are same")
        }
        else{
            alert("Please input the same password")
        }
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
const checkSamePassword = () => {
    if(password === confirmPassword){
        return true
    }
    return false
}
  return (
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
        {confirmPasswordShow?<TextInput
          value={confirmPassword}
          onChangeText={confirmPassword=> setConfirmPassword(confirmPassword)}
          placeholder='Confirm Password'
          secureTextEntry={true}
          style={styles.input}
        />:null}
        {forgotPasswordShow?<View style={{flexDirection:"row", justifyContent:"space-between"}}><View style={{flexDirection:"row"}}><CheckBox
          style={{marginRight:3}}
          value={rememberMe}
          onValueChange={() => {setRememberMe(true)}}
        /><Text>Remember Me</Text></View><View style={{alignSelf:"end"}}><Text style={{borderBottomWidth:1, marginBottom:10}}>Forgot Password?</Text></View></View>:null}
        <Button
          title= {kind}
          style={styles.input}
          color="black"
          onPress = {check}
        />
        <View style={{flexDirection:"row", marginTop:1, alignItems:"center", justifyContent:"center"}}>
        <Text style={{marginRight:3}}>{bottomMessage1}</Text>
        <Text style={{borderBottomWidth:1}}>{bottomMessage2}</Text>
      </View>
      </View>
      </View>
  );
        
}
export default SignForm

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
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
    fontSize:45,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    marginBottom: 30,
  },
});

