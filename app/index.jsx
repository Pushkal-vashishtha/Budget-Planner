import { View, Text, StyleSheet, Button } from 'react-native'
import React ,{useEffect}from 'react'
import { Link, useRouter } from 'expo-router'
import services from '../utils/services.jsx'
import { client } from '../utils/KindeConfig.jsx';

export default function Home() {


  const router = useRouter();
  
  useEffect(()=>{
    checkUserAuth();
  },[])    


  const checkUserAuth=async()=>{
    const result=await services.getData('login');
    if(result!=='true')
    {
        router.replace('/login')
    }
}

const handleLogout = async () => {
  const loggedOut = await client.logout();
  if (loggedOut) {
    await services.storeData('login','false');
    router.replace('/login');
      // User was logged out
  }
};


  return (
    <View>
      <Text style={styles.style}>Home
      </Text>
      <Button title='Logout' onPress={handleLogout}/>
    </View>
  )
}
const styles = StyleSheet.create({
  style:{
    fontSize:20
  }
})
