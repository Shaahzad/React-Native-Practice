import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import IonIcon from "react-native-vector-icons/Ionicons"
import BottomTab from '../Components/BottomTab'

const Courses = () => {
  return (
    <View style={{flex: 1}}>
    <View style={{flex: 1}}>
      <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1A2980', '#87CEFA']} style={{flexDirection: 'row',
      }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 20, paddingLeft: '18%'}}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>Courses</Text>
        </View>
        <View style={{alignItems: 'center', flexDirection: 'row', gap: 15, paddingRight: 20}}>
        <IonIcon name='notifications-outline' size={25} color={'white'}/>
        <IonIcon name='log-out-outline' size={25} color={'white'}/>
        </View>
      </LinearGradient>
    </View>
    <View style={{flex: 1}}>
    <View style={{flex: 1, padding: 20}}>
      <Text style={{fontSize: 22, fontWeight: 'bold', color: '#1A2980'}}>Past Courses</Text>
    </View>
    </View>
    <View style={{flex: 5}}>
     <View style={{padding: 15}}>
      <Image source={require('../assets/Event.png')} style={{width: 320, height: 130, borderTopLeftRadius: 20, borderTopRightRadius: 20}}/>
      <View style={{backgroundColor: '#EEEEEE', width: '97%',  borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
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
    <View style={{flex: 5}}>
      <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black', paddingLeft: 20}}>New Courses</Text>
     <View style={{padding: 15}}>
      <Image source={require('../assets/Event.png')} style={{width: 320, height: 130, borderTopLeftRadius: 5, borderTopRightRadius: 5}}/>
      <View style={{backgroundColor: '#EEEEEE', width: '97%',  borderBottomLeftRadius: 5, borderBottomRightRadius: 5}}>
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
    </View>
  )
}

export default Courses