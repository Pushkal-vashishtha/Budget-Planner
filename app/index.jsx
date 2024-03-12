import { View, Text, StyleSheet, Button } from 'react-native'
import React ,{useEffect}from 'react'
import { Link, useRouter } from 'expo-router'
import services from '../utils/services'

export default function Home() {


  const router = useRouter();
  
  useEffect(()=>{
    checkUserAuth();
  },[])    


  const checkUserAuth = async()=>{
    const result = await services.getData('login');
   // console.log("result",result);
    if(result!='true'){
      router.replace('/login')
    }
  } 

  return (
    <View>
      <Text style={styles.style}>Home
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  style:{
    fontSize:20
  }
})
