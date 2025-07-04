import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import OtherHeader from '../../components/scanner/OtherHeader';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import BankCard from '../../components/BankCard';

const PayNow = ({route}) => {
  const {scan} = route.params;
  return (
    <View style={styles.container}>
      <OtherHeader title="Pay" />
      <BankCard  scan={scan}/>
    </View>
  );
};

export default PayNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  options: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(30),
  },
  left_image: {
    width: scale(30),
    height: scale(30),
    tintColor: 'white',
  },
});
