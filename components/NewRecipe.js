
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput } from 'react-native';
import ButtonRow from './ButtonRow'
// const App = () => {...}
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'}} style={styles.imageBackground}>
    </ImageBackground>
      <View style={{flex:2, alignItems:'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center'}}>
          <Text style={styles.header}>
              Just fill in the ingredients that you have, then we can come up some good recipes for you!
          </Text>
      <View style={{flex:4}}>
        <TextInput style={styles.IngredientsInput} placeholder="Ingredients1"></TextInput>
        <TextInput style={styles.IngredientsInput}placeholder="Ingredients2"></TextInput>
        <TextInput style={styles.IngredientsInput}placeholder="Ingredients3"></TextInput>
        <TextInput style={styles.IngredientsInput}placeholder="Ingredients4"></TextInput>
        <TextInput style={styles.IngredientsInput}placeholder="Ingredients5"></TextInput>
        
      </View>
      <ButtonRow FirstButtonTitle = "create recipes" SecondButtonTitle = "more ingredients"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
  },
  header: {
    flex:1,
    alignItems:'center',
    fontSize:24,
    padding:25,
    color:"while",
  },
  imageBackground: {
    width: '100%',
     height: '100%',
    opacity: 0.8
  },
  IngredientsInput:{
    height: 40,
    width:400,
    margin: 12,
    borderWidth: 1.5,
    padding: 10,
  },
});
