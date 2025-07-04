import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const Recharge = () => {
  return (
    <View style={styles.rechargeContainer}>
      <Text style={styles.heading}>Recharge & Pay Bills</Text>
      <View style={styles.transferView}>
        <TouchableOpacity style={styles.transferTab}>
          <View style={[styles.transferCard,{backgroundColor:'white'}]}>
            <Image
              source={require('../images/mobile.png')}
              style={styles.icons}
            />
          </View>
          <Text style={styles.bottomText}>Mobile Recharge</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transferTab}>
          <View style={[styles.transferCard,{backgroundColor:'white'}]}>
            <Image
              source={require('../images/satellite-dish.png')}
              style={styles.icons}
            />
          </View>
          <Text style={styles.bottomText}>DTH</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transferTab}>
          <View style={[styles.transferCard,{backgroundColor:'white'}]}>
            <Image
              source={require('../images/bulb.png')}
              style={styles.icons}
            />
          </View>
          <Text style={styles.bottomText}>Electricity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transferTab}>
          <View style={[styles.transferCard,{backgroundColor:'white'}]}>
            <Image
              source={require('../images/credit-card.png')}
              style={styles.icons}
            />
          </View>
          <Text style={styles.bottomText}>Credit Card</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.transferView}>
        <TouchableOpacity style={styles.transferTab}>
          <View style={[styles.transferCard,{backgroundColor:'white'}]}>
            <Image
              source={require('../images/renewable.png')}
              style={styles.icons}
            />
          </View>
          <Text style={styles.bottomText}>Rent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transferTab}>
          <View style={[styles.transferCard,{backgroundColor:'white'}]}>
            <Image
              source={require('../images/loan.png')}
              style={styles.icons}
            />
          </View>
          <Text style={styles.bottomText}>Loan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transferTab}>
          <View style={[styles.transferCard,{backgroundColor:'white'}]}>
            <Image
              source={require('../images/gas-tank.png')}
              style={styles.icons}
            />
          </View>
          <Text style={styles.bottomText}>Cylinder</Text>
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
  );
};

export default Recharge;

const styles = StyleSheet.create({
  rechargeContainer: {
    backgroundColor: 'white',
    borderRadius: moderateScale(10),
    marginTop: moderateVerticalScale(10),
    alignSelf: 'center',
    height: verticalScale(250),
    width: '94%',
    //marginBottom:moderateVerticalScale(100)
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
