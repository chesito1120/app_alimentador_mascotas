// src/screens/RegisterScreen.js

import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Asegúrate de que esto esté instalado
import { register } from '../api/api'; // Asegúrate de implementar esta función

const RegisterScreen = ({ setScreen }) => {
  const [name, setName] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    try {
      const response = await register({ name, apellido, email, telefono, password });
      if (response.ok) {
        setScreen('LoginScreen');
      } else {
        const result = await response.json();
        setError(result.message || 'Error en el registro');
      }
    } catch (error) {
      setError('Error en la solicitud de registro');
    }
  };

  return (
    <View style={styles.container}>
      {/* Botón para regresar a la pantalla de inicio de sesión */}
      <Pressable style={styles.backButton} onPress={() => setScreen('LoginScreen')}>
        <Icon name="arrow-left" size={24} color="#000" />
      </Pressable>
      {/* Título de Registro */}
      <Text style={styles.title}>Registro de Usuario</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Apellido"
          value={apellido}
          onChangeText={setApellido}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Registrar" onPress={handleRegister} />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F3F4F6',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
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
});

export default RegisterScreen;
