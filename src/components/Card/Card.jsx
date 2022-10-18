import React from "react";
import Temp from "../Temp/Temp";
import { Link } from "react-router-dom";
import {AiFillDelete} from 'react-icons/ai';
import s from "./Card.module.css";

export default function Card({ min, max, name, img, onClose, id }) {
  return (
    <div className={s.card}>
      <Link to={`/ciudad/${id}`}>
        <h5 className={s.name}>{name}</h5>
      </Link>
      <button onClick={onClose} className={s.cardBtn}>
      <AiFillDelete/>
      </button>
      <section>
        <Temp className={s.temp} label="Min" value={min} />
        <Temp className={s.temp} label="Max" value={max} />
        <img
          src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
          alt=""
        />
      </section>
    </div>
  );
}
