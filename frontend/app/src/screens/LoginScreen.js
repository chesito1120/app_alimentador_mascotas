// src/screens/LoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';
import { login } from '../api/api'; // Asegúrate de que la ruta sea correcta
import huellasGif from '../assets/images/huellas.gif';

const LoginScreen = ({ setScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      if (response.ok) {
        const { name } = await response.json();
        setScreen(name); // Asumimos que el nombre del usuario se recibe aquí
      } else {
        setErrorMessage('Credenciales incorrectas');
      }
    } catch (error) {
      setErrorMessage('No se pudo conectar al servidor');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={huellasGif} style={styles.gif} />
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <Button title="Iniciar sesión" onPress={handleLogin} />
      <Text
        style={styles.register}
        onPress={() => setScreen('RegisterScreen')}
      >
        ¿No tienes cuenta? Regístrate
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6F7F0',
  },
  gif: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#4CAF50',
  },
  input: {
    height: 40,
    borderColor: '#4CAF50',
    borderBottomWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
  error: {
    color: 'red',
    marginBottom: 20,
  },
  register: {
    marginTop: 20,
    color: '#4CAF50',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
