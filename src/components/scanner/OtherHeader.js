import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

const OtherHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.subHeader}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            navigation.navigate('App');
          }}>
          <Image
            source={require('../../images/left.png')}
            style={styles.left_image}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.backBtn}>
          <Image
            source={require('../../images/help.png')}
            style={styles.left_image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtherHeader;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(85),
    backgroundColor: '#6739B7',
    justifyContent: 'flex-end',
  },
  subHeader: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(15),
  },
  backBtn: {
    width: scale(40),
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  left_image: {
    width: scale(25),
    height: scale(25),
    tintColor: 'white',
  },
  title: {
    color: 'white',
    fontSize: moderateScale(20),
  },
});
