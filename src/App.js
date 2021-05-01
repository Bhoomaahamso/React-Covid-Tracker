import { useState, useEffect } from "react";
import { FormControl, MenuItem, Select } from "@material-ui/core";
import InfoBox from "./InfoBox";
import "./App.css";
import Table from "./Table";
import Map from "./Map";
import "leaflet/dist/leaflet.css";
import { sortData, editValue } from "./utils";
import LineGraph from "./LineGraph";

function App() {
  const [countries, setCountries] = useState([]);
  const [mapcountries, setMapcountries] = useState([]);
  const [allCountry, setAllCountry] = useState({});
  const [listCountry, setListCountry] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [casesType, setCasesType] = useState("cases");
  const [mapcenter, setMapcenter] = useState({ lat: 34.8, lng: -40.5 });
  const [mapzoom, setMapzoom] = useState(3);

  useEffect(() => {
    const url = "https://disease.sh/v3/covid-19/all";

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllCountry(data);
      });
  }, []);

  useEffect(() => {
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((res) => res.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
            cases: country.cases,
          }));

          const sortedData = sortData(data);

          setMapcountries(data);
          setCountries(countries);
          setListCountry(sortedData);
        });
    };
    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(e.target.value);
    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllCountry(data);
        countryCode === "worldwide"
          ? setMapcenter([34.8, -40.5])
          : setMapcenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapzoom(4);
      });
  };

  return (
    <div className="app">
      <div className="app_left">
        <div className="app_header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app_dropDown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="app_stats">
          <InfoBox
            click={(e) => setCasesType("cases")}
            active={casesType === "cases"}
            isRed
            title="Covid Cases"
            cases={editValue(allCountry.todayCases)}
            total={editValue(allCountry.cases)}
          />
          <InfoBox
            click={(e) => setCasesType("recovered")}
            active={casesType === "recovered"}
            title="Recovered"
            cases={editValue(allCountry.todayRecovered)}
            total={editValue(allCountry.recovered)}
          />
          <InfoBox
            click={(e) => setCasesType("deaths")}
            active={casesType === "deaths"}
            isRed
            title="Deaths"
            cases={editValue(allCountry.todayDeaths)}
            total={editValue(allCountry.deaths)}
          />
        </div>
        <Map
          center={mapcenter}
          zoom={mapzoom}
          casesType={casesType}
          mapcountries={mapcountries}
        />
      </div>
      <div className="app_right">
        <Table listCountry={listCountry} />
        <LineGraph casesType={casesType} />
      </div>
    </div>
  );
}

export default App;
