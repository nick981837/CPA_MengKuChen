
import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Image, ScrollView, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App({route}) {
  const [recipeId, setRecipeId] = useState(716429)
  const [title,setTitle] = useState()
  const [summary,setSummary] = useState()
  const [imageUrl,setImageUrl] = useState()
  const [ingredeints, setIngredients] = useState([])
  const [winePairing, setWinePairing] = useState([])
  const [wineText, setWineText] = useState()
  useEffect(() => {
    getData()
  }, []);

  const getData = async () => {
    fetch('https://api.spoonacular.com/recipes/'+recipeId+'/information?apiKey=79215483b19744afb1a46052ce726bdc')
      .then((response) => response.json())
      .then((cdata) => {
        console.log(cdata)
        setTitle(cdata.title)
        console.log(cdata.title)
        setSummary(cdata.summary)
        setImageUrl(cdata.image)
        setIngredients(cdata.extendedIngredients)
        setWinePairing(cdata.winePairing.pairedWines)
        setWineText(cdata.winePairing.pairingText)
        console.log(cdata.winePairing.pairedWines)
        console.log(cdata.winePairing.pairingText)
      })
    .catch((error)=> console.error(error))
  }

  const renderItem = ({item}) =>{
    return (
      <View style={{ padding:5}}>
      <Text style={{fontSize:20, fontWeight:600}}>{item.name}</Text>
      <Text>{item.amount} {item.unit}</Text>
      <Text>{item.consitency}</Text>
      </View>
    )
  }

  const wineItem = ({item}) =>{
    console.log(item)
    return (
      <View style={{ padding:5}}>
      <Text style={{fontSize:20, fontWeight:600}}>{item}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView  style={{height:650}}>
      <View style={{alignSelf:"center"}}>
      <Text style={styles.header}>
         {title}
      </Text>
      </View>
      <View style={{marginBottom:20, alignSelf:"center"}}><Image source={{uri:imageUrl}} style={{width:700, height:500}}></Image></View>
      <View style={{height:300}}>
      <View style={{borderBottomWidth:3, borderBottomColor: "rgb(226, 221, 204)", width:"85%", marginBottom:20, alignSelf:"center"}}>
        <Text style={{fontSize:26}}>Ingredients & Summary</Text>
      </View>
      <View style={{flexDirection:"row", marginBottom:10}}>
        <View style={{flex:3, justifyContent:"center", alignItems:"center"}}>
        <FlatList data = {ingredeints} renderItem={renderItem} keyExtractor={item=>item.id}></FlatList>
        </View>
        <View style={{flex:4}}>
        <Text style={{fontSize:16}}>
        {summary}
        </Text>
        </View>
      </View>
      <View style={{borderBottomWidth:3, borderBottomColor: "rgb(226, 221, 204)", width:"85%", marginBottom:20, alignSelf:"center"}}>
        <Text style={{fontSize:26}}>WineParing</Text>
      </View>
      <View style={{flexDirection:"row"}}>
        {winePairing?.length != 0?<View style={{flex:4, justifyContent:"center", alignItems:"center"}}>
        <FlatList data = {winePairing} renderItem={wineItem} keyExtractor={item=>item}></FlatList>
        </View>:<View style={{flex:3, justifyContent:"center", alignItems:"center"}}><Text>N/A</Text></View>}
        {wineText?.length !=0?
        <View style={{flex:4}}>
        <Text style={{fontSize:16}}>
        {wineText}
        </Text>
        </View>:<View style={{flex:4}}><Text>N/A</Text></View>}
      </View>
      </View>
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding:30,
  },
  header: {
    alignItems:'center',
    fontSize:40,
    padding:25,
    fontWeight:"800",
    letterSpacing: 3
  },
});
