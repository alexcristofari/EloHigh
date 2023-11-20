// Formulario.js
import React, { useState } from 'react';

const Formulario = () => {
  const [email, setEmail] = useState('');
  const [nomeDaConta, setNomeDaConta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para lidar com os dados do formulário, como enviar para um servidor ou fazer algo com eles.
    console.log('Email:', email);
    console.log('Nome da Conta:', nomeDaConta);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Nome da Conta:
        <input
          type="text"
          value={nomeDaConta}
          onChange={(e) => setNomeDaConta(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;
