import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import { StyleSheet, Text, View, Button, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';

import NewRecipeScreen from './NewRecipe'
import SavedRecipeScreen from './OldRecipe'
import AboutScreen from './AboutScreen'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import RecipeScreen from "./RecipeScreen"
import ShareRecipeScreen from "./ShareRecipe"
import RecipeInfoScreen from "./RecipeInfo"


const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomePage" component={HomeScreen} />
      <HomeStack.Screen name="About-Us" component={AboutScreen} />
    </HomeStack.Navigator>
  );
}

const SignInStack = createNativeStackNavigator();
function SigInStackScreen() {
  return (
    <SignInStack.Navigator>
      <SignInStack.Screen name="Sign-In" component={LoginScreen} />
      <SignInStack.Screen name="Sign-Up" component={SignUpScreen} />
      <SignInStack.Screen name="Recipe" component={RecipeScreen} />
      <SignInStack.Screen name="New-Recipe" component={NewRecipeScreen} />
      <SignInStack.Screen name="Saved-Recipe" component={SavedRecipeScreen} />
      <SignInStack.Screen name="Share-Recipe" component={ShareRecipeScreen} />
      <SignInStack.Screen name="Recipe-Info" component={RecipeInfoScreen} />
    </SignInStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const MyStack = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Log-In" component={SigInStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80'}} style={styles.imageBackground}>
    </ImageBackground>
    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent:"center"}}>
      <Text style={styles.header}> MengCook</Text>
    <TouchableOpacity onPress={() => navigation.navigate("About-Us")} style={{borderBottomWidth:2, borderBottomColor:"white"}}>
      <Text style={{fontSize:24, fontWeight:"600", color:"white", textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},}}>About us
      </Text>
    </TouchableOpacity>
    </View>
    </View>
  );
};

export default MyStack;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"center",
    flexDirection:"row"
  },
  header: {
    fontSize: 50,
    fontWeight: "bold",
    color:"white",
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
  },
  introduction: {
    fontSize:16,
    color:"white",
    fontWeight:"bold"
  },
  imageBackground: {
    width: '100%',
     height: '100%',
  },
  buttonRow: {
    flex:1,
    flexDirection:"row",
    alignSelf:"center"
  }
});

