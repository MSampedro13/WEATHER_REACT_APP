import React, { useState } from "react";

import s from "./App.module.css";
import Nav from "../components/Nav/Nav.jsx";
import Cards from "../components/Cards/Cards.jsx";
import { Route, Routes } from "react-router-dom";
import City from "../components/City/City.jsx";

const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    )
      .then((r) => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          const exist = cities.find((c) => c.id === ciudad.id);
          if (!exist) {
            setCities((oldCities) => {
              return [...oldCities, ciudad];
            });
          }
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  function onFilter(ciudadId) {
    let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }
  return (
    <div className={s.app}>
      <header className={s.header}>
        <Routes>
          <Route path="/*" element={<Nav onSearch={onSearch} />} />
        </Routes>
      </header>
      <main className={s.main}>
        <Routes>
          <Route
            path="/"
            element={<Cards cities={cities} onClose={onClose} />}
          />
          <Route path="/ciudad/:id" element={<City />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
