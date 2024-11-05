import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import IonIcon from "react-native-vector-icons/Ionicons"
import { TextInput } from 'react-native-paper'
import BottomTab from '../Components/BottomTab'

const Profile = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <View style={{flex: 0.5}}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1A2980', '#87CEFA']} style={{flexDirection: 'row'}}>
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 20, paddingLeft: '18%'}}>
<Text style={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>Profile</Text>
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
            <View style={{alignItems: 'center', justifyContent: 'center', paddingVertical: 20}}>
                <Image source={require('../assets/user.png')} style={{borderRadius: 60, width: 120, height: 120}}/>
                <IonIcon name='camera-outline' size={25} style={{position: 'absolute', top: 100, left: 200, backgroundColor: '#1A2980', color: 'white', borderRadius: 50, padding: 5}}/>
            </View>
        </View>
        <View style={{flex: 1.5}}>
        <View style={{paddingHorizontal: 20, paddingVertical: 10, justifyContent: 'center', alignItems: 'center', gap: 10}}>
        <TextInput placeholder='Enter Your Name' style={{borderWidth: 1, width: '100%', borderRadius: 5, backgroundColor: 'white'}}/>
        <TextInput placeholder='Enter Date of Birth' keyboardType='numeric' style={{borderWidth: 1, width: '100%', borderRadius: 5, backgroundColor: 'white'}}/>
        <TextInput placeholder='Email Address' keyboardType='email-address' style={{borderWidth: 1, width: '100%', borderRadius: 5, backgroundColor: 'white'}}/>
        </View>
        </View>
        <View style={{flex: 1.3}}>
        <View style={{paddingHorizontal: 20, paddingVertical: 12}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Change Password</Text>
        </View>
        <View style={{paddingHorizontal: 20, paddingVertical: 5, gap: 10}}>
        <TextInput placeholder='Old Password' secureTextEntry={true} style={{borderWidth: 1, width: '100%', borderRadius: 5, backgroundColor: 'white'}}/>
        <TextInput placeholder='New Password' secureTextEntry={true} style={{borderWidth: 1, width: '100%', borderRadius: 5, backgroundColor: 'white'}}/>
        </View>
        </View>
        <View style={{flex: 0.6, padding: 10}}>
        <BottomTab/>
        </View>
    </ScrollView>
  )
}

export default Profile