import { View, Text, TouchableOpacity, TextInput, Alert, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);
  
  const AddTodo = () => {
    if(!value) {
      Alert.alert('Error', 'Please Enter Todo')
      return
    }
    const oldTodos = [...todo]
    console.log(oldTodos)
    oldTodos.push(value)
    setTodo(oldTodos)
    setValue('')
  }


  useEffect(() => {
    console.log(todo)
  }, [todo])
  const renderItem = ({item}) => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginVertical: 10}}>
    <Text style={{fontSize: 40, color: 'black'}}>{item}</Text> 
    </View>
  )

  return (
    <View style={{flex: 1, width: '100%'}}>
<View style={{flex: 3, justifyContent: 'center', alignItems: 'center', gap: 20}}>
<Text style={{fontSize: 30, color: 'black', marginBottom: 20}}>Todo App</Text>
  <TextInput 
  placeholderTextColor={'#000000'}
  value={value}
  onChangeText={(text)=> setValue(text)}
  style={{borderWidth: 1, width: '80%', padding: 10, borderRadius: 10}} placeholder='Enter Todo'/>
  <TouchableOpacity 
  activeOpacity={0.5}
  onPress={AddTodo}
  style={{backgroundColor: 'red', padding: 10, borderRadius: 10, width: '80%'}}>
    <Text style={{color: 'white', textAlign: 'center'}}>Submit</Text>
  </TouchableOpacity>
</View>
<View style={{flex: 3, alignItems: 'center'}}>
  {todo.length === 0 ? (
    <Text style={{fontSize: 30, color: 'black'}}>No Todo</Text>
  ): 
  <FlatList
  showsVerticalScrollIndicator={false}
  data={todo}
  renderItem={renderItem}
  keyExtractor={(item, index) => index.toString()}
  />
  }
  </View>
</View>
   
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
    // <View style={{flex: 1, width: '100%'}}>
    //   <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',
    //     gap: 20
    //   }}>
    //   <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} width={80} height={80}/>
    //   <Text style={{color: 'black', fontSize: 20}}>React-Native</Text>
    //     <TextInput style={{borderWidth: 1, width: '80%', borderRadius: 10, padding: 10}} placeholder='Enter Your Email'
    //     placeholderTextColor={'#000000'}
    //     />
    //     <TextInput style={{borderWidth: 1, width: '80%', borderRadius: 10, padding: 10}} placeholder='Enter Your Password'
    //     placeholderTextColor={'#000000'}
    //     />
    //     <TouchableOpacity activeOpacity={0.5} style={{backgroundColor: 'blue', padding: 15, width: '80%', borderRadius: 10}}>
    //       <Text style={{color: 'white', fontSize: 16, textAlign: 'center'}}>Button</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    
    
  )
}

export default App