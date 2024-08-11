// app/index.js
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import SuccessScreen from './src/screens/SuccessScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import AddPetScreen from './src/screens/AddPetScreen'; // Importa la nueva pantalla

const App = () => {
  const [screen, setScreen] = useState('LoginScreen');

  return (
    <View style={styles.container}>
      {screen === 'LoginScreen' && <LoginScreen setScreen={setScreen} />}
      {screen === 'SuccessScreen' && <SuccessScreen setScreen={setScreen} />}
      {screen === 'RegisterScreen' && <RegisterScreen setScreen={setScreen} />}
      {screen === 'AddPetScreen' && <AddPetScreen setScreen={setScreen} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
});

export default App;
