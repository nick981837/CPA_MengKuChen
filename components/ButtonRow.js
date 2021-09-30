import React, { useState } from "react";
import { Button, StyleSheet, Text,  View } from "react-native";

const ButtonRow = ({FirstButtonTitle,SecondButtonTitle}) => {
    return (
        <View style={{flex:1,flexDirection:"row"}}>
        <View style={{marginRight:5}}><Button title={FirstButtonTitle}></Button></View>
        <View><Button title={SecondButtonTitle} color="red"></Button></View>
      </View>
    );
}

export default ButtonRow