import styled from 'styled-components';

const OrderStyles = styled.form`
  color: var(--pale-yellow);
  font-family: var(--font-sans);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  input {
    background-color: var(--pale-yellow);
    border: none;
    border-radius: var(--border-radius);
    width: 300px;
  }

  fieldset {
    border: 2px solid var(--pale-yellow);
    border-radius: var(--border-radius);
    grid-column: span 2;
    max-height: 675px;
    display: grid;
    gap: 1rem;
    align-content: start;

    &.order,
    &.menu {
      grid-column: span 1;
    }
  }

  .inner-menu,
  .inner-order {
    border: 2px solid var(--pale-yellow);
    border-radius: var(--border-radius);
    height: 580px;
    overflow: auto;
    display: grid;
    gap: 1rem;
    align-content: start;
  }

  .inner-menu::-webkit-scrollbar,
  .inner-order::-webkit-scrollbar {
    width: 12px;
  }

  .inner-menu::-webkit-scrollbar-track,
  .inner-order::-webkit-scrollbar-track {
    background: var(--pale-yellow);
  }
  .inner-menu::-webkit-scrollbar-thumb,
  .inner-order::-webkit-scrollbar-thumb {
    background-color: var(--tomato);
    border-radius: 6px;
    border: 2px solid var(--pale-yellow);
  }

  .mapleSyrup {
    display: none;
  }

  @media (max-width: 900px) {
    fieldset.menu,
    fieldset.order {
      grid-column: span 2;
    }
  }
`;

export default OrderStyles;
