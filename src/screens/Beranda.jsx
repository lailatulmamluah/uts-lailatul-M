import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, ScrollView, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Data =[
  // {id: 1, judulIcon:'gambar'},
  {id: 1, label: 'Kategori', iconName:'view-grid'},
  {id: 2, label: 'Notifikasi', iconName:'bell-ring'},
  {id: 3, label: 'Hubungi', iconName:'phone-outline'},
  {id: 4, label: 'Pembayaran', iconName:'credit-card-chip-outline'},
  {id: 5, label: 'Uang Saku', iconName:'wallet'},
  {id: 6, label: 'Panduan', iconName:'book-open-variant'},


];
const DataGambar =[
  {id: 1, label: 'tes', gambar:'../assets/img/busa1.jpeg'},

];



const Beranda = ({navigation}) => {
  const [data, setData] = useState([]); //state atau penampung data

  const ambilData = async () =>{
    try {
      const response = await fetch(); //ambil data
      const json = await response.json(); //ubah data ke JSON
      return setData(json.data);
    }  catch (error) {
      console.log(error); //menampilkan error
      // Alert.alert('info', 'koneksi bermasalah');
    }
  };

  useEffect(() => {
    ambilData();
  }, []);

  return (
    <ScrollView style={{padding:20}}>
        <TouchableOpacity style={{backgroundColor: 'white', marginBottom:10, padding: 10, borderRadius: 10}}>
        <View style={{borderRadius:10, alignItems:'center', justifyContent:'center'}}>
        <Image source={require('../assets/img/busa1.jpeg')} style={{borderRadius: 10, width: '100%', height: 300}} /> 
        </View>
      </TouchableOpacity>
  <View style={{flexDirection: 'row', gap: 80, rowGap: 50, justifyContent: 'center', flexWrap: 'wrap'}}>
        {Data &&
          Data.map((item, i) => {
            return (
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    backgroundColor: 'green',
                    padding: 10,
                    borderRadius: 50,
                    marginBottom: 2,
                  }}
                  key={i}
                  >
                  <MaterialCommunityIcons
                    name={item.iconName}
                    size={20}
                    color={'white'}
                    onPress={() => {
                      navigation.navigate(item.label)
                    }}
                  />
                </View>
                <Text style={{color: 'grey', fontSize: 10}}>{item.label}</Text>
              </View>
            );
          })}
          </View>
          
    </ScrollView>
  )
}

export default Beranda

const styles = StyleSheet.create({})