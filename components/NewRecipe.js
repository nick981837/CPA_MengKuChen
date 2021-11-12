
import React, {useState } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [ingredient1, setIngredient1] = useState("")
  const [ingredient2, setIngredient2] = useState("")
  const [ingredient3, setIngredient3] = useState("")
  const [data,setData] = useState([])
  const favoriteRecipe = []
  
  const createRecipe = () =>{
    fetch('https://api.spoonacular.com/recipes/findByIngredients?ingredients='+ingredient1+','+ingredient2+','+ingredient3+'&apiKey=79215483b19744afb1a46052ce726bdc')
      .then((response) => response.json())
      .then((cdata) => {
        console.log(cdata)
        setData(cdata)
      })
    .catch((error)=> console.error(error))
  }
  const saveRecipe = (item) => {
    favoriteRecipe.push(item)
    storeUserInfo()
    alert("saved!")
  }
  const storeUserInfo = async () => {
    try{
      await AsyncStorage.setItem("favoriteRecipe", JSON.stringify(favoriteRecipe))
  } catch(e) {
      console.log("error in storeData")
  }
}
  const renderItem = ({item}) =>{
    return (
      <View style={{ padding:10, marginVertical:10, marginHorizontal:20, justifyContent:"center", alignItems:"center"}}>
      <View style={{flex:1}}><Text style={{fontSize:15, fontWeight:"800"}}>{item.title}</Text></View>
      <View style={{flex:1, flexDirection:"row",alignItems:"center"}}><Icon  name='thumbs-up' type='font-awesome' color='blue'/><Text style={{fontWeight:"600"}}>{item.likes} LIKES</Text></View>
      <Icon raised name='heart' type='font-awesome' color='red' onPress={() => saveRecipe(item)} />
      <View style={{flex:3}}><Image source={{uri:item.image}} style={{width:200, height:150}}></Image></View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'}} style={styles.imageBackground}>
    </ImageBackground>
      <View style={{alignItems:'center', justifyContent:"center", position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>
      <View style={{flex:1}}>
        </View>
        <View style={{flex:1}}>
          <Text style={styles.header}>
              Find a Recipe
          </Text>
        </View>
      <View style={{backgroundColor:"#f1f2f2", justifyContent:"center", alignItems:"center",padding:20}}>
        <TextInput style={styles.IngredientsInput} placeholder="Ingredient" value={ingredient1} onChangeText={text=>{setIngredient1(text)}}></TextInput>
        <TextInput style={styles.IngredientsInput}placeholder="Ingredient" value={ingredient2} onChangeText={text=>{setIngredient2(text)}}></TextInput>
        <TextInput style={styles.IngredientsInput}placeholder="Ingredient" value={ingredient3} onChangeText={text=>{setIngredient3(text)}}></TextInput>
        <Button title="crete recipe" onPress={createRecipe} color="orange"></Button>
      </View>
      <FlatList style={{flexDirection:"column", backgroundColor:"#f1f2f2", marginTop:20, marginBottom:20}} numColumns={3}  data = {data.slice(0,10)} renderItem={renderItem} keyExtractor={item=>item.title}></FlatList>
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
