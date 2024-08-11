import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Asegúrate de que esta dependencia esté instalada

const SuccessScreen = ({ userName, setScreen }) => {
  return (
    <View style={styles.container}>
      {/* Botón para regresar a la pantalla de inicio de sesión */}
      <Pressable style={styles.backButton} onPress={() => setScreen('LoginScreen')}>
        <Icon name="arrow-back" size={24} color="#000" />
      </Pressable>
      {/* Mensaje de bienvenida */}
      <Text style={styles.welcomeText}>¡Bienvenido {userName}!</Text>
      {/* Botón para agregar una mascota */}
      <Pressable style={styles.addButton} onPress={() => setScreen('AddPetScreen')}>
        <Icon name="add" size={24} color="#fff" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F3F4F6',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  addButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SuccessScreen;
