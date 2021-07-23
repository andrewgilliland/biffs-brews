import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

const PaginationStyles = styled.div`
  font-family: var(--font-sans);
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  text-align: center;
  border: 2px solid var(--pale-yellow);
  margin: 2rem 0;
  border-radius: 5px;

  & > * {
    padding: 1rem;
    flex: 1;
    border-right: 2px solid var(--pale-yellow);
    text-decoration: none;

    &[aria-current],
    &.current {
      color: var(--red);
    }

    &[disabled] {
      pointer-events: none;
      color: var(--grey);
    }
  }

  @media (max-width: 800px) {
    .word {
      display: none;
    }

    font-size: 1.4rem;
  }
`;

export default function Pagination({
  pageSize,
  totalCount,
  currentPage,
  skip,
  base,
}) {
  // make some variables
  const totalPages = Math.ceil(totalCount / pageSize);
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasNextPage = nextPage <= totalPages;
  const hasPrevPage = prevPage >= 1;

  return (
    <PaginationStyles>
      <Link
        title="Prev Page"
        disabled={!hasPrevPage}
        to={`${base}/${prevPage}`}
      >
        &#8592; <span className="word"> Prev</span>
      </Link>
      {Array.from({ length: totalPages }).map((_, i) => (
        <Link
          key={`page ${i}`}
          className={currentPage === 1 && i === 0 ? "current" : ""}
          to={`${base}/${i > 0 ? i + 1 : ""}`}
        >
          {i + 1}
        </Link>
      ))}
      <Link
        title="Next Page"
        disabled={!hasNextPage}
        to={`${base}/${nextPage}`}
      >
        <span className="word">Next</span> &#8594;
      </Link>
    </PaginationStyles>
  );
}
