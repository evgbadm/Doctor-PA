import { builder } from '@builder.io/react';
import MyFirstComponent from './components/MyFirstComponent';

// Регистрируем компонент для Builder.io
builder.registerComponent(MyFirstComponent, {
  name: 'MyFirstComponent', // Имя, под которым компонент появится в редакторе
  inputs: [ // Свойства, которыми можно управлять из редактора
    { name: 'title', type: 'string', defaultValue: 'Привет из Builder!' }
  ]
});