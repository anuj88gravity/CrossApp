import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ExStyles from './style'
const StyleExample = () => {
  return (
    <View>
      <Text style={{fontSize:20, fontWeight:'bold', color:'red'}}>Inline Style </Text>
      <Text style={styles.InternalStyle}>External Style </Text>
      <Text style={styles.InternalStyle}>External Style </Text>
      <Text style={styles.InternalStyle}>External Style </Text>
      <Text style={ExStyles.textBox}>External Style</Text>
      <Text style={[styles.InternalStyle, ExStyles.textBox, {marginTop:10}]}>Use both Internal and external </Text>
    </View>
  )
}

export default StyleExample


//Internal Style 
const styles = StyleSheet.create({
    InternalStyle:{
        color:'blue',
        fontSize:24,
        backgroundColor:'cyan',
        marginBottom: 10,
        padding:10,
        borderRadius: 10,
        textAlign: 'center',
        textAlignVertical: 'center',
        borderColor:'red',
        borderWidth:2,
        
        
    }


})