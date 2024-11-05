import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import IonIcon from "react-native-vector-icons/Ionicons"
import BottomTab from '../Components/BottomTab'

const Courses = ({navigation}) => {
  return (
<View style={{flex: 1}}>
  <View style={{flex: 1}}>
<LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#1A2980', '#87CEFA']} style={{flexDirection: 'row'}}>
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 20, paddingLeft: '18%'}}>
<Text style={{textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold'}}>Courses</Text>
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
  <View style={{flex: 0.3}}>
    <View style={{paddingHorizontal: 25}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Past Courses</Text>
    </View>
 </View>
 <View style={{flex: 2.9}}>
     <View style={{paddingHorizontal: 20, paddingVertical: 20}}>
      <View>
        <Image source={require('../assets/course.png')} style={{width: 320, height: 140, borderTopLeftRadius: 20, borderTopRightRadius: 20}}/>
        <View style={{backgroundColor: '#EEEEEE', padding: 5}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Programming Course</Text>
      <Text>Php, Laravel, Mysql</Text>
      <View style={{flexDirection: 'row', gap: 5, paddingTop: 12, alignItems: 'center'}}>
      <IonIcon size={18} color={'#1A2980'} name='time-outline'/>
      <Text style={{fontWeight: 'bold', color: 'black'}}>Duration 3 months</Text>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
      <TouchableOpacity activeOpacity={0.5} style={{borderRadius: 50, width: 100, alignItems: 'center', backgroundColor:'#1A2980'}}>
          <Text style={{color:'white', fontWeight: 'bold',padding: 10}}>Apply Now</Text>
        </TouchableOpacity>
      </View>
        </View>
      </View>
     </View>
     </View>
 </View>
 <View style={{flex: 0.5}}>
 <View style={{paddingHorizontal: 25, paddingVertical: 12}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>New Courses</Text>
    </View>
 </View>
 <View style={{flex: 2.1}}>
  <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
    <Image source={require('../assets/graphic.png')} style={{width: 320, height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20}}/>
    <View style={{backgroundColor: '#EEEEEE', padding: 10}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>Graphic Designing</Text>
      <Text >Photoshop, Illustrator</Text>
    </View>
  </View>
 </View>
 <View style={{flex: 0.8, padding: 20}}>
  <BottomTab/>
 </View>
</View>  
)
}

export default Courses