// src/screens/LoginScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image } from 'react-native';
import { login } from '../api/api'; // Asegúrate de implementar esta función

const LoginScreen = ({ setScreen }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      if (response.ok) {
        const result = await response.json();
        setScreen('SuccessScreen');
      } else {
        const result = await response.json();
        setError(result.message || 'Error en el login');
      }
    } catch (error) {
      setError('Error en la solicitud de login');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/huellas.gif')} // Asegúrate de que la ruta sea correcta
        style={styles.gif}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Iniciar Sesión" onPress={handleLogin} color="#4CAF50" />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <Text style={styles.registerText} onPress={() => setScreen('RegisterScreen')}>
          ¿No tienes una cuenta? Regístrate
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  gif: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  form: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
  registerText: {
    marginTop: 12,
    color: '#4CAF50',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
