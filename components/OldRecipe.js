
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, SectionList, SafeAreaView } from 'react-native';

// const App = () => {...}
export default function App() {
  return (
    <View style={styles.container}>
    <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1481070555726-e2fe8357725c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'}} style={styles.imageBackground}>
    </ImageBackground>
      <View style={{flex:1, alignItems:'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent:"center"}}>
      <SafeAreaView style={styles.RecipesContainer}>
      <Text style={{fontSize:32,
                    backgroundColor:''}}>
         Your Favorite Recipes
      </Text>
      <SectionList
          sections={[
            {title: '1.Chicken Chop Suey', data: ['Chop suey is among the most popular Chinese foods today. It’s a stir-fry vegetable dish that’s cooked with meats, then bounded by a flavorful sauce.']},
            {title: '2.Chinese Noodle Soup',
            data: ['This is the quickest Chinese recipe I’ve ever tried. There’s no need to follow a specific list of ingredients. Any noodles, any protein, and any vegetables will do! ']},
            {title: '3.Cashew Chicken', data:['This easy-peasy recipe doesn’t require a wok. You’ll only need a large non-stick skillet and a couple of classic Chinese flavorings']},
            {title: '4.Beef and Broccoli', data:['Beef and broccoli is one of my go-to dishes when looking for a balanced meal that’s a cinch to make.']},
            {title: '5.Chinese Broccoli with Oyster Sauce', data:['Steamed Chinese broccoli drizzled with an oyster sauce that’s out-of-this-world flavorful. This dish is one of my personal favorites!']},
            {title:'6.Dan Dan Noodles', data:['Dan dan noodles carry the flavor of Szechuan cuisine, which is very, very spicy. So for this noodle dish, expect the sauce to be fiery!']}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
    </SafeAreaView>
      {/* <View style={{flex:4}}>
      <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View> */}
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
    color:"while",
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
