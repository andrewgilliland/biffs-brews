import React from 'react';
import LoadingGrid from '../components/LoadingGrid';
import SEO from '../components/SEO';
import Container from '../components/Container';
import { HomePageGrid } from '../styles/Grids';
import useLatestData from '../utils/useLatestData';
import { month } from '../utils/dates';
import ItemGrid from '../components/ItemGrid';

function CurrentlyTapping({ slicemasters }) {
  return (
    <div className="margin-top-5">
      <h2 className="center">
        <span className="mark">Brewmasters On</span>
      </h2>
      <p className="pale-yellow">Standing by, ready to fill you up!</p>
      {!slicemasters && <LoadingGrid count={4} />}
      {slicemasters && !slicemasters?.length && (
        <p>No one is working right now!</p>
      )}
      {slicemasters?.length && <ItemGrid items={slicemasters} />}
    </div>
  );
}

function NewBrews({ newBrews }) {
  return (
    <div className="margin-top-5">
      <h2 className="center">
        <span className="mark">New Brews</span>
      </h2>
      <p className="pale-yellow">{month}'s new brews!</p>
      {!newBrews && <LoadingGrid count={4} />}
      {newBrews && !newBrews?.length && <p>Nothin' in the Case</p>}
      {newBrews?.length && <ItemGrid items={newBrews} />}
    </div>
  );
}

export default function HomePage() {
  const { slicemaster, newBrews } = useLatestData();

  return (
    <>
      <SEO title="Home" />
      <Container>
        <div className="center">
          <h1 className="pale-yellow">The Best Brews Around!</h1>
          <p className="pale-yellow">Open 10am to 10pm Every Single Day</p>
          <HomePageGrid>
            <NewBrews newBrews={newBrews} />
            <CurrentlyTapping slicemasters={slicemaster} />
          </HomePageGrid>
        </div>
      </Container>
    </>
  );
}
