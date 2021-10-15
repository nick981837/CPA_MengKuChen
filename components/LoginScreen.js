import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecipeScreen from "./RecipeScreen"
import SignForm from './SignForm'

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground imageStyle= 
{{opacity:0.1}} source={{uri: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'}} style={styles.imageBackground}>
    </ImageBackground>
    <SignForm kind="Login" bottomMessage1="Don't hava a login?" bottomMessage2="Register now." forgotPasswordShow = {true} confirmPasswordShow = {false} ></SignForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
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
    fontSize:40,
    padding: 10,
    textAlign:'center',
    fontWeight:'bold',
    marginBottom: 10,
  },
});

