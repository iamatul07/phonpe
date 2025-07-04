import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

const CategoryCard = () => {
  return (
    <View style={styles.categoryCard}>
    <Text style={styles.heading}>Popular Categories</Text>
    <FlatList
      numColumns={4}
      contentContainerStyle={{marginTop:moderateScale(20)}}
      data={[
        {
          icon: require('../images/shop.png'),
          title: 'Kirana & General Stores',
        },
        {
          icon: require('../images/healthy-food.png'),
          title: 'Fruits and vegetables',
        },
        {
          icon: require('../images/turkey.png'),
          title: 'Meat Shop',
        },
        {
          icon: require('../images/medicine.png'),
          title: 'Pharmacy',
        },
        {
          icon: require('../images/pharmacy.png'),
          title: 'Doctor & Path labs',
        },
        {
          icon: require('../images/healthy-food.png'),
          title: 'Fruits and vegetables',
        },
        {
          icon: require('../images/beverages.png'),
          title: 'Food Beverages',
        },
        {
          icon: require('../images/stationery.png'),
          title: 'Stationery',
        },
      ]}
      renderItem={({item, index}) => {
        return (
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={item.icon} style={styles.categoryIcon} />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        );
      }}
    />
  </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    categoryCard: {
        width: '94%',
        height: verticalScale(250),
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: moderateVerticalScale(10),
        marginBottom: moderateVerticalScale(100),
      },
      heading: {
        fontSize: moderateScale(16),
        fontWeight: '600',
        marginLeft: moderateScale(15),
        marginTop: moderateVerticalScale(15),
      },
      categoryItem: {
        width: '25%',
       
        alignItems: 'center',
        marginTop:moderateVerticalScale(15)
      },
      categoryIcon: {
        width: scale(30),
        height: scale(30),
        tintColor:'#6739B7'
      },
      title:{
        fontSize:moderateScale(12)
        ,textAlign:'center',
        marginTop:moderateVerticalScale(5)
      }
})