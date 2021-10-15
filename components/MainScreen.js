import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, ImageBackground, StatusBar } from 'react-native';

import NewRecipeScreen from './NewRecipe'
import SavedRecipeScreen from './OldRecipe'
import AboutScreen from './AboutScreen'
import LoginScreen from './LoginScreen'
import SignUpScreen from './SignUpScreen'
import RecipeScreen from "./RecipeScreen"
import SignForm  from './SignForm';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="About Us" component={AboutScreen}
         />
        <Stack.Screen name="Log-In"  component={LoginScreen}
         />
        <Stack.Screen name="Sign-Up" component={SignUpScreen}
         />
         <Stack.Screen name="Recipe" component={RecipeScreen}
         />
         <Stack.Screen name="New Recipe" component={NewRecipeScreen}
         />
         <Stack.Screen name="Saved Recipe" component={SavedRecipeScreen}
         />
          <Stack.Screen name="SignForm" component={SignForm}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={{marginRight:50, flexDirection:"row"}}>
          <View style={{marginRight:5}}><Button color ="blue" title ="Recipe" onPress={() => navigation.navigate("Recipe")}>
            </Button>
          </View>
          <View style={{marginRight:5}}><Button color ="deepskyblue" title ="About Us" onPress={() => navigation.navigate("About Us")}>
            </Button>
          </View>
          <View style={{marginRight:5}}>
            <Button
              onPress={() => navigation.navigate("Log-In")}
              title="Log-in"
            />
          </View>
          <View style={{marginRight:5}}>
            <Button
              onPress={() => navigation.navigate("Sign-Up")}
              title="Sign-up"
              color="darkturquoise"
          />
          </View>
        </View>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'}} style={styles.imageBackground}>
    </ImageBackground>
    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center', flexDirection:"row"}}>
    <View style={{flex:1}}></View>
    <View style={{flex:5}}>
    <View style={{flex:1,alignSelf:"center",marginBottom:10}}><Text style={styles.header}> MengCook</Text></View>
    <View style={styles.buttonRow}>
    {/* <View style={{marginRight:5}}><Button color ="deepskyblue" title ="About Us" onPress={() => navigation.navigate("About Us")}>
      </Button></View> */}
      {/* <View style={{marginRight:5}}><Button title ="New Recipes" onPress={() => navigation.navigate("New Recipe")}>
      </Button></View>
      <View><Button title ="Old Recipes" color="darkturquoise" onPress={() => navigation.navigate("Saved Recipe")}>
      </Button></View> */}
    </View>
    </View>
    <View style={{flex:1}}></View>
    </View>
    <StatusBar style="auto" />
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
    fontSize: 80,
    fontWeight: "bold",
    flex:2,
    color:"white"
  },
  introduction: {
    fontSize:16,
    color:"white",
    fontWeight:"bold"
  },
  imageBackground: {
    width: '100%',
     height: '100%',
    opacity: 0.8
  },
  buttonRow: {
    flex:1,
    flexDirection:"row",
    alignSelf:"center"
  }
});

