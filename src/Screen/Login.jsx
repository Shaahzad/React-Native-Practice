import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import IonIcon from "react-native-vector-icons/Ionicons"
export default function Login() {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <View style={{flexDirection: 'row', marginTop: "10%", alignItems: 'center', marginBottom: '45%'}}>
        <View style={{paddingLeft: 10}}>
          <IonIcon name='chevron-back' size={25} color={'white'}/>
        </View>
        <View style={{paddingLeft: '26%'}}>
          <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
            Student Login
          </Text>
        </View>
        </View>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Image source={require('../assets/Banner.png')}/>
        </View>
      </View>
      <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', gap: 10}}>
        <TextInput placeholder='Email Address' style={{borderWidth: 1, width: '80%', borderRadius: 5, padding: 10}}/>
        <TextInput placeholder='Password' secureTextEntry={true} style={{borderWidth: 1, width: '80%', borderRadius: 5, padding: 10}}/>
        <View style={{width: '80%', alignItems: 'flex-end'}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>Forget Password ?</Text>
          </View>
      </View>
      </View>
    </View>
  )
}