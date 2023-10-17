/* eslint-disable react/prop-types */

import ListItem from './ListItem';

export default function List(props) {
  if (!props.animals) return <div>Loading...</div>;
  if (props.animals.length === 0) return <div>There are no animals in the list!</div>;
  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {props.animals.map((el) => (
          <ListItem key={el} animal={el} />
        ))}
      </ul>
    </div>
  );
}
