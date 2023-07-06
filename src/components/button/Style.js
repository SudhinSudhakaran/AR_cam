import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Themes} from '../../themes';

export const styles = StyleSheet.create({
  button: {
    width: responsiveWidth(90),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: Themes.Colors.PRIMARY_COLOR,
    height: responsiveHeight(5),
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: Themes.Colors.WHITE_COLOR,
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2)
  },
});
