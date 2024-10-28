import { View, Text, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import IonIcon from "react-native-vector-icons/Ionicons"

export default function Dashboard() {
  return (
    <View style={{flex: 1}}>
    <View style={{flex: 1}}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1A2980', '#87CEFA']} style={{flexDirection: 'row',
      }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 20, paddingLeft: '18%'}}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>Dashboard</Text>
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row', gap: 15, paddingRight: 20}}>
        <IonIcon name='notifications-outline' size={25} color={'white'}/>
        <IonIcon name='log-out-outline' size={25} color={'white'}/>
        </View>
      </LinearGradient>
    </View>
    <View style={{flex: 6}}>
        <View style={{flex: 1, padding: 20}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Asslam u Alikum</Text>
      <Text style={{fontSize: 22, fontWeight: 'bold', color: '#1A2980'}}>Usama Hussain</Text>
        </View>
    </View>
    </View>
  )
}