import { useState } from 'react';

export default function Person() {
  const [person, setPerson] = useState({ firstName: 'John', lastName: 'Smith', age: 100 });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleNameChange = (ev) => {
    if (ev.target.id === 'firstName') setPerson({ ...person, firstName: ev.target.value });
    if (ev.target.id === 'lastName') setPerson({ ...person, lastName: ev.target.value });
  };
  return (
    <>
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <div style={{ margin: '50px' }}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" onChange={handleNameChange} />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" onChange={handleNameChange} />
      </div>
    </>
  );
}
