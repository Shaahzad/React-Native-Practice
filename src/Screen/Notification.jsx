import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcon from "react-native-vector-icons/Ionicons"
import LinearGradient from 'react-native-linear-gradient'

const Notification = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
        <View style={{flex: 0.5}}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1A2980', '#87CEFA']}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10, alignItems: 'center'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <IonIcon name="chevron-back-outline" size={25} color={'white'} style={{padding: 10}} />
        </TouchableOpacity>
        <View>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>Notifications</Text>
        </View>
        <View>
        <TouchableOpacity>
     <IonIcon name='log-out-outline' size={25} color={'white'} onPress={() => navigation.navigate('login')}/>
  </TouchableOpacity>
        </View>
        </View>
       </LinearGradient>
        </View>
        <View style={{flex: 4}}>
            <View style={{padding: 10, gap: 10}}>
                <View style={{backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, gap: 5}}>
                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>Lorem</Text>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, doloribus.</Text>
                <Text>2 Apr 2024</Text>
                </View>
                <View style={{backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, gap: 5}}>
                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>Lorem</Text>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, doloribus.</Text>
                <Text>2 Apr 2024</Text>
                </View>
                <View style={{backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, gap: 5}}>
                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>Lorem</Text>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, doloribus.</Text>
                <Text>2 Apr 2024</Text>
                </View>
                <View style={{backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, gap: 5}}>
                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>Lorem</Text>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, doloribus.</Text>
                <Text>2 Apr 2024</Text>
                </View>
                <View style={{backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10, gap: 5}}>
                <Text style={{fontWeight: 'bold', color: 'black', fontSize: 20}}>Lorem</Text>
                <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, doloribus.</Text>
                <Text>2 Apr 2024</Text>
                </View>

            </View>
        </View>
    </View>
  )
}

export default Notification