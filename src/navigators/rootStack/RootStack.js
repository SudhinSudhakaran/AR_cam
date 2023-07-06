import React, {FunctionComponent} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../../screens';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Screens.Splash} />
        <Stack.Screen name="Home" component={Screens.Home} />
        <Stack.Screen name="CameraScreen" component={Screens.CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
