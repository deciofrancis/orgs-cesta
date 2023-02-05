import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import SplashScreen from 'expo-splash-screen';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });
  
  if (!fonteCarregada) {
    return <SplashScreen />
  }

  return (
    <View >
      <StatusBar />
      <Cesta {...mock} />      
    </View>
  );
}