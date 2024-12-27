import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const PropsExample = () => {
    const [name, setName] = useState('temp');

    function updateData() {
        setName("anuj sharma");
    }
  return (
    <View>
      <User name={name}/>
      <Button title='update props' onPress={()=>updateData()}/>
    </View>
  )
}


export const User = (props)=>{
    return (
        <View>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Data : {props.name}</Text>
            
        </View>
    );
}

export default PropsExample

const styles = StyleSheet.create({})