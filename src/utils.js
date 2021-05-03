import React from "react";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";

export const editValue = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";

export const sortData = (data) => {
  const value = data;
  value.sort((a, b) => b.cases - a.cases);
  return value;
};

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    mult: 200,
  },
  recovered: {
    hex: "#7DD71D",
    mult: 300,
  },
  deaths: {
    hex: "#B50527",
    mult: 750,
  },
};

export const showData = (data, casesType) =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      radius={Math.sqrt(country[casesType]) * casesTypeColors[casesType].mult}
      pathOptions={{
        color: casesTypeColors[casesType].hex,
        fillColor: casesTypeColors[casesType].hex,
      }}
    >
      <Popup>
        <div>
          <div
            className="info-flag"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          />
          <div>
            <h1>{country.country}</h1>
          </div>
          <div>Cases: {numeral(country.cases).format("0,0")}</div>
          <div>Recovered: {numeral(country.recovered).format("0,0")}</div>
          <div>Deaths: {numeral(country.deaths).format("0,0")}</div>
        </div>
      </Popup>
    </Circle>
  ));
