import styled from 'styled-components';

export const HomePageGrid = styled.div`
  /* display: grid;
  gap: 2rem;
  --columns: 2;
  grid-template-columns: repeat(var(--columns), minmax(auto, 1fr));

  @media (max-width: 800px) {
    --columns: 1;
  } */
`;

export const ItemsGrid = styled.div`
  margin-top: 3rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(4, 1fr);
`;

// Single Grid Item (for homepage)
export const ItemStyles = styled.div`
  text-align: center;
  position: relative;
  border-top: 2px solid var(--pale-yellow);
  border-radius: 2px;

  img {
    height: auto;
  }

  p {
    transform: translateY(-10px);
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    margin: 0;
    font-size: 2rem;
    font-size: clamp(12px, 5vw, 20px);
  }

  .mark {
    display: inline;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }

  @keyframes shine {
    from {
      background-position: 200%;
    }
    to {
      background-position: -40px;
    }
  }

  img.loading {
    --shine: white;
    --background: var(--grey);
    background-image: linear-gradient(
      90deg,
      var(--background) 0px,
      var(--shine) 40px,
      var(--background) 80px
    );
    background-size: 500px;
    animation: shine 1s infinite linear;
  }
`;
