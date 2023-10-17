export default function List() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];
  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
}
