import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const Login = () => {
  return (
    <View style={styles.container}>
        <View style={styles.banner}>
        <View>
          <Text>
          <Icon name="Chevron-left" size={30} color="#4F8EF7" />     
          </Text>
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
        backgroundColor: 'red'
    }     
}) 

export default Login