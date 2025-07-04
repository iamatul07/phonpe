import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {storeData} from '../data/storeData';

const StoreTransaction = () => {
  return (
    <FlatList
      data={storeData}
      renderItem={({item}) => {
        return (
          <View style={styles.shopItem}>
            <Text style={styles.transactionTime}>{item?.last_paid} </Text>
            <View style={styles.shopDetails}>
              <View style={styles.leftSection}>
                <Image
                  source={require('../images/shop.jpg')}
                  style={styles.shopIcon}
                />
                <View style={styles.shopNameView}>
                  <Text style={styles.shopName}>{item?.shopName}</Text>
                  <View style={styles.shopRatingView}>
                    <Image
                      source={require('../images/rating.png')}
                      style={styles.rating}
                    />

                    <Text style={styles.ratingCount}>{item?.rating}</Text>
                    <Text
                      style={[
                        styles.ratingCount,
                        {marginLeft: moderateScale(20)},
                      ]}>
                      {item?.distance}
                    </Text>
                    <Text
                      style={[
                        styles.ratingCount,
                        {marginLeft: moderateScale(20)},
                      ]}>
                      {item?.close_at}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.PayNowBtn}>
              <Image
                source={require('../images/down-right.png')}
                style={styles.paynowIcon}
              />
              <Text style={styles.paynNowBtnTxt}>Pay Now</Text>
            </TouchableOpacity>
          </View>
        );
      }}
      keyExtractor={item => item?.id}
    />
  );
};

export default StoreTransaction;

const styles = StyleSheet.create({
  shopItem: {
    width: '94%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(20),
    padding: moderateScale(10),
  },
  transactionTime: {
    color: '#9e9e9e',
    fontSize: moderateScale(12),
  },
  shopDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateVerticalScale(10),
  },
  shopName: {
    fontWeight: '600',
    color: '#000',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shopIcon: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(20),
  },
  shopNameView: {
    marginLeft: moderateScale(10),
  },
  shopRatingView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateVerticalScale(5),
  },
  rating: {
    width: scale(10),
    height: scale(10),
  },
  ratingCount: {
    color: '#9e9e9e',
    marginLeft: moderateScale(3),
  },
  PayNowBtn: {
    width: '96%',
    alignSelf: 'center',
    height: verticalScale(30),
    borderRadius: moderateScale(30),
    borderWidth: 0.8,
    marginTop: moderateVerticalScale(10),
    marginBottom: moderateVerticalScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paynowIcon: {
    width: scale(10),
    height: scale(10),
    tintColor: '#6739B7',
  },
  paynNowBtnTxt: {
    color: '#6739B7',
    marginLeft: moderateScale(10),
    fontWeight:'600'
  },
});
