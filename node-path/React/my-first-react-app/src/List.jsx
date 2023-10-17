import ListItem from './ListItem';

export default function List() {
  const animals = ['Lion', 'Cow', 'Snake', 'Lizard'];
  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((el) => (
          <ListItem key={el} animal={el} />
        ))}
      </ul>
    </div>
  );
}
