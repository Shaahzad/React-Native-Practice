import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import IonIcon from "react-native-vector-icons/Ionicons"
import { Link, useNavigation } from '@react-navigation/native'

export default function BottomTab() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, padding: 10, backgroundColor: '#1A2980', marginVertical: 5, borderTopLeftRadius: 10, borderTopRightRadius: 10,}}>
       <View style={{flex: 1, flexDirection: 'row', gap: 20, justifyContent: 'space-around', alignItems: 'center'}}>
       <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}> 
        <IonIcon style={{alignSelf: 'center'}} name='home-outline' size={25} color={'#26D0CE'}/>
        <Text style={{color: '#26D0CE'}}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Courses')}>
        <IonIcon style={{alignSelf: 'center'}}  name='play-outline' size={25} color={'#26D0CE'}/>
        <Text style={{color: '#26D0CE'}}>Courses</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Event')}>
        <IonIcon style={{alignSelf: 'center'}}  name='star-outline' size={25} color={'#26D0CE'}/>
        <Text style={{color: '#26D0CE'}}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <IonIcon style={{alignSelf: 'center'}}  name='person-outline' size={25} color={'#26D0CE'}/>
        <Text style={{color: '#26D0CE'}}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Identitycard')}>
        <IonIcon style={{alignSelf: 'center'}}  name='qr-code-outline' size={25} color={'#26D0CE'}/>
        <Text style={{color: '#26D0CE'}}>Identity</Text>
         </TouchableOpacity>
       </View>
    </View>

  )
}
