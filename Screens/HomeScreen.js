import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header'

const HomeScreen = () => {
  return (
    
    <SafeAreaView style={styles.container}>
       <Header />
    </SafeAreaView>
      
    
  )  
}

const styles = StyleSheet.create({
    container:{
        marginTop: 25,
        backgroundColor: 'black',
        flex:1,
    },
    aaa:{
        color: 'red',
    },
})

export default HomeScreen