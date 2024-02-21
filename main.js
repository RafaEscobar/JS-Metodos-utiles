import './style.css';
import { arrayWith } from './01-arrays/array-with';
import { arrayStructuredClone } from './01-arrays/array-structuredClone';
import { toMethods } from './01-arrays/to-methods';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hola!!</h1>
  </div>
`;

// arrayStructuredClone();
// arrayWith();
toMethods();