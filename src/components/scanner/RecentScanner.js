import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
import { scanData } from '../../data/recentScanList';
import { useNavigation } from '@react-navigation/native';

const RecentScanner = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.recentList}>
      <Text
        style={[
          styles.title,
          {marginLeft: moderateScale(20), fontWeight: '600'},
        ]}>
        Recents
      </Text>
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginBottom: moderateVerticalScale(20),
            marginTop: moderateVerticalScale(20),
          }}
          keyExtractor={(item) => item?.id}
          data={scanData}
          renderItem={({item, index}) => {
            return (
              <View style={styles.recentItem}>
                <TouchableOpacity
                  style={[styles.nameView,{backgroundColor:item?.colorCode}]}
                  onPress={() => {
                    navigation.navigate('PayNow',{
                      scan:item
                    });
                  }}>
                  <Text style={styles.nameChar}>
                    {item?.letter}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.name}>{item?.name}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default RecentScanner;

const styles = StyleSheet.create({
  recentList: {
    position: 'absolute',
    bottom: 10,
  },
  nameView: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(25),
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  recentItem: {
    marginLeft: moderateScale(20),
    alignItems: 'center',
  },
  nameChar: {
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
  },
  name: {
    marginTop: moderateVerticalScale(5),
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
  title: {
    color: 'white',
    fontSize: moderateScale(20),
  },
});
