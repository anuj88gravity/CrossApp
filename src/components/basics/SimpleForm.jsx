import { StyleSheet, Text, TextInput, View, Button, Dimensions } from 'react-native'
import React, { useState } from 'react'

const SimpleForm = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [display, setDisplay] = useState();


    const resetFormData = () => {
        setDisplay(false),
            setName(""),
            setEmail(""),
            setPassword("")
    }

    return (
        <View>
            <Text style={{ fontSize: 25 }}>SimpleForm</Text>
            <TextInput
                style={styles.textInputBox}
                value={name}
                placeholder='Enter Your Name'
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                style={styles.textInputBox}
                value={email}
                placeholder='Enter email'
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.textInputBox}
                value={password}
                secureTextEntry={true}
                placeholder='Enter Password'
                onChangeText={(text) => setPassword(text)}
            />
            <View>
                <Button color={'green'} title='Print Details' onPress={() => setDisplay(true)} />
                <Button title='Clear Details' onPress={resetFormData} />

            </View>
            {/* Display Values */}
            <View>
                {
                    display ? <View style={styles.cardBox}>
                        <Text>Name : {name}</Text>
                        <Text>Email : {email} </Text>
                        <Text>Password : {password} </Text>
                    </View> : null
                }
            </View>


        </View>
    )
}

export default SimpleForm

const styles = StyleSheet.create({
    textInputBox: {
        fontSize: 20,
        color: 'blue',
        borderWidth: 2,
        borderColor: 'blue',
        margin: 10,
    },
    cardBox: {
        borderRadius: 10,
        padding: 16,
        elevation: 4,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
    }
})