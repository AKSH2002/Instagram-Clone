import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
          <Image 
             style={styles.logo}
             source={require('../../assets/header-logo.png')}
             />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
           <TouchableOpacity>
            <Image 
               source={require('../../assets/like.png')}
               style={styles.icon}
            />
           </TouchableOpacity>
           
           <TouchableOpacity>
            <View style={styles.unreadBadge}>
                <Text style={styles.unreadBadgeText}>11</Text>
            </View>
            <Image 
               source={require('../../assets/message.png')}
               style={styles.icon}
            />
           </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
     unreadBadge:{
       backgroundColor: '#FF3250',
       position: 'absolute',
       left: 20,
       bottom: 18,
       width: 25,
       height: 18,
       borderRadius: 25,
       alignItems: 'center',
       justifyContent: 'center',
       zIndex: 100,
     },

     unreadBadgeText:{
       color: 'white',
       fontWeight: '600'
     },

     icon:{
       width: 30,
       height: 30,
       marginLeft: 10,
       backgroundColor: 'white',
       resizeMode: 'contain',
     },

     iconContainer:{
       flexDirection: 'row',
     },

    container:{
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginHorizontal: 20, 
    },

   logo:{
    width: 100,
    height: 50,
    resizeMode: 'contain'
   }
})

export default Header