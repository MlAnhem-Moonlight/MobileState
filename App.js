import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native';
import BoxText from './components/CustomText';

export default function App() {

  const Data =
  [
    {id:'1',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'2',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'3',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'4',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'5',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'6',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'7',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'8',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'9',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'10',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'11',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
    {id:'12',name:'lmao',discription:'Con vit nha hang xom rat ngon',date:'7/1/2022',time:'10:20'},
  ]

  return (

    <SafeAreaView style={styles.container}>
        <FlatList style={styles.list}
        data={Data}
        keyExtractor={(item)=>item.ID}
        renderItem={({item})=> (<BoxText text1={item.name} text2={item.discription} text3={item.date} text4={item.time}/>)}
        />                
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list:
  {
    top:20,
  }
});
