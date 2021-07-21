import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
  background-color: rgba(0, 0, 0, 0.35);
  color: var(--pale-yellow);
  padding: 2rem;
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p className="center">&copy; Biff's Brews {new Date().getFullYear()}</p>
    </FooterStyles>
  );
}
