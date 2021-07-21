import React from "react";
import LoadingGrid from "../components/LoadingGrid";
import SEO from "../components/SEO";
import { HomePageGrid } from "../styles/Grids";
import useLatestData from "../utils/useLatestData";
import ItemGrid from "../components/ItemGrid";

function CurrentlySlicing({ slicemasters }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Slicemasters On</span>
      </h2>
      <p>Standing by, ready to slice you up!</p>
      {!slicemasters && <LoadingGrid count={4} />}
      {slicemasters && !slicemasters?.length && (
        <p>No one is working right now!</p>
      )}
      {slicemasters?.length && <ItemGrid items={slicemasters} />}
    </div>
  );
}

function HotSlices({ hotSlices }) {
  return (
    <div>
      <h2 className="center">
        <span className="mark tilt">Hot Slices</span>
      </h2>
      <p>Come on by, buy the slice!</p>
      {!hotSlices && <LoadingGrid count={4} />}
      {hotSlices && !hotSlices?.length && <p>Nothin' in the Case</p>}
      {hotSlices?.length && <ItemGrid items={hotSlices} />}
    </div>
  );
}

export default function HomePage() {
  const { slicemaster, hotSlices } = useLatestData();

  return (
    <>
      <SEO title="Home" />
      <div className="center">
        <h1>The Best Brews Around!</h1>
        <p>Open 10am to 10pm Every Single Day</p>
        <HomePageGrid>
          <CurrentlySlicing slicemasters={slicemaster} />
          <HotSlices hotSlices={hotSlices} />
        </HomePageGrid>
      </div>
    </>
  );
}
