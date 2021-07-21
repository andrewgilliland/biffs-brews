import React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  --borderSize: 1em;
  display: flex;

  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: var(--dark-brown);
  }

  .est {
    font-size: 1.5em;
    align-self: center;
  }

  .biffs {
    font-size: 8rem;
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <span className="est">EST 1985</span>
        <h1 className="biffs">Biff's Brews</h1>
      </div>
    </LogoStyles>
  );
}
