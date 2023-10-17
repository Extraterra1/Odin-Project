/* eslint-disable react/prop-types */

import ListItem from './ListItem';

export default function List(props) {
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
