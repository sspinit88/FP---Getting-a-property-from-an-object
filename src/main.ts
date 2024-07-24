import { getField } from './get-field.ts';

const markers = [
  { name: 'UY', lat: -34.9, lon: -56.2 },
  { name: 'AR', lat: -34.6, lon: -58.4 },
  { name: 'BR', lat: -15.8, lon: -47.9 },
  { name: 'BO', lat: -16.5, lon: -68.1 },
];

const names = markers.map(getField('name'));
const lons = markers.map(getField('lon'));

console.log('Names:', names);
console.log('Lons:', lons);
