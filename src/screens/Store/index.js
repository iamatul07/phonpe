import {View, Text, Image, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import CommonHeader from '../../components/CommonHeader';
import StoreTransaction from '../../components/StoreTransaction';
import CategoryCard from '../../components/CategoryCard';

const Store = () => {
  return (
    <View style={styles.container}>
      <CommonHeader />
      <ScrollView>
      <View style={styles.searchBox}>
        <Image
          source={require('../../images/search.png')}
          style={styles.searchImage}
        />
        <Text style={styles.placeholderText}> Search by store name or phone number</Text>
      </View>
      <StoreTransaction />
      <CategoryCard />
      </ScrollView>
    </View>
  );
};

export default Store;
