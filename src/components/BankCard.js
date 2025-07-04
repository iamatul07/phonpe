import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

import Modal from 'react-native-modal';
import {bankData} from '../data/bankDetails';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {useNavigation} from '@react-navigation/native';

const BankCard = ({scan}) => {
  const [amount, setAmount] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [bankChecked, setBankChecked] = useState({
    id: 1,
    bankName: 'ICICI',
    accountNumber: '*****90',
    uri: require('../images/icici.png'),
  });

  const navigation = useNavigation();

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.bankView}>
        <View style={styles.bankLeftView}>
          <Image source={item?.uri} style={styles.logo} />
          <View style={{marginLeft: moderateScale(15)}}>
            <View style={styles.upi_view}>
              <Text>
                {item?.bankName} - {item?.accountNumber}
              </Text>
              <Image
                source={require('../images/upi_logo.png')}
                style={styles.logo}
              />
            </View>
            <Text style={styles.bankAccount}>{'Bank Account'}</Text>
          </View>
        </View>
        <View style={styles.bankRightView}>
          <Text style={styles.payable}>{'₹ ' + amount}</Text>
          <View style={styles.bankCheck}>
            <BouncyCheckbox
              isChecked={item?.bankName === bankChecked?.bankName}
              onPress={() => setBankChecked(item)}
              fillColor="#29AB87"
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      <View style={styles.cardView}>
        <View style={styles.topView}>
          <View style={styles.leftView}>
            <View style={styles.nameView}>
              <Text style={styles.nameChar}>AS</Text>
            </View>
            <View>
              <Text style={styles.name}>{scan?.fullname}</Text>
              <Text style={styles.upiId}>{scan?.name}@okaxis</Text>
            </View>
          </View>
          <View style={styles.rightView}>
            <Text style={styles.viewHistory}>View History</Text>
          </View>
        </View>
        <View style={styles.amountView}>
          <Image
            source={require('../images/rupee.png')}
            style={[styles.backIcon, {tintColor: 'black'}]}
          />
          <TextInput
            placeholderTextColor={'#929292'}
            placeholder="Enter Amount"
            style={styles.input}
            keyboardType="number-pad"
            value={amount}
            autoFocus={true}
            onChangeText={txt => setAmount(txt)}
          />
        </View>
        <View
          style={[
            styles.amountView,
            {marginBottom: moderateVerticalScale(20)},
          ]}>
          <TextInput
            placeholderTextColor={'#929292'}
            placeholder="Add a Message(optional)"
            style={[styles.input, {fontSize: moderateScale(15)}]}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setModalOpen(true);
        }}
        style={[
          styles.proceedToPay,
          {backgroundColor: amount != '' ? '#6739B7' : '#929292'},
        ]}>
        <Text style={styles.payNowText}>Pay Now</Text>
      </TouchableOpacity>
      <Modal
        isVisible={modalOpen}
        backdropOpacity={0.2}
        style={styles.modalView}>
        <View style={styles.mainView}>
          <View style={styles.modalTopView}>
            <Text style={styles.payable}>Total Payable</Text>
            <View style={styles.modalTopRightView}>
              <Text style={styles.confirmAmount}>{'₹ ' + amount}</Text>
              <TouchableOpacity
                onPress={() => {
                  setModalOpen(false);
                }}>
                <Image
                  source={require('../images/close.png')}
                  style={[
                    styles.backIcon,
                    {tintColor: 'black', width: scale(16)},
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.divider}></View>

          <View>
            <FlatList
              data={bankData}
              renderItem={renderItem}
              snapToAlignment="center"
              keyExtractor={item => item.id}
            />
          </View>

          <TouchableOpacity
            style={styles.confirmPayNow}
            onPress={() => {
              setModalOpen(false);
              navigation.navigate('UpiDetails', {
                bank: bankChecked,
                amount: amount,
              });
            }}>
            <Text style={styles.title}>{'Pay ' + '₹ ' + amount}</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

export default BankCard;

const styles = StyleSheet.create({
  cardView: {
    width: '95%',
    height: verticalScale(200),
    alignSelf: 'center',
    backgroundColor: 'white',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(5),
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: moderateScale(20),
    paddingTop: moderateScale(10),
  },
  leftView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nameView: {
    width: scale(40),
    height: scale(40),
    backgroundColor: '#929292',
    borderRadius: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: scale(24),
    height: scale(24),
    tintColor: 'white',
  },
  nameChar: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  name: {
    fontSize: 18,
    color: '#000',
    marginLeft: moderateScale(10),
  },
  upiId: {
    fontSize: 16,
    color: '#929292',
    marginLeft: moderateScale(10),
  },
  viewHistory: {
    color: '#6739B7',
    fontSize: moderateScale(16),
    fontWeight: '600',
    marginRight: moderateScale(5),
  },
  amountView: {
    width: '94%',
    height: verticalScale(45),
    borderWidth: 0.5,
    alignSelf: 'center',
    borderColor: '#929292',
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
    alignItems: 'center',
    marginTop: moderateVerticalScale(20),
  },
  input: {
    fontSize: 20,
    marginLeft: moderateScale(5),
    fontWeight: '600',
  },
  proceedToPay: {
    width: '100%',
    height: verticalScale(60),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  payNowText: {
    color: 'white',
    fontSize: moderateScale(18),
    fontWeight: '600',
  },
  modalView: {
    margin: 0,
  },
  mainView: {
    backdropColor: 'white',
    width: '100%',
    height: verticalScale(200),
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  mainView: {
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    padding: moderateScale(10),
  },
  modalTopView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(10),
  },
  payable: {
    fontWeight: '700',
    color: 'black',
    fontSize: moderateScale(16),
  },
  modalTopRightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  confirmAmount: {
    fontSize: 30,
    fontWeight: '600',
    color: 'black',
    marginRight: moderateScale(20),
  },
  divider: {
    width: '100%',
    height: verticalScale(0.5),
    backgroundColor: '#929292',
    marginTop: moderateVerticalScale(20),
    opacity: 0.4,
  },
  bankView: {
    width: 390,
    height: verticalScale(50),
    backgroundColor: '#f2f2f2',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bankLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankRightView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: scale(20),
    height: scale(20),
    resizeMode: 'contain',
    marginLeft: moderateScale(10),
  },
  upi_view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bankAccount: {
    color: '#929292',
    fontSize: moderateScale(12),
  },
  confirmPayNow: {
    width: '94%',
    height: verticalScale(40),
    backgroundColor: '#6739B7',
    borderRadius: moderateScale(30),
    alignSelf: 'center',
    marginTop: moderateVerticalScale(20),
    marginBottom: moderateVerticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontWeight: '600',
  },
  bankCheck: {
    marginLeft: moderateScale(10),
  },
});
