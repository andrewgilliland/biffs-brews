import { useEffect, useState } from "react";

const gql = String.raw;
const deets = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

export default function useLatestData() {
  // hot slices
  const [newBrews, setNewBrews] = useState();
  // slicemasters
  const [slicemaster, setSlicemasters] = useState();
  // Use a side effect to fetch the data from the graphql endpoint
  useEffect(function () {
    // when the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                ${deets}
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // TODO check for errors
        // set the data to state
        setNewBrews(res.data.StoreSettings.hotSlices);
        setSlicemasters(res.data.StoreSettings.slicemaster);
      })
      .catch((err) => {
        console.log("Shooot");
        console.log(err);
      });
  }, []);
  return {
    newBrews,
    slicemaster,
  };
}
