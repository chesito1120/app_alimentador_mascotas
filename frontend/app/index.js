import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './src/screens/LoginScreen'; // Verifica la ruta correcta
import SuccessScreen from './src/screens/SuccessScreen'; // Verifica la ruta correcta
import AddPetScreen from './src/screens/AddPetScreen'; // Verifica la ruta correcta

const App = () => {
  const [screen, setScreen] = useState('LoginScreen');
  const [userName, setUserName] = useState('');

  const handleLoginSuccess = (name) => {
    setUserName(name);
    setScreen('SuccessScreen');
  };

  return (
    <View style={styles.container}>
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
