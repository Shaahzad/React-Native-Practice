import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import IonIcon from "react-native-vector-icons/Ionicons"
import { Link } from '@react-navigation/native'

export default function BottomTab() {
  return (
    <View style={{flex: 1, padding: 20, backgroundColor: '#1A2980', marginHorizontal: 10, marginVertical: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10,}}>
       <View style={{flex: 1, flexDirection: 'row', gap: 20, justifyContent: 'space-around', alignItems: 'center'}}>
       <View>
        <IonIcon style={{alignSelf: 'center'}} name='home-outline' size={25} color={'#26D0CE'}/>
        <Text style={{color: '#26D0CE'}}>Home</Text>
        </View>
        <View>
        <IonIcon style={{alignSelf: 'center'}}  name='play-outline' size={25} color={'#26D0CE'}/>
        <Text style={{color: '#26D0CE'}}>Home</Text>
        </View>
        <View>
        <IonIcon style={{alignSelf: 'center'}}  name='star-outline' size={25} color={'#26D0CE'}/>
        <Text style={{color: '#26D0CE'}}>Home</Text>
        </View>
        <View>
        <IonIcon style={{alignSelf: 'center'}}  name='person-outline' size={25} color={'#26D0CE'}/>
        <Text style={{color: '#26D0CE'}}>Home</Text>
        </View>
        <View>
        <TouchableOpacity>
        <IonIcon style={{alignSelf: 'center'}}  name='qr-code-outline' size={25} color={'#26D0CE'}/>
        <Link to={{screen: 'QrCode'}}>
        <Text style={{color: '#26D0CE'}}>Home</Text>
        </Link>
         </TouchableOpacity>
        </View>
       </View>
    </View>

  )
}
