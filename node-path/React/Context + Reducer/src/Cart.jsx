import { useReducer } from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 999.99, category: 'Electronics' },
  { id: 2, name: 'Coffee Maker', price: 49.99, category: 'Kitchen Appliances' },
  { id: 3, name: 'Running Shoes', price: 79.99, category: 'Sports and Outdoors' },
  { id: 4, name: 'Bookshelf', price: 129.99, category: 'Furniture' },
  { id: 5, name: 'Smartphone', price: 599.99, category: 'Electronics' }
];

export default function Cart() {
  return (
    <h4>
      {products.map((e) => (
        <span style={{ padding: '10px', border: '1px dashed #eee' }} key={e.id}>
          {e.name}
        </span>
      ))}
    </h4>
  );
}
