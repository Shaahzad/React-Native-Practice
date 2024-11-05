import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import IonIcon from "react-native-vector-icons/Ionicons"
import BottomTab from '../Components/BottomTab'


const Identitycard = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
    <View style={{flex: 1}}>
<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1A2980', '#87CEFA']} style={{flexDirection: 'row'}}>
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 20, paddingLeft: '18%'}}>
<Text style={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>Identity Card</Text>
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
    <View style={{flex: 2}}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
       <Image source={require('../assets/user.png')} style={{borderRadius: 50, width: 100, height: 100}}/>
       <View style={{color: '#6B6B6B', marginTop: 10}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Usama Hussain</Text>
       </View>
        </View>
    </View>
    <View style={{flex: 4}}>
     <View style={{paddingHorizontal: 20, paddingVertical: 10, justifyContent: 'center', alignItems: 'center'}}>
      <View style={{backgroundColor: '#EEEEEE', padding: 15, justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#0267B4', boxShadow: 5}}>UX UI DESIGNING COURSE</Text>
        <View style={{paddingVertical: 10}}>
          <Image source={require('../assets/Qrcode.png')} style={{width: 200, height: 200, borderTopLeftRadius: 20}}/>
        </View>
      </View>
      </View>
    </View>
    <View style={{flex: 0.9, padding: 20}}>
      <BottomTab/>
    </View>
    </View>
  )
}

export default Identitycard