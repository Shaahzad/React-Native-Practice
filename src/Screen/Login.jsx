import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcon from "react-native-vector-icons/Ionicons"
export default function Login() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', paddingVertical: 30}}>
        <View style={{paddingLeft: 10}}>
          <IonIcon name='chevron-back' size={25} color={'white'}/>
        </View>
        <View style={{paddingLeft: '26%'}}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
            Student Login
          </Text>
        </View>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Image source={require('../assets/Banner.png')}/>
        </View>
      </View>
      <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10, marginTop: 20}}>
        <TextInput placeholder='Email Address' style={{borderWidth: 1, width: '80%', borderRadius: 5, padding: 10}}/>
        <TextInput placeholder='Password' secureTextEntry={true} style={{borderWidth: 1, width: '80%', borderRadius: 5, padding: 10}}/>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black', width: '80%', textAlign: 'right', marginBottom: 10}}>Forget Password ?</Text>
        <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: 'blue', padding: 15, width: '80%', borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', paddingLeft: 10}}>Login</Text>
            <IonIcon name='chevron-forward' size={25} color={'white'} style={{paddingLeft: 10}}/>
          </TouchableOpacity> 
      </View>  
      </View>
    </View>
  )
}