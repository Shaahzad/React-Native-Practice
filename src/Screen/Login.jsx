import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import IonIcon from 'react-native-vector-icons/Ionicons'

const Login = () => {
  return (
    <View style={styles.container}>
        <View style={styles.banner}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <IonIcon name='chevron-back' size={20} color='white'/>
          </View>
          <View style={{marginLeft: 30}}> 
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              Student Login
            </Text>
          </View>
          </View>
          <View>
            <Image source={require('../assets/Banner.png')}/>
          </View>
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    banner:{
        flex: 1,
        backgroundColor: 'blue'
    }     
}) 

export default Login