import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'

const Insurance = () => {
  return (
    <View style={styles.rechargeContainer}>
    <Text style={styles.heading}>Insurance</Text>
    <View style={styles.transferView}>
      <TouchableOpacity style={styles.transferTab}>
        <View style={[styles.transferCard,{backgroundColor:'white'}]}>
          <Image
            source={require('../images/mobile.png')}
            style={styles.icons}
          />
        </View>
        <Text style={styles.bottomText}>Bike</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.transferTab}>
        <View style={[styles.transferCard,{backgroundColor:'white'}]}>
          <Image
            source={require('../images/car.png')}
            style={styles.icons}
          />
        </View>
        <Text style={styles.bottomText}>Car</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.transferTab}>
        <View style={[styles.transferCard,{backgroundColor:'white'}]}>
          <Image
            source={require('../images/healthy-food.png')}
            style={styles.icons}
          />
        </View>
        <Text style={styles.bottomText}>Health</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.transferTab}>
        <View style={[styles.transferCard]}>
          <Image
            source={require('../images/next.png')}
            style={styles.nextIcons}
          />
        </View>
        <Text style={styles.bottomText}>See All</Text>
      </TouchableOpacity>
    </View>
  </View>
  )
}

export default Insurance

const styles = StyleSheet.create({
    rechargeContainer: {
      backgroundColor: 'white',
      borderRadius: moderateScale(10),
      marginTop: moderateVerticalScale(10),
      alignSelf: 'center',
      height: verticalScale(150),
      width: '94%',
      marginBottom:moderateVerticalScale(100)
    },
    heading: {
      fontSize: moderateScale(16),
      fontWeight: '600',
      marginLeft: moderateScale(15),
      marginTop: moderateVerticalScale(15),
      color: '#000',
    },
    transferView:{
      width:'100%',
      justifyContent:'space-evenly',
      alignItems:'center',
      flexDirection:'row',
      marginTop:moderateScale(20)
  },
  transferTab:{
      width:'25%',
      justifyContent:'center',
      alignItems:'center'
  },
  transferCard:{
      width:scale(35),
      height:scale(35),
      borderRadius:moderateScale(10),
      backgroundColor:'#6739B7',
      justifyContent:'center',
      alignItems:"center"
  },
  icons: {
      width: scale(30),
      height: scale(30),
      tintColor: '#6739B7',
  },
  bottomText:{
      fontWeight:'600',
      marginTop:moderateScale(5),
      textAlign:'center'
  },
  nextIcons:{
      width: scale(25),
      height: scale(25),
      tintColor:'white'
  }
  });