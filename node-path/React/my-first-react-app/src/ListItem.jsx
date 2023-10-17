export default function ListItem(props) {
  // eslint-disable-next-line react/prop-types
  return props.animal.startsWith('L') ? <li>{props.animal}</li> : null;
}
