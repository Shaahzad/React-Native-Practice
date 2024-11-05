import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import IonIcon from "react-native-vector-icons/Ionicons"
import { Button, ProgressBar } from 'react-native-paper'
import BottomTab from '../Components/BottomTab'

export default function Dashboard({navigation}) {
  return (
    <View style={{flex: 1}}>
    <View style={{flex: 1}}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1A2980', '#87CEFA']} style={{flexDirection: 'row'}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 20, paddingLeft: '18%'}}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>Dashboard</Text>
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row', gap: 15, paddingRight: 20}}>
          <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
        <IonIcon name='notifications-outline' size={25} color={'white'}/>
          </TouchableOpacity>
          <TouchableOpacity>
        <IonIcon name='log-out-outline' size={25} color={'white'} onPress={() => navigation.navigate('login')}/>
      </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
    <View style={{flex: 1}}>
    <View style={{flex: 1, padding: 20}}>
      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Asslam u Alikum</Text>
      <Text style={{fontSize: 22, fontWeight: 'bold', color: '#1A2980'}}>Usama Hussain</Text>
    </View>
    </View>
    <View style={{flex: 1.8, padding: 15}}>
    <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ffffffc0', '#f2f2f2df', '#f2f2f2']} style={{flex: 1,
      borderRadius: 5
    }}>
     <View style={{padding: 10}}>
      <View>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Programming Course</Text>
        <Text>Php, Laravel, Mysql</Text>
      </View>
      <Text style={{textAlign: 'right', paddingRight: 5}}>20 / 100</Text> 
      <ProgressBar style={{width: '90%'}} color='#1A2980' width={320} progress={0.5}/>
     <View style={{flexDirection: 'row', gap: 5, paddingTop: 12}}>
      <IonIcon size={18} color={'#1A2980'} name='time-outline'/>
      <Text style={{fontWeight: 'bold', color: 'black'}}>Duration 3 months</Text>
     </View>
     </View>
    </LinearGradient>
    </View>
    <View style={{flex: 5}}>
     <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 15}}>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>Upcoming Events</Text>
      <IonIcon name="chevron-forward-outline" size={20} color={'black'}/>
     </View>
     <View style={{padding: 15}}>
      <Image source={require('../assets/Event.png')} style={{width: 290, height: 130, borderTopLeftRadius: 5, borderTopRightRadius: 5}}/>
      <View style={{backgroundColor: '#EEEEEE', width: '88%',  borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
        <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', padding: 10}}>Lorem ipsum dolor sit amet, consectetur dipiscing elit. lo</Text>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
        <Text style={{color:'#1A2980'}}>Tuesday 12 March 2022</Text>
        <TouchableOpacity activeOpacity={0.5} style={{padding: 10, borderRadius: 50, width: 100, alignItems: 'center', backgroundColor:'#1A2980'}}>
          <Text style={{color:'white', fontWeight: 'bold'}}>Apply Now</Text>
        </TouchableOpacity>
      </View>
      </View>
     </View>
    </View>
    <View style={{flex: 1.3, padding: 10}}>
      <BottomTab/>
    </View>
    </View>
  )
}