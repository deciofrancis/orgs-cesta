import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import useProdutores from './src/hooks/useProdutores';

import Home from './src/telas/Home';
import MelhoresProdutores from './src/telas/MelhoresProdutores';

import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta';

function App() {
  const produtores = useProdutores(false);

 /**  return (
    <SafeAreaView style={{ flex: 1}}>
      <StatusBar />
      <Cesta {...mock} />      
    </SafeAreaView>
  );*/

  return (
    <SafeAreaView style={estilos.tela}>
      <NavigationContainer>
        <Home />
      </NavigationContainer>
    </SafeAreaView>
  );

}

const estilos = StyleSheet.create({
  tela: {
    flex: 1,
  }
})

export default App;