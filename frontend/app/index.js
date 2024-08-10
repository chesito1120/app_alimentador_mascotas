// app/index.js

import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar'; 
import LoginScreen from './src/screens/LoginScreen';
import SuccessScreen from './src/screens/SuccessScreen'; 
import AddPetScreen from './src/screens/AddPetScreen'; 

const App = () => {
  const [screen, setScreen] = useState('LoginScreen');
  const [userName, setUserName] = useState('');

  const handleLoginSuccess = (name) => {
    setUserName(name);
    setScreen('SuccessScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="#ffffff" /> {/* Configura la barra de estado */}
      {screen === 'LoginScreen' && <LoginScreen setScreen={handleLoginSuccess} />}
      {screen === 'SuccessScreen' && <SuccessScreen userName={userName} setScreen={setScreen} />}
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
