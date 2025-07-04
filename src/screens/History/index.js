import {ScrollView, View} from 'react-native';
import React from 'react';
import styles from './styles';
import HistoryTransaction from '../../components/HistoryTransaction';
import CommonHeader from '../../components/CommonHeader';
const History = () => {
  return (
    <View style={styles.container}>
      <CommonHeader />
      <ScrollView>
      <HistoryTransaction />
      </ScrollView>
    </View>
  );
};

export default History;
