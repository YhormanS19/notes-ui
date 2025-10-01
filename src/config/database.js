import { generateId } from '../utils/generadores-codigos.js';
export const usuarios = [
  {
    nombre: 'Ana Gómez',
    correo: 'ana.gomez@example.com',
    id: generateId(),
    contrasena: 'password123',
    rol: 'admin'
  },
  {
    nombre: 'Carlos Ruiz',
    correo: 'carlos.ruiz@example.com',
    id: generateId(),
    contrasena: 'pass456',
    rol: 'usuario'
  },
  {
    nombre: 'María Fernández',
    correo: 'maria.fernandez@example.com',
    id: generateId(),
    contrasena: 'securepwd789',
    rol: 'usuario'
  },
  {
    nombre: 'Luis Pérez',
    correo: 'luis.perez@example.com',
    id: generateId(),
    contrasena: 'myp@ssw0rd',
    rol: 'admin'
  }
];

