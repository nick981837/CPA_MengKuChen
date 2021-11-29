
import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, ImageBackground,Image, Button } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements'
// const App = () => {...}
export default function App() {
  const[data, setData] = useState([])
  const [recipe, setRecipe] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [ingredients, setIngredients] = useState()
  const [method, setMethod] = useState()
  useEffect(() => {
    getData()
  }, []);
  
  const getData = async () => {
    try {
        const currentData = await AsyncStorage.getItem('shareRecipe')
        if (currentData.length) {
          setData(JSON.parse(currentData))
        }
    }
    catch(e) {
        console.log(e)
    }
  }

  const shareRecipe = () => {
    var dict = { 
      recipe: recipe , 
      ingredients: ingredients , 
      method: method,
      imageUrl:imageUrl
    }
    const recipes = data.concat(dict)
    setData(recipes)
    storeUserInfo(recipes)
    // alert("Saved!")
  }

  const storeUserInfo = async (recipes) => {
    try{
      await AsyncStorage.setItem("shareRecipe", JSON.stringify(recipes))
  } catch(e) {
      console.log("error in storeData")
  }
}
  const renderItem = ({item}) =>{
    return (
      <View style={{ padding:10, marginVertical:20, marginHorizontal:20,  justifyContent:"center", alignItems:"center"}}>
      <View style={{flex:1}}><Text style={{fontSize:15, fontWeight:"800"}}>{item.recipe}</Text></View>
      <View style={{flex:1}}><Text style={{fontSize:15, fontWeight:"800"}}>{item.ingredients}</Text></View>
      <View style={{flex:1}}><Text style={{fontSize:15, fontWeight:"800"}}>{item.method}</Text></View>
      <View style={{flex:3}}><Image source={{uri:item.imageUrl}} style={{width:200, height:150}}></Image></View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80'}} style={styles.imageBackground}>
    </ImageBackground>
      <View style={{alignItems:'center', justifyContent:"center", position: 'absolute', padding:10, top: 0, left: 0, right: 0, bottom: 0}}>
      <View>
          <Text style={styles.header}>
              Share your Recipes
          </Text>
      </View>
      <View style={{backgroundColor:"#f1f2f2", justifyContent:"center", alignItems:"center", padding:5}}>
        <TextInput style={styles.recipeInput} placeholder="Recipe" value={recipe} onChangeText={(text)=>{setRecipe(text)}}></TextInput>
        <TextInput
          placeholder="Ingredients"
          style={styles.ingredientsInput}
          multiline
          numberOfLines={2}
          onChangeText={(text) => setIngredients(text)}
          value={ingredients}/>
        <TextInput
          placeholder="Methods"
          style={styles.methodInput}
          multiline
          numberOfLines={3}
          onChangeText={(text) => setMethod(text)}
          value={method}/>
        <TextInput style={styles.recipeInput} placeholder="Recipe Image Url" value={imageUrl} onChangeText={(text) => setImageUrl(text)}></TextInput>
        <Button title="Share" onPress={shareRecipe} color="orange"></Button>
      </View>
      <FlatList style={{flexDirection:"column", flex:3, marginTop:10, backgroundColor:"#f1f2f2"}} numColumns={4}  
                data = {data} renderItem={renderItem} 
                keyExtractor={item=>item.recipe}>
      </FlatList>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    flex:1,
    alignItems:'center',
    fontSize:48,
    padding:25,
    fontWeight:"800",
    color:"white",
    textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5},
  },
  imageBackground: {
     flex:1,
     width: '100%',
     height: '100%'
  },
  item:{
    fontSize:16
  },
  sectionHeader:{
    fontSize:20,
    marginTop:20
  },
  recipeInput:{
    height: 40,
    width:400,
    margin: 12,
    borderWidth: 1.5,
    padding: 10,
  },
  ingredientsInput:{
    width:400,
    margin: 12,
    borderWidth: 1.5,
    padding: 10,
  },
  methodInput:{
    width:400,
    margin: 12,
    borderWidth: 1.5,
    padding: 10,
  },

});
