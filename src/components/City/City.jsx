import React from "react";
import { useParams } from "react-router-dom";
import s from "./City.module.css";

const apiKey = process.env.REACT_APP_API_KEY;

export default function Ciudad({ match }) {
  const { id } = useParams();

  const [city, setCity] = React.useState(undefined);

  React.useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${apiKey}&units=metric`
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
          setCity(ciudad);
        } else {
          setCity(null);
        }
      });
  }, [id]);

  return city === undefined ? (
    <h1>Cargando...</h1>
  ) : city === null ? (
    <h1>Ciudad no encontrada</h1>
  ) : (
    <div className={s.city}>
      <header className={s.header}>
        <h2 className={s.name}>{city.name}</h2>
      </header>
      <main className={s.main}>
        <div>Temperatura: {city.temp}</div>
        <div>Clima: {city.weather}</div>
        <div>Viento: {city.wind}</div>
        <div>Nubosidad: {city.clouds}</div>
      </main>
    </div>
  );
}
