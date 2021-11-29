import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
// const App = () => {...}
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:2, justifyContent:"center", alignItems:"center",alignSelf:"center"}}>
      <Text style={{fontSize:26, fontWeight:600, color:"darkturquoise"}}>
              About our App
          </Text>
          <Text style={styles.header}>
              This App is created for students, workers and cooking beginners, who is out of family, having limited items to cook? We Can Help!
          </Text>
      </View>
      <View style={{flex:2,justifyContent:"center",alignItems:"center"}}>
          <Text style={{fontSize:20, fontWeight:600, color:"darkturquoise"}}>Find New Recipes</Text>
          <Image style={styles.images} source = {{uri:'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80'}}></Image>
          <Text style={{fontSize:20, fontWeight:600,  color:"darkturquoise"}}>Save Your Own Recipes</Text>
          <Image style={styles.images} source = {{uri:'https://images.unsplash.com/photo-1542010589005-d1eacc3918f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1792&q=80'}}></Image>
          <Text style={{fontSize:20, fontWeight:600, color:"darkturquoise"}}>Share Your Recipes</Text>
          <Image style={styles.images} source = {{uri:'https://images.unsplash.com/photo-1576867757603-05b134ebc379?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'}}></Image>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: '#fff',
    padding:10
  },
  header: {
    flex:1,
    alignItems:'center',
    fontSize:18,
  },
  images: {
      width:"100%",
      height:"30%"
  }
});
