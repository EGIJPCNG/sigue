import React, { useState } from 'react';
import { login } from '../services/api.js';

function ModalLogin({ open, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const result = await login(email, password);
      // Aquí puedes manejar el resultado (guardar token, redirigir, etc.)
      if (result._id) {
        onClose();
      } else {
        setError(result.message || 'Error al iniciar sesión');
      }
    } catch {
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <button style={styles.close} onClick={onClose}>×</button>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
            style={styles.input}
          />
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        {error && <div style={styles.error}>{error}</div>}
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  modal: {
    background: '#fff',
    padding: '2rem',
    borderRadius: '1rem',
    minWidth: '320px',
    position: 'relative',
    boxShadow: '0 4px 32px rgba(0,0,0,0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    top: 10,
    right: 15,
    background: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  input: {
    margin: '0.5rem 0',
    padding: '0.5rem',
    width: '100%',
    fontSize: '1rem',
    borderRadius: '0.3rem',
    border: '1px solid #ccc',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 2rem',
    fontSize: '1rem',
    borderRadius: '0.3rem',
    border: 'none',
    background: '#5a2cff',
    color: '#fff',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    marginTop: '1rem',
  }
};

export default ModalLogin;