// src/api/api.js

const API_URL = 'http://192.168.100.113:5000/api'; // Asegúrate de que esta URL sea correcta y accesible

export const login = async (email, password) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Error: ${error}`);
    }

    const data = await response.json(); // Procesa la respuesta como JSON
    return data; // Devuelve los datos de la respuesta

  } catch (error) {
    console.error('Error en la solicitud de login:', error);
    throw error; // Re-lanza el error para que pueda ser manejado por el componente que llama
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

    // Verifica si la respuesta es exitosa
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Error: ${error}`);
    }

    const data = await response.json(); // Procesa la respuesta como JSON
    return data; // Devuelve los datos de la respuesta

  } catch (error) {
    console.error('Error en la solicitud de registro:', error);
    throw error; // Re-lanza el error para que pueda ser manejado por el componente que llama
  }
};
