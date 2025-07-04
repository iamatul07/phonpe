import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters'

const TransferMoney = () => {
  return (
    <View style={styles.moneyTransfer}>
      <Text style={styles.heading}>Transfer Money</Text>
      <View style={styles.transferView}>
        <TouchableOpacity style={styles.transferTab}>
            <View style={styles.transferCard}>
              <Image source={require('../images/user.png')} style={styles.icons}/>
            </View>
            <Text style={styles.bottomText}>To Mobile Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transferTab}>
            <View style={styles.transferCard}>
            <Image source={require('../images/bank2.png')} style={styles.icons}/>
            </View>
            <Text style={styles.bottomText}>{'To Bank/\n UPI ID'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transferTab}>
            <View style={styles.transferCard}>
            <Image source={require('../images/self.png')} style={styles.icons}/>
            </View>
            <Text style={styles.bottomText}>To Self Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transferTab}>
            <View style={styles.transferCard}>
            <Image source={require('../images/bank.png')} style={styles.icons}/>
            </View>
            <Text style={styles.bottomText}>{'Check Bank\n Balance'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TransferMoney

const styles = StyleSheet.create({
    moneyTransfer:{
        width:'95%',
        height:verticalScale(150),
        backgroundColor:'white',
        alignSelf:'center',
        marginTop:moderateVerticalScale(20),
        borderRadius:moderateScale(10)
    },
    heading:{
        fontSize:moderateScale(16),
        fontWeight:'600',
        marginLeft:moderateScale(15),
        marginTop:moderateVerticalScale(15),
        color:'#000'
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
        width: scale(22),
        height: scale(22),
        tintColor: 'white',
    },
    bottomText:{
        fontWeight:'600',
        marginTop:moderateScale(5),

    }
})