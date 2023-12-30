import styled from 'styled-components';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const HeaderNav = styled.nav`
  background-color: #3e3e3e;
  padding-top: 0.5rem;
  display: flex;
  justify-content: space-between;

  & > span.title {
    display: grid;
    place-items: center;
    margin-left: 2rem;
    font-size: 2rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease-in;

    &:hover {
      color: #eee;
      transform: scale(1.04);
    }
  }

  @media screen and (max-width: 700px) {
    padding: 2rem;
    & > span.title {
      font-size: 3rem;
    }
  }
`;

const SideWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  & > span {
    font-size: 1.7rem;
    font-weight: 700;
    cursor: pointer;
  }

  & > *:hover {
    color: white;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  gap: 3rem;
  margin-right: 5rem;
  align-items: center;

  & span.cart {
    position: relative;
    padding: 1rem;
    cursor: pointer;
    & > svg {
      font-size: 4rem;
      transition: all 0.3s;
    }
  }

  @media screen and (max-width: 700px) {
    margin-right: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderNav>
      <span className="title">
        <Link to="/">Auth Test</Link>
      </span>
      <SideWrapper>
        <span>
          <Link to="/secure">Secure</Link>
        </span>
        <SocialsWrapper>
          <span className="cart">
            <Link to="/login">Log In</Link>
          </span>
        </SocialsWrapper>
      </SideWrapper>
    </HeaderNav>
  );
};

export default Header;
