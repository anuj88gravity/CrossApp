import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonExample = () => {

    let data = 10;

    const fruit = (val)=>{
        data =20;
        console.log(data);
        
    }
  return (
    <View>
      <Text>Button and onPress event : {data}</Text>
      <Button title='on Press' onPress={()=>fruit("Hello")} color={'black'}/>
      <Button title='on Press 2' onPress={fruit} color={'red'}/>
    </View>
  )
}

export default ButtonExample

const styles = StyleSheet.create({})