import React from "react";
import "./Table.css";
import numeral from "numeral";

const Table = ({ listCountry }) => {
  return (
    <div className="table">
      <h2>Cases by Countries</h2>

      <div className="list">
        {listCountry.map(({ country, cases }) => (
          <p className="list-item">
            <span>{country}</span>
            <strong>{numeral(cases).format("0,0")}</strong>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Table;
