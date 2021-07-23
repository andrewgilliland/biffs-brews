import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';
import Container from '../components/Container';

const BrewmasterStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;

  p {
    color: var(--pale-yellow);
  }
`;

export default function SlicemasterPage({ data: { person } }) {
  return (
    <>
      <SEO title={person.name} image={person.image?.asset?.fluid?.src} />
      <Container>
        <BrewmasterStyles>
          <Img fluid={person.image.asset.fluid} />
          <div className="person-content">
            <h2>
              <span className="mark">{person.name}</span>
            </h2>
            <p>{person.description}</p>
          </div>
        </BrewmasterStyles>
      </Container>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    person: sanityPerson(slug: { current: { eq: $slug } }) {
      name
      id
      description
      image {
        asset {
          fluid(maxWidth: 1000, maxHeight: 750) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
