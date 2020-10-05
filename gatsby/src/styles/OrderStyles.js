import styled from "styled-components";

const OrderStyles = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  fieldset {
    grid-column: span 2;
    max-height: 600px;
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
    border: 1px solid rgba(0, 0, 0, 0.1);
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
    background: var(--white);
  }
  .inner-menu::-webkit-scrollbar-thumb,
  .inner-order::-webkit-scrollbar-thumb {
    background-color: var(--red);
    border-radius: 6px;
    border: 3px solid var(--white);
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
