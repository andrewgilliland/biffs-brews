import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import SEO from '../components/SEO';
import Container from '../components/Container';

const BrewStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 3rem;

  ul {
    color: var(--pale-yellow);
  }
`;

export default function SinglePizzaPage({ data: { pizza } }) {
  return (
    <>
      <SEO title={pizza.name} image={pizza.image?.asset?.fluid?.src} />
      <Container>
        <BrewStyles>
          <Img fluid={pizza.image.asset.fluid} />
          <div>
            <h2 className="mark">{pizza.name}</h2>
            <ul>
              {pizza.toppings.map((topping) => (
                <li key={topping.id}> {topping.name}</li>
              ))}
            </ul>
          </div>
        </BrewStyles>
      </Container>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      name
      id
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
