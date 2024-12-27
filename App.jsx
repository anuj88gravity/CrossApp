import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ButtonExample from './src/components/basics/ButtonExample'
import StateVariableExample from './src/components/basics/StateVariableExample'
import PropsExample from './src/components/basics/PropsExample'
import StyleExample from './src/components/basics/StyleExample'
import TextInputExample from './src/components/basics/TextInputExample'
import SimpleForm from './src/components/basics/SimpleForm'

const App = () => {
  return (
    <SafeAreaView>
      {/* <ButtonExample/>
      <StateVariableExample/> */}
      {/* <PropsExample/> */}
      {/* <StyleExample/> */}
      {/* <TextInputExample/> */}
      <SimpleForm/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})