import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: '100%',
    height: verticalScale(80),
    justifyContent: 'flex-end',
  },
  subHeader: {
    width: '100%',
    height: verticalScale(60),
    justifyContent: 'center',
    borderBottomWidth: 0.8,
    borderBottomColor: '#929292',
  },
  numberPad: {
    width: '100%',
    position: 'absolute',
    bottom: moderateVerticalScale(30),
  },
  icon: {
    width: scale(22),
    height: scale(22),
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),
    marginTop: moderateVerticalScale(40),
    marginBottom: moderateVerticalScale(10),
  },
  bankName: {
    fontSize: moderateScale(14),
    fontWeight: '500',
  },
  account: {
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  logo: {
    width: scale(40),
    height: scale(30),
    resizeMode: 'contain',
  },
  secondView: {
    width: '100%',
    height: verticalScale(50),
    justifyContent: 'space-between',
    paddingLeft: moderateScale(20),
    paddingRight: moderateScale(20),

    backgroundColor: '#b3b3b3',
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondRightView: {
    alignItems: 'flex-end',
  },
  title: {
    alignSelf: 'center',
    marginTop: moderateVerticalScale(70),
    fontSize: 18,
    fontWeight: '600',
  },
  pinView: {
    marginTop: moderateScale(30),
    alignSelf: 'center',
    flexDirection: 'row',
  },
  numberPadBtn: {
    width: '33%',
    height: verticalScale(45),
    borderWidth: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBold:{
    fontWeight:'600',
    fontSize:14
  },
  dotPass:{
    width: scale(14),
    height: scale(14),
    borderRadius: scale(7),
    borderWidth: 0.5,
    marginLeft: moderateScale(20),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    width:'100%'
  },
  modalView: {
    height : 140, 
    width : 350,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    alignItems : "center", 
    justifyContent : "center", 
  },
  button: {
    borderRadius: 20,
    padding: 10,
    width:150
   // elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#4bb550',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color:'#000',
    fontSize:17,
    fontWeight:'600'
  },
  corectImage:{
    width:scale(30),
    height:scale(30),
    marginBottom:moderateVerticalScale(10)
  }
});

export default styles;
