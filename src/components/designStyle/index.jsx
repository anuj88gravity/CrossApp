import { Image, ScrollView, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

const {width} = Dimensions.get('window');

const App = () => {
  return (
    <>
    <ScrollView contentContainerStyle={styles.scrollContainer}>
    <View style={styles.header}>
        <Text style={styles.headerText}>Heading Demo</Text>
      </View>

      <View style={styles.card}>
        <Image source={{uri: 'https://via.placeholder.com/150'}}
        style={styles.cardImage}/>
        <Text style={styles.cardTitle}>Beautiful_Scenery</Text>
        <Text style={styles.cardDescription}>
          This is an example of a card layout with an image and description text.
        </Text>
        <TouchableOpacity style={styles.cardButton}>
          <Text style={styles.cardButtonText}>Learn More</Text>
        </TouchableOpacity>
      </View>

        {/* Footer */}
        <View style={styles.footer}>
        <Text style={styles.footerText}>Made with ❤️ in React Native</Text>
      </View>
    </ScrollView>




    </>
  )
}

export default App

const styles = StyleSheet.create({


  //header styles
  //scroll container style
  scrollContainer:{
    flexGrow:1,
    // backgroundColor:'cyan',
    padding: 16,
    backgroundColor: '#f8f9fa',

  },
  header: {
    backgroundColor: 'green',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'

  },
  //card style
  card: {
    backgroundColor:'#fff',
    borderRadius:10,
    padding:16,
    elevation: 4,
    marginBottom:16,
    shadowColor: '#000',
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.2,
    shadowRadius:3.84,

  },
  cardImage:{
    width:'100%',
    height: width * 0.5,
    marginBottom: 16,
    resizeMode: 'cover',
    borderRadius:10,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom:8,
  },
  cardDescription:{
    color: '#666',
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 16,

  },

  cardButton:{
    backgroundColor: '#007bff',
    paddingVertical:12,
    borderRadius: 8,
    alignItems:'center',
  },
  cardButtonText:{
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  //footer styles

  footer:{
    padding:16,
    borderRadius:10,
    marginTop:10,
    backgroundColor: '#6c757d',
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },

})