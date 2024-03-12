import { View, Text, Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import loginBg from './../../assets/images/loginbg.png'
import Colors from './../../utils/Colors.jsx'
import { Button } from 'react-native-web'
export default function LoginScreen() {
  return (
    <View style={{
        display:'flex',
        alignItems:'center'
    }}>
      <Image source={loginBg}
      style={styles.bgImage}
      />
      <View style={{
        backgroundColor:Colors.PRIMARY,
        width:'100%',
        height:'100%',
        marginTop:-30,
        padding:20,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
      }}>
        <Text
        style={{
            fontSize:30,
            fontWeight:'bold',
            textAlign:'center',
            color:Colors.WHITE,
            marginTop:20
        }}>
            Personal Budget Planner
        </Text>
        <Text
        style={{
            fontSize:18,
            textAlign:'center',
            color:Colors.WHITE,
            marginTop:20
        }}>
            Stay on track with your expenses data
        </Text>
        <TouchableOpacity style={styles.button}
        onPress={()=>console.log("hi")}>
            <Text style={{
                textAlign:'center',
                color:Colors.PRIMARY
            }}>Login/Sign Up</Text>
        </TouchableOpacity>
        <Text style={{
            fontSize:10,
            textAlign:'center',
            color:Colors.WHITE,
            marginTop:20}}>
            * By Login/Sign Up You will agree to T&C
        </Text>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  bgImage:{
    width:200,
    height:400,
    marginTop:30,
    borderWidth:5,
    borderRadius:20,
    borderBlockColor:Colors.BLACK
  },
  button:{
    backgroundColor:Colors.WHITE,
    padding:20,
    paddingHorizontal:5,
    borderRadius:99,
    marginTop:30
  }
})
