import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const TextInputExample = () => {
    const [name, setName] = useState("");

    return (
        <View>
            <Text>Enter Name: {name}</Text>
            <TextInput style={styles.textBox} placeholder='Enter your name'
            value={name}
            onChangeText={(text)=>setName(text)} />
            <Button title='Clear Input Value' onPress={()=>setName('')}/>
        </View>
    )
}

export default TextInputExample

const styles = StyleSheet.create({
    textBox: {
        fontSize: 18, 
        color: 'blue', 
        borderWidth: 2, 
        borderColor: 'blue', 
        margin: 10
    }
})