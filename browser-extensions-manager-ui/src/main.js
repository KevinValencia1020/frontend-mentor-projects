import './style.css'
import Header from './components/header.js';
import Extensions from './components/Extensions.js';

const template = `
  ${Header()}
  ${Extensions()}
`;

const app = document.getElementById('app');
app.innerHTML = template;

console.log(app);