import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { Themes } from '../../themes';
import { styles } from './Style';


const Button = ({label, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => onPress()}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
