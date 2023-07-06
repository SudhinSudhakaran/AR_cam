import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
  
    flex: 1,
  },
  backButton: {
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(2),
   
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonImage:{
    width: responsiveWidth(6),
    height: responsiveWidth(6),
  position:'absolute'
   
   
  }
});
