import {View, ScrollView, Text, StatusBar} from 'react-native';
import React from 'react';
import CommonHeader from '../../components/CommonHeader';
import styles from './styles';
import UpdateCard from '../../components/UpdateCard';
import Carousel from '../../components/Carousel';
import TransferMoney from '../../components/TransferMoney';
import HomeReward from '../../components/HomeReward';
import Recharge from '../../components/Recharge';
import Insurance from './../../components/Insurance';

const Home = () => {
  return (
    <View style={styles.container}>
      <CommonHeader />
      <ScrollView>
        <UpdateCard />
        <Carousel />
        <TransferMoney />
        <HomeReward />
        <Recharge />
        <Insurance />
      </ScrollView>
    </View>
  );
};

export default Home;
