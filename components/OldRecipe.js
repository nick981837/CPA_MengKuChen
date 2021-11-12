
import React, {useEffect,useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, SectionList, SafeAreaView,Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements'
// const App = () => {...}
export default function App() {
  const [data,setData] = useState([])
  useEffect(() => {
    getData()
  }, []);
  useEffect(() => {
    storeUserInfo()
  }, [data]);
  const getData = async () => {
    try {
        const currentData = await AsyncStorage.getItem('favoriteRecipe')
        if (currentData.length) {
          setData(JSON.parse(currentData))
        }
    }
    catch(e) {
        console.log(error in getData)
    }
  }
  const deleteRecipe = (title) =>{
    const deleteData = data.filter(item => item.title !== title)
    setData(deleteData)
  }
  const storeUserInfo = async () => {
    try{
      await AsyncStorage.setItem("favoriteRecipe", JSON.stringify(data))
      console.log("123")
  } catch(e) {
      console.log("error in storeData")
  }
}
  const renderItem = ({item}) =>{
    return (
      <View style={{ padding:10, marginVertical:10, marginHorizontal:20, justifyContent:"center", alignItems:"center"}}>
      <View style={{flex:1}}><Text style={{fontSize:15, fontWeight:"800"}}>{item.title}</Text></View>
      <View style={{flex:1, flexDirection:"row",alignItems:"center"}}><Icon  name='thumbs-up' type='font-awesome' color='blue'/><Text style={{fontWeight:"600"}}>{item.likes} LIKES</Text></View>
      <Icon raised name='trash' type='font-awesome' color='green' onPress={() => deleteRecipe(item.title)} />
      <View style={{flex:3}}><Image source={{uri:item.image}} style={{width:200, height:150}}></Image></View>
      </View>
    )
  }
  return (
    <View style={styles.container}>
    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'}} style={styles.imageBackground}>
    </ImageBackground>
      <View style={{flex:1, alignItems:'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent:"center"}}>
      <Text style={{fontSize:72,
                    fontWeight:"600"}}>
         Favorite Recipes
      </Text>
      <FlatList style={{flexDirection:"column", backgroundColor:"#f1f2f2", marginTop:20, marginBottom:20}} numColumns={3}  data = {data} renderItem={renderItem} keyExtractor={item=>item.title}></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  RecipesContainer: {
    width:'80%',
    height:"auto",
    backgroundColor:"lightblue"
  },
  header: {
    flex:1,
    alignItems:'center',
    fontSize:24,
    padding:25,
    color:"white",
  },
  imageBackground: {
    width: '100%',
     height: '100%',
    opacity: 0.8
  },
  item:{
    fontSize:16
  },
  sectionHeader:{
    fontSize:20,
    marginTop:20
  }

});
