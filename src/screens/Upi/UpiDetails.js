import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import {
  moderateScale
} from 'react-native-size-matters';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const UPIPass = ({route}) => {
  const navigation = useNavigation();
  const [pin, setPin] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const {bank,amount} = route.params;

  const handleCheckout = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
      navigation.navigate('App')
    }, 2000);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View>
          <Text style={styles.bankName}>{bank?.bankName} Bank</Text>
          <Text style={styles.account}>{bank?.accountNumber}</Text>
        </View>
        <Image source={bank?.uri} style={styles.logo} />
      </View>
      <View style={styles.secondView}>
        <View>
          <Text style={styles.textBold}>To:</Text>
          <Text style={styles.textBold}>Sending:</Text>
        </View>
        <View style={styles.secondRightView}>
          <Text style={styles.textBold}>atul19251@okaxis</Text>
          <Text style={styles.textBold}>{'₹'}{amount}</Text>
        </View>
      </View>
      <Text style={styles.title}>ENTER 4-DIGIT UPI PIN</Text>
      <View style={styles.pinView}>
        <View
          style={[
            styles.dotPass,
            {
              backgroundColor: pin.length >= 1 ? 'black' : 'white',
            },
          ]}></View>
        <View
          style={[
            styles.dotPass,
            {
              backgroundColor: pin.length >= 2 ? 'black' : 'white',
            },
          ]}></View>
        <View
          style={[
            styles.dotPass,
            {
              backgroundColor: pin.length >= 3 ? 'black' : 'white',
            },
          ]}></View>
        <View
          style={[
            styles.dotPass,
            {
              backgroundColor: pin.length >= 4 ? 'black' : 'white',
            },
          ]}></View>
      </View>
      <View style={styles.numberPad}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberPadBtn}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '1');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberPadBtn}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '2');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberPadBtn}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '3');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberPadBtn}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '4');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberPadBtn}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '5');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberPadBtn}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '6');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberPadBtn}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '7');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberPadBtn}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '8');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberPadBtn}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '9');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberPadBtn}
            onPress={() => {
              let newPin = pin.substring(0, pin.length - 1);
              setPin(newPin);
            }}>
            <Image
              source={require('../../images/clear.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.numberPadBtn}
            onPress={() => {
              if (pin.length < 4) {
                setPin(pin + '0');
              }
            }}>
            <Text style={{color: 'black', fontSize: moderateScale(25)}}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={styles.numberPadBtn} onPress={() => handleCheckout()}>
            <Text style={{color: 'black', fontSize: moderateScale(16)}}>
              SUBMIT
            </Text>
          </TouchableOpacity>

          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Image source={require('../../images/correct.png')} style={styles.corectImage}/>
                  <Text style={styles.modalText}>Your transaction is successful!</Text>
                </View>
              </View>
            </Modal>
          </View>

        </View>
      </View>
    </View>
  );
};

export default UPIPass;
