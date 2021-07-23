import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';
import Container from './Container';

const NavStyles = styled.nav`
  background-color: var(--dark-brown);
  padding: 0.5rem 0;

  ul {
    border-bottom: 2px solid var(--pale-yellow);
    border-top: 2px solid var(--pale-yellow);
    margin-top: 2rem;
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  }

  li {
    padding: 0 2rem;
  }

  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;
    transition: all 0.3s ease;

    &:hover {
      text-shadow: 2px 2px 0px var(--tomato);
    }

    @media (max-width: 800px) {
      font-size: 2rem;
    }

    // &[aria-current="page"] {
    //   color: var(--red);
    // }
  }

  @media (max-width: 600px) {
    --columns: 4;
    margin-bottom: 2rem;
    border-bottom: 2px solid var(--grey);
    padding-bottom: 2rem;

    ul {
      grid-template-rows: auto auto;
      grid-template-columns: repeat(var(--columns), 1fr);
      justify-items: center;
    }

    .logo-item {
      order: 0;
      grid-column: 1 / -1;
    }

    .logo {
      transform: none;
    }
  }

  @media (max-width: 500px) {
    --columns: 2;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <Container>
        <Link to="/">
          <Logo />
        </Link>
        <ul>
          <li>
            <Link to="/">On Tap</Link>
          </li>
          <li>
            <Link to="/pizzas">Brew Menu</Link>
          </li>
          {/* <li className="logo-item">
          <Link to="/">
          <Logo />
          </Link>
        </li> */}
          <li>
            <Link to="/slicemasters">Brewmasters</Link>
          </li>
          <li>
            <Link to="/order">Order Growlers!</Link>
          </li>
        </ul>
      </Container>
    </NavStyles>
  );
}
