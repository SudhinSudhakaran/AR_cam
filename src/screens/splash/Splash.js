/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {CustomComponents} from '../../components';
import {styles} from './Style';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    let _navigation = setTimeout(() => {
       navigation.navigate('Home');
    }, 2000);

    return () => {
      clearTimeout(_navigation);
    };
  }, []);

  return (
    <CustomComponents.SafeAreaView
      style={{alignItems: 'center', justifyContent: 'center'}}>
      <Text style={styles.title}>AR CAM</Text>
    </CustomComponents.SafeAreaView>
  );
};

export default Splash;
