import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import SplashScreen from 'expo-splash-screen';

import Home from './src/telas/Home';

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

 /**  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar />
      <Cesta {...mock} />      
    </SafeAreaView>
  );*/

  return (
    <SafeAreaView style={{ flex: 1}}>
      <Home/>     
    </SafeAreaView>
  );

}