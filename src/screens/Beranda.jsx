import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Data =[
  {id: 1, judulIcon:'Pendidikan'},
  {id: 2, judulIcon:'Novel'},
  {id: 3, judulIcon:'Komik'},
  {id: 4, judulIcon:'Drama'},

];

const Beranda = ({navigation}) => {
  return (
    <View style={{padding:20}}>
      <FlatList
      data={Data}
      renderItem={({item}) => (
      <TouchableOpacity style={{width:'100%', marginBottom:10}}onPress={() => navigation.navigate('Beranda')}>
        <View style={{width:'100%',height:100, backgroundColor:'grey', borderRadius:10, alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:20}}>{item.judulIcon}</Text>
        </View>
      </TouchableOpacity>

  )} />
    </View>
  )
}

export default Beranda

const styles = StyleSheet.create({})