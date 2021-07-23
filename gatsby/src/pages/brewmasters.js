import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import Container from '../components/Container';
import SEO from '../components/SEO';

const BrewmasterGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const BrewmasterStyles = styled.div`
  a {
    text-decoration: none;
  }

  .gatsby-image-wrapper {
    height: 350px;
  }

  h2 {
    color: var(--stain-train-brown);
    text-align: center;
    font-size: 3rem;
    margin-bottom: -2rem;
    position: relative;
    z-index: 2;
  }

  .description {
    background: var(--yellow);
    border-radius: var(--border-radius);
    padding: 1rem;
    margin: 2rem;
    margin-top: -6rem;
    position: relative;
    text-align: center;
    z-index: 2;
  }
`;

export default function BrewmastersPage({ data, pageContext }) {
  const slicemasters = data.slicemasters.nodes;

  return (
    <>
      <SEO title={`Brewmasters - Page ${pageContext.currentPage || 1}`} />
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.slicemasters.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/slicemasters"
      />
      <Container>
        <BrewmasterGrid>
          {slicemasters.map((person) => (
            <BrewmasterStyles key={person.id}>
              <Link to={`/slicemaster/${person.slug.current}`}>
                <h2>
                  <span className="mark">{person.name}</span>
                </h2>
              </Link>
              <Img fluid={person.image.asset.fluid} />
              <p className="description">{person.description}</p>
            </BrewmasterStyles>
          ))}
        </BrewmasterGrid>
      </Container>
    </>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 2) {
    slicemasters: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 410) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
