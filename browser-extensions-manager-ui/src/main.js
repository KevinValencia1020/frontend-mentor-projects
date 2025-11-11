import './style.css'
import Header from './components/header.js';

const template = `
  ${Header()}
`;

const app = document.getElementById('app');
app.innerHTML = template;

console.log(app);