import React, { useState } from 'react';
import Button from './Button';

const App = () => {
  const [message, setMessage] = useState('');
  const apiUrl = 'https://www.softix.site/API/posts';
  const credentials = {
    email: 'PRUEBADESARROLLADORFRONT',
    password: 'MTExMTE=Ss1*',
  };

  // Maneja la creación de un cliente
  const handleCreateClick = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        setMessage('Cliente creado con éxito');
      } else {
        setMessage('Error al crear el cliente');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Maneja la actualización de un cliente
  const handleUpdateClick = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT', // Utiliza el método PUT para actualizar un cliente
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        setMessage('Cliente actualizado con éxito');
      } else {
        setMessage('Error al actualizar el cliente');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Maneja la consulta de un cliente
  const handleConsultClick = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET', // Utiliza el método GET para consultar un cliente
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        // Realiza operaciones con los datos de respuesta según tus necesidades
        setMessage('Consulta de cliente exitosa');
      } else {
        setMessage('Error al consultar el cliente');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h1>Clientes</h1>
      <Button onClick={handleCreateClick} label="Crear cliente" />
      <Button onClick={handleUpdateClick} label="Actualizar cliente" />
      <Button onClick={handleConsultClick} label="Consultar cliente" />
      <div>{message}</div>
    </div>
  );
};

export default App;
