import { useState } from 'react';

export default function Person() {
  const [person, setPerson] = useState({ name: 'John', age: 100 });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleNameChange = (data) => {
    console.log(data);
  };
  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <label htmlFor="firstName">First Name</label>
      <input type="text" onChange={handleNameChange} />
      <label htmlFor="lastName">Last Name</label>
      <input type="text" onChange={handleNameChange} />
    </>
  );
}
