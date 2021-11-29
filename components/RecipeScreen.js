import * as React from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, StatusBar, TouchableOpacity } from 'react-native';


const Recipe = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1625&q=80'}} style={styles.imageBackground}>
    </ImageBackground>
    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, alignItems: 'center'}}>
    <View style={{flex:1}}></View>
    <View style={{flex:1}}>
    <View style={{flex:1,alignSelf:"center",marginBottom:10}}><Text style={styles.header}>MengCook</Text></View>
    <View style={styles.buttonRow}>
     
      <View style={{marginRight:25}}>
        <TouchableOpacity  onPress={() => navigation.navigate("New-Recipe")} style={{borderBottomColor:"white", borderBottomWidth:2}}>
          <Text style={{fontSize:20, fontWeight:600, color:"white",textShadowColor:'#585858',
    textShadowOffset:{width: 1, height: 1} }}>New Recipes</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginRight:25}}>
      <TouchableOpacity  onPress={() => navigation.navigate("Saved-Recipe")} style={{borderBottomColor:"white", borderBottomWidth:2}}>
          <Text style={{fontSize:20, fontWeight:600, color:"white",textShadowColor:'#585858',
    textShadowOffset:{width: 1, height: 1} }}>Saved Recipes</Text>
        </TouchableOpacity>
      </View>
      <View>
      <TouchableOpacity  onPress={() => navigation.navigate("Share-Recipe")} style={{borderBottomColor:"white", borderBottomWidth:2}}>
          <Text style={{fontSize:20, fontWeight:600, color:"white",textShadowColor:'#585858',
    textShadowOffset:{width: 1, height: 1} }}>Share Recipes</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
    <View style={{flex:1}}></View>
    </View>
    <StatusBar style="auto" />
  </View>
  );
};

export default Recipe;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent:"center",
    flexDirection:"row"
  },
  header: {
    fontSize: 55,
    fontWeight: "bold",
    flex:2,
    color:"white",
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5}
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

