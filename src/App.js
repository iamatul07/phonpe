import {View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import Home from './screens/Home';
import Insurance from './screens/Insurance';
import Wealth from './screens/Wealth';
import History from './screens/History';
import Store from './screens/Store';

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <>
    <View style={styles.container}>
       {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Store />
      ) : selectedTab == 2 ? (
        <Insurance />
      ) : selectedTab == 3 ? (
        <Wealth />
      ) : (
        <History />
      )}


      <View style={styles.bottomNav}>
        <View style={styles.childBottomNav}>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(0);
            }}>
            <View
              style={[
                styles.tabIconBg,
                {backgroundColor: selectedTab == 0 ? '#6739B7' : '#bdbdbd'},
              ]}>
              <Image
                source={require('../src/images/smart.png')}
                style={styles.tabIcon}
              />
            </View>
            <Text style={{color: selectedTab == 1 ? '#6739B7' : '#bdbdbd'}}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(1);
            }}>
            <View
              style={[
                styles.tabIconBg,
                {backgroundColor: selectedTab == 1 ? '#6739B7' : '#bdbdbd'},
              ]}>
              <Image
                source={require('../src/images/store.png')}
                style={styles.tabIcon}
              />
            </View>
            <Text style={{color: selectedTab == 1 ? '#6739B7' : '#bdbdbd'}}>
              Stores
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(2);
            }}>
            <View
              style={[
                styles.tabIconBg,
                {backgroundColor: selectedTab == 2 ? '#6739B7' : '#bdbdbd'},
              ]}>
              <Image
                source={require('../src/images/insurance.png')}
                style={styles.tabIcon}
              />
            </View>
            <Text style={{color: selectedTab == 2 ? '#6739B7' : '#bdbdbd'}}>
              Insurance
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(3);
            }}>
            <View
              style={[
                styles.tabIconBg,
                {backgroundColor: selectedTab == 3 ? '#6739B7' : '#bdbdbd'},
              ]}>
              <Image
                source={require('../src/images/rupee.png')}
                style={styles.tabIcon}
              />
            </View>
            <Text style={{color: selectedTab == 3 ? '#6739B7' : '#bdbdbd'}}>
              Wealth
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomTab}
            onPress={() => {
              setSelectedTab(4);
            }}>
            <View
              style={[
                styles.tabIconBg,
                {backgroundColor: selectedTab == 4 ? '#6739B7' : '#bdbdbd'},
              ]}>
              <Image
                source={require('../src/images/transaction.png')}
                style={styles.tabIcon}
              />
            </View>
            <Text style={{color: selectedTab == 4 ? '#6739B7' : '#bdbdbd'}}>
              Histoy
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  bottomNav: {
    width: '100%',
    height: verticalScale(70),
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    paddingTop:10
  },
  childBottomNav: {
    width: '100%',
    height: verticalScale(55),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bottomTab: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabIcon: {
    width: scale(18),
    height: scale(18),
    tintColor: 'white',
  },
  tabIconBg: {
    width: scale(30),
    height: scale(30),
    borderRadius: scale(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
