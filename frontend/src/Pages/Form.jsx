import React from 'react';
import DynamicForm from './DynamicForm';

const campos = [
    { label: 'Nombre', name: 'nombre', type: 'text' },
    { label: 'Correo Electrónico', name: 'email', type: 'email' },
    { label: 'Edad', name: 'edad', type: 'number' },
    { label: 'Comentario', name: 'comentario', type: 'textarea' } , ]

export const Form = () => {
    const handleSubmit = (formData) => {
        console.log('Form Data:', formData);
    }

   return (
    <div>
      <h1>Formulario Dinámico</h1>
      <DynamicForm fields={campos} onSubmit={handleSubmit} />
    </div>
  );
}
