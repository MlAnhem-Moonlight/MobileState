import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView, SectionList, Button } from 'react-native';
import BoxText from './components/ButtonCust';
import { useState } from 'react';

export default function App() {
  const [backgroundColor,setBackgroundColor] = useState('rgb(255, 255, 255)');

  const handleClick = (colors) =>{
    setBackgroundColor(colors)
  }

  return (

    <SafeAreaView style={[styles.container,{backgroundColor:backgroundColor}]} edges={['top']}> 
      <BoxText text1 = "GREEN" text2 = 'rgb(255, 255, 255)' text3 = 'rgb(1, 83, 5)' onPress = {() => handleClick('rgb(1, 83, 5)')}/>
      <BoxText text1 = "BLUE" text2 = 'rgb(255, 255, 255)' text3 = 'rgb(11, 0, 160)' onPress = {() => handleClick('rgb(11, 0, 160)')}/>
      <BoxText text1 = "BROWN" text2 = 'rgb(255, 255, 255)' text3 = 'rgb(88, 57, 16)' onPress = {() => handleClick('rgb(88, 57, 16)')}/>
      <BoxText text1 = "YELLOW" text2 = 'rgb(0, 0, 0)' text3 = 'rgb(238, 255, 0)' onPress = {() => handleClick('rgb(238, 255, 0)')}/>
      <BoxText text1 = "RED" text2 = 'rgb(255, 255, 255)' text3 = 'rgb(255, 0, 0)' onPress = {() => handleClick('rgb(255, 0, 0)')}/>
      <BoxText text1 = "BLACK" text2 = 'rgb(255, 255, 255)' text3 = 'rgb(0, 0, 0)' onPress = {() => handleClick('rgb(0, 0, 0)')}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container_Button:
  {
    flex:1,
    margin:10,
  }

});
