import React from 'react';
import styled from 'styled-components';

const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  border: 2px solid var(--pale-yellow);
  color: var(--pale-yellow);
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  margin: 0 auto;
  padding: 1rem;
  transition: all 0.2s ease;
  width: 475px;

  .flex-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .est {
    font-size: 1.5em;
    align-self: center;
  }

  .biffs {
    font-size: 8rem;
  }

  &:hover {
    text-shadow: 3px 3px 0px var(--tomato);
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <h1 className="flex-center">
        <div className="est">EST 1985</div>
        <div className="biffs">Biff's Brews</div>
      </h1>
    </LogoStyles>
  );
}
