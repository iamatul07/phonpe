import {StyleSheet} from 'react-native';
import { moderateScale, moderateVerticalScale, scale } from 'react-native-size-matters';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  searchBox:{
    width:'94%',
    height:moderateScale(45),
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:moderateVerticalScale(10),
    borderRadius:moderateScale(30),
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:moderateScale(15),
    paddingRight:moderateScale(15)
  },
  searchImage:{
    width:scale(18),
    height:scale(18)
  },
  placeholderText:{
    color:"#9e9e9e",
    marginLeft:moderateScale,
    fontSize:moderateScale(15)
  }
});

export default styles;
