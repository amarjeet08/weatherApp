import React, { useState, useEffect } from "react";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=6c6d8aed5dc84253b517af44de01521c&units=metric`;
      const response = await fetch(url);
      const resJson = await response.json();

      if (response.status === 200) {
        // Data is available
        setCity(resJson.main);
      } else {
        // Handle the error, e.g., set the city state to null
        setCity(null);
      }
    };

    fetchAPI();
  }, [search]);

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          placeholder="Search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
      </div>

      {!city ? (
        <p>No Data Found</p>
      ) : (
        <div>
          <h1>{search}</h1>
          <h1>{city.temp} Cel</h1>
          <h3>
            Min: {city.temp_min} Cel| Max : {city.temp_max} Cel
          </h3>
        </div>
      )}
    </>
  );
};

export default Weather;
