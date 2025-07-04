import {View, Text,StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';

const UpdateCard = () => {
  return (
    <View style={styles.updateCard}>
      <View style={styles.updateTopView}>
        <Image source={require('../images/logo.jpg')} style={styles.logo} />
        <View>
          <Text style={styles.updateTitle}>Get more with the new update</Text>
          <Text style={styles.updateMsg}>
            {
              'We have enhanced the app,and added some new and exciting features!'
            }
          </Text>
        </View>
      </View>
      <View style={styles.updateBtnView}>
        <Text style={styles.later}>LATER</Text>
        <TouchableOpacity style={styles.update}>
          <Text style={styles.updateText}>DOWNLOAD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UpdateCard;

const styles = StyleSheet.create({
    updateCard: {
        width: '95%',
        borderRadius: moderateScale(6),
        alignSelf: 'center',
        marginTop: moderateVerticalScale(10),
        backgroundColor: 'white',
      },
      updateTopView: {
        flexDirection: 'row',
        width: '100%',
        paddingLeft: moderateScale(15),
        paddingRight: moderateScale(15),
        marginTop: moderateVerticalScale(20),
      },
      logo: {
        width: scale(30),
        height: scale(30),
      },
      updateTitle: {
        fontSize: moderateScale(20),
        fontWeight: '600',
        marginLeft: moderateScale(10),
      },
      updateMsg: {
        fontSize: 14,
        width: '70%',
        marginLeft: moderateScale(10),
        color: '#6e6e6e',
        fontWeight:'500'
      },
      updateBtnView: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        marginTop: moderateVerticalScale(20),
        marginBottom: moderateVerticalScale(15),
        alignItems: 'center',
        marginRight: moderateScale(20),
      },
      later: {
        color: '#6739B7',
        fontWeight: '600',
        fontSize: moderateScale(14),
      },
      update: {
        backgroundColor: '#6739B7',
        paddingBottom: moderateScale(10),
        paddingTop: moderateScale(10),
        paddingLeft: moderateScale(20),
        paddingRight: moderateScale(20),
        borderRadius: moderateScale(20),
        marginLeft: moderateScale(20),
      },
      updateText: {
        color: 'white',
        fontWeight: '600',
        fontSize: moderateScale(14),
      },
  });
