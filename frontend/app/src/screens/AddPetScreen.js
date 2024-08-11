import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Asegúrate de que esto esté instalado
import { addPet } from '../api/api'; // Asegúrate de implementar esta función

const AddPetScreen = ({ setScreen }) => {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [raza, setRaza] = useState('');
  const [error, setError] = useState('');

  const handleAddPet = async () => {
    try {
      const response = await addPet({ nombre, edad, raza });
      if (response.ok) {
        setScreen('SuccessScreen'); // Redirige a la pantalla de éxito si la mascota se agrega correctamente
      } else {
        const result = await response.json();
        setError(result.message || 'Error en la solicitud');
      }
    } catch (error) {
      setError('Error en la solicitud de agregar mascota');
    }
  };

  return (
    <View style={styles.container}>
      {/* Botón para regresar a la pantalla anterior */}
      <Pressable style={styles.backButton} onPress={() => setScreen('SuccessScreen')}>
        <Icon name="arrow-left" size={24} color="#000" />
      </Pressable>
      {/* Título de Agregar Mascota */}
      <Text style={styles.title}>Agregar Mascota</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Edad"
          value={edad}
          onChangeText={setEdad}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Raza"
          value={raza}
          onChangeText={setRaza}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        <Button title="Agregar" onPress={handleAddPet} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 40,
    right: 20,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 80, // Ajusta si es necesario
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default AddPetScreen;
