import React from 'react';
import styled from 'styled-components';

const ContainerStyles = styled.div`
  margin: 0 auto;
  max-width: var(--container-width);
`;

export default function Container({ children }) {
  return <ContainerStyles>{children}</ContainerStyles>;
}
