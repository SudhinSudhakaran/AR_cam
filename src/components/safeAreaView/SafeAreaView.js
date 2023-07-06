import React, {FunctionComponent, ReactNode} from 'react';
import {
  SafeAreaView as SafeAreaViewRN,
  ViewStyle,
} from 'react-native-safe-area-context';
import {Themes} from '../../themes';

/**
 <---------------------------------------------------------------------------------------------->
 * Purpose:  Custom Safearea view
 * Created/Modified By: Sudhin Sudhakaran
 * Created/Modified Date: 24-06-2023
 * Steps:
 * 1. import safeAreaView as   SafeAreaViewRN
 * 2. return Child components
 <---------------------------------------------------------------------------------------------->
 */
const SafeAreaView = ({children, style}) => {
  return (
    <SafeAreaViewRN
      style={{flex: 1, backgroundColor: Themes.Colors.WHITE_COLOR, ...style}}>
      {children}
    </SafeAreaViewRN>
  );
};

export default SafeAreaView;
