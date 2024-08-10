// src/screens/AddPetScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { addPet } from '../api/api'; // Asegúrate de que esta ruta sea correcta

const AddPetScreen = ({ setScreen, token }) => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [raza, setRaza] = useState('');

  const handleAddPet = async () => {
    if (!nombre || !edad || !raza) {
      Alert.alert('Error', 'Por favor completa todos los campos.');
      return;
    }

    try {
      const pet = { nombre, edad: Number(edad), raza };

      // Imprime el token en la consola para verificar
      console.log('Token enviado:', token);

      // Envía la solicitud al backend
      const response = await addPet(token, pet);

      // Imprime la respuesta completa para depuración
      console.log('Respuesta del backend:', response);

      if (response.ok) {
        Alert.alert('Éxito', 'Mascota agregada correctamente');
        setScreen('SuccessScreen'); // O la pantalla que prefieras
      } else {
        // Muestra el mensaje de error del backend
        const errorData = await response.json();
        Alert.alert('Error', errorData.msg || 'No se pudo agregar la mascota.');
      }
    } catch (error) {
      console.error('Error al agregar mascota:', error);
      Alert.alert('Error', 'No se pudo agregar la mascota.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agregar Mascota</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType="numeric"
        value={edad}
        onChangeText={setEdad}
      />
      <TextInput
        style={styles.input}
        placeholder="Raza"
        value={raza}
        onChangeText={setRaza}
      />
      <Button title="Agregar Mascota" onPress={handleAddPet} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F3F4F6',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddPetScreen;
