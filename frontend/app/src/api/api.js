// src/api/api.js

const API_URL = 'http://192.168.100.113:5000/api'; 

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    return response;
  } catch (error) {
    console.error('Error en la solicitud de login:', error);
    throw error;
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

// Nueva función para agregar mascota
export const addPet = async (token, nombre, edad, raza) => {
  try {
    const response = await fetch(`${API_URL}/addPet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Incluye el token en la cabecera
      },
      body: JSON.stringify({ nombre, edad, raza }),
    });

    if (!response.ok) {
      throw new Error('Error al agregar mascota');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error en la solicitud de agregar mascota:', error);
    throw error;
  }
};
