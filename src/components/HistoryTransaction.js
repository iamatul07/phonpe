import {
  FlatList,
  Image,
  ScrollView,
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
import { paymentData } from '../data/historyPayment';

const HistoryTransaction = () => {
  return (
    <>
      <View style={styles.searchBox}>
        <Image source={require('../images/search.png')} style={styles.search} />
        <Text style={styles.searchText}>Search by name ,number or UPI ID</Text>
      </View>
      <View style={styles.card}>
        {/* <View style={styles.filtersView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity style={styles.dropdownView}>
              <Text>Month</Text>
              <Image
                source={require('../images/down.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.dropdownView, {marginLeft: moderateScale(15)}]}>
              <Text>Categories</Text>
              <Image
                source={require('../images/down.png')}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.dropdownView}>
            <Text>Filter</Text>
            <Image source={require('../images/down.png')} style={styles.icon} />
          </TouchableOpacity>
        </View> */}
        <FlatList
          contentContainerStyle={{marginTop: moderateVerticalScale(30)}}
          data={paymentData}
          renderItem={({item, index}) => {
            return (
              <View style={styles.transactionItem}>
                <View>
                  <View style={styles.topLeftView}>
                    <View style={styles.iconView}>
                      <Image
                        source={item?.uri}
                        style={styles.icon2}
                      />
                    </View>
                    <View style={{marginLeft: moderateScale(10)}}>
                      <Text style={styles.paidTo}>{item?.activityName}</Text>
                      <Text style={styles.name}>{item?.name}</Text>
                    </View>
                  </View>
                  <Text style={styles.time}>{item?.paymentTime}</Text>
                </View>
                <View style={{alignItems: 'flex-end'}}>
                  <Text style={styles.amount}>{'₹'}{item?.amount}</Text>
                  <View style={styles.bankView}>
                    <Text style={[styles.time, {marginTop: 0}]}>
                      {index % 2 == 0 ? 'debited from' : 'credited to'}
                    </Text>
                    <Image
                      source={item?.bankIcon}
                      style={styles.logo}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
    </>
  );
};

export default HistoryTransaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  searchBox: {
    width: '94%',
    height: verticalScale(40),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(10),
    borderWidth: 0.5,
    borderColor: '#929292',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(15),
  },
  search: {
    width: scale(15),
    height: scale(15),
  },
  searchText: {
    marginLeft: moderateScale(20),
    color: '#929292',
    fontSize: moderateScale(16),
  },
  card: {
    width: '94%',
    backgroundColor: 'white',
    marginTop: moderateVerticalScale(15),
    marginBottom:moderateVerticalScale(10),
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    shadowOpacity: 0.1,
    shadowColor: 'rgba(0,0,0,.5)',
    shadowOffset: {
      x: 1,
      y: 1,
    },
  },
  filtersView: {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateVerticalScale(15),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dropdownView: {
    borderWidth: 1,
    borderRadius: moderateScale(10),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    paddingBottom: moderateVerticalScale(5),
    paddingTop: moderateVerticalScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: moderateScale(10),
    width: scale(8),
    height: scale(8),
  },
  transactionItem: {
    width: '94%',
    height: 100,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  topLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(15),
  },
  iconView: {
    width: scale(36),
    height: scale(36),
    backgroundColor: '#6739B7',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon2: {
    width: scale(16),
    height: scale(16),
    tintColor: 'white',
  },
  paidTo: {
    color: 'black',
    fontSize: moderateScale(16),
    fontWeight:'600'
  },
  name: {
    color: '#4f4f4f',
    fontSize: moderateScale(16),
    fontWeight:'600'
  },
  time: {
    marginLeft: moderateScale(20),
    marginTop: moderateVerticalScale(20),
    color: '#929292',
  },
  amount: {
    fontWeight: '700',
    fontSize: 18,
    color: '#4f4f4f',
  },
  bankView: {
    flexDirection: 'row',
    marginTop: moderateVerticalScale(20),
  },
  logo: {
    width: scale(12),
    height: scale(12),
    marginLeft: moderateScale(15),
  },
});
