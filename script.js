import Food from './Food.js';

const eggs = new Food(
	'Eggs',
  '$1',
);

console.log('Item:', eggs.name);
console.log('Price:', eggs.price);
