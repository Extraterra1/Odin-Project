import Title from './Title';
import { useContext } from 'react';
import { AppContext } from './App';

export default function Header() {
  const { title, age } = useContext(AppContext);

  return (
    <nav>
      <Title>
        {title || 'Welcome'}
        {age}
      </Title>
    </nav>
  );
}
