import React from "react";

import "./Airport.css";

function Airport(props) {
  const { data } = props;
  console.log(data);

  return (
    <div className="airport-info">
      <h2>
        {data.name} ({data.icao})
      </h2>
      <p>
        {data.city}, {data.state}
      </p>
      <span>Elevation: {parseInt(data.elevation * 3.28084)}ft</span>
      <div className="airport-runways">
        {data.runways.map(rwy => {
          return (
            <div key={rwy.ident1}>
              <span>
                RWY {rwy.ident1}-{rwy.ident2}:{" "}
              </span>
              <span>
                {rwy.length}'x{rwy.width}'
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Airport;
