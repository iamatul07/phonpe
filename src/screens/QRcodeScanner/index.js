import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {moderateVerticalScale, scale} from 'react-native-size-matters';
import OtherHeader from '../../components/scanner/OtherHeader';
import RecentScanner from '../../components/scanner/RecentScanner';

const QRcodeScanner = () => {
  return (
    <View style={styles.container}>
      <OtherHeader title='Scan & Pay' />
      <View style={styles.options}>
        <Image
          source={require('../../images/photo.png')}
          style={styles.left_image}
        />
        <Image
          source={require('../../images/no-flash.png')}
          style={[styles.left_image, {marginLeft: 30}]}
        />
      </View>
      <RecentScanner />
    </View>
  );
};

export default QRcodeScanner;

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
