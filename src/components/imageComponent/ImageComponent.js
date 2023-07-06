/**
 <---------------------------------------------------------------------------------------------->
 * Purpose: Custome image component
 * Created/Modified By: Sudhin Sudhakaran
 * Created/Modified Date: 03-07-2023
 * Steps:
 * 1.   take uri and style as props
 * 2.   pass props to image component
 <---------------------------------------------------------------------------------------------->
 */

import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ImageComponent = ({uri,style}) => {
  return (
    <View>
      <Image
        source={{
          uri: uri,
        }}
        style={{width: 100, height: 100,...style}}
      />
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({});
