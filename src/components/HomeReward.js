import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'

const HomeReward = () => {
  return (
    <View style={styles.rewardSection}> 
      <TouchableOpacity style={styles.rewardCard}>
        <Image source={require('../images/wallet.png')} style={styles.rewardIcons}/>
        <Text style={styles.rewardText}>PhonePe Wallet</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rewardCard}>
      <Image source={require('../images/gift.png')} style={styles.rewardIcons}/>
        <Text style={styles.rewardText}>Rewards</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.rewardCard}>
      <Image source={require('../images/speaker.png')} style={styles.rewardIcons}/>
        <Text style={styles.rewardText}>Refer & Earn ₹100</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeReward

const styles = StyleSheet.create({
    rewardSection:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'95%',
        marginTop:moderateScale(15),
        alignSelf:"center"
    },
    rewardCard:{
        width:'32%',
        height:verticalScale(70),
        backgroundColor:'#277be8',
        borderRadius:moderateScale(10),
        justifyContent:'center',
        alignItems:'center'
    },
    rewardIcons:{
        width: scale(23),
        height: scale(23),
        tintColor: 'white',
    },
    rewardText:{
        color:'white',
        fontWeight:'500',
        marginTop:moderateScale(5)
    }
})