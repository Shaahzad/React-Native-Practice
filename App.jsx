import { View, Text, TouchableOpacity, Button, Image, TextInput } from 'react-native'
import React from 'react'

const App = () => {
  return (
    // <View style={{flex: 1}}>
    //     <View style={{flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center'}}>
    //       <Image source={{uri:'https://reactnative.dev/img/tiny_logo.png'}} width={50} height={50}/>
    //     </View>
    //     <View style={{flex: 5, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'space-between', 
    //       alignItems: 'center', paddingHorizontal: 10, 
    //     }}>
    //     <View style={{width: 100, height: 100, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
    //       <Text style={{color: 'white', fontSize: 20}}>A</Text>
    //     </View>
    //     <View style={{width: 100, height: 100, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
    //     <Text style={{color: 'white', fontSize: 20}}>A</Text>
    //     </View>
    //     <View style={{width: 100, height: 100, backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center'}}>
    //     <Text style={{color: 'white', fontSize: 20}}>A</Text>
    //     </View>
    //     </View>
    //     <View style={{flex: 1, backgroundColor: 'red'}}>
    //       <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
    //         <Text style={{color: 'white', fontSize: 20}}>Footer</Text>
    //       </View>
    //     </View>
    // </View>
    <View style={{width: '100%', height: '100%'}}>
      <View style={{flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', gap: 20}}>
       <TextInput style={{borderWidth: 1, borderColor: 'black', padding: 10, width: "80%"}}
       placeholder='Enter your name'
       placeholderTextColor={'red'}
       />
       <TextInput style={{borderWidth: 1, borderColor: 'black', padding: 10, width: "80%"}}
       placeholder='Enter your name'
       placeholderTextColor={'red'}
       />
       <TouchableOpacity style={{backgroundColor: 'red', padding: 10, width: "80%"}}
       activeOpacity={0.5}
       >
         <Text style={{color: 'white', textAlign: 'center', fontSize: 14, fontWeight: 'bold'}}>Submit</Text>
       </TouchableOpacity>
      </View>
    </View>
  )
}

export default App