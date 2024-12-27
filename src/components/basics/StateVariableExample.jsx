import { StyleSheet, Text, View,Button } from 'react-native'
import React,{useState} from 'react'

const StateVariableExample = () => {
    const [name, setName] = useState("Anuj"); //state declaration with default value & destructring

    function testName(){
        setName("Anuj Sharma");
    }
  return (
    <View>
      <Text>StateVariableExample : {name}</Text>

      <Button title='update Name' onPress={testName}/>

    </View>
  )
}

export default StateVariableExample

const styles = StyleSheet.create({})