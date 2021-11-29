import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
const SignUp = ({ navigation }) => {
const [email,setEmail] = useState()
const [password, setPassword] = useState()
const [confirmPassword, setConfirmPassword] = useState()

const check = () => {
  if (checkSamePassword) {
      storeUserInfo()
      navigation.navigate("Recipe")
  }
  else{
      alert("Please input the same password")
  }
}

const storeUserInfo = async () => {
    try{
        await AsyncStorage.setItem("userEmail", email)
        await AsyncStorage.setItem("userPassword", password)
    } catch(e) {
        console.log("error in storeData")
    }
}
const checkSamePassword = () => {
    if(password == confirmPassword){
        return true
    }
    return false
}
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80'}} style={styles.imageBackground}>
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
          style={styles.input}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={confirmPassword=> setConfirmPassword(confirmPassword)}
          placeholder='Confirm Password'
          style={styles.input}
        />
        <Button
          title= "Register"
          style={styles.input}
          color="black"
          onPress = {check}
        />
        <View style={{flexDirection:"row", marginTop:1, alignItems:"center", justifyContent:"center"}}>
        <Text style={{marginRight:3}}>Already have a account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Log-In")} style={{borderBottomColor:"black", borderBottomWidth:1}}><Text>Login now.</Text></TouchableOpacity>
      </View>
      </View>
      </View>
    </View>
  )
}
export default SignUp

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
    opacity:0.9
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

