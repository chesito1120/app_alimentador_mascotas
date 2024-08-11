// src/api/api.js

const API_URL = 'http://192.168.100.113:5000/api'; 
export const login = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const result = await response.json();
      throw new Error(result.message || 'Error en la respuesta del servidor');
    }

    return response;
  } catch (error) {
    console.error('Error en la solicitud de login:', error);
    throw error; // Propaga el error para manejarlo en el componente
  }
};

export const register = async ({ name, apellido, email, telefono, password }) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, apellido, email, telefono, password }),
    });
    return response;
  } catch (error) {
    console.error('Error en la solicitud de registro:', error);
    throw error;
  }
};

const agregarMascota = async (nombre, edad, raza) => {
    try {
      const token = await AsyncStorage.getItem('token');
      const response = await fetch('http://192.168.100.113:5000/agregar-mascota', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ nombre, edad, raza }),
      });
  
      if (!response.ok) {
        const errorText = await response.text(); // Obtener la respuesta en texto para depurar
        throw new Error(errorText);
      }
  
      const result = await response.json();
      console.log('Mascota agregada:', result);
      return result;
    } catch (error) {
      console.error('Error en la solicitud de agregar mascota:', error);
      throw error;
    }
  };
  