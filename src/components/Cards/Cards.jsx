import React from 'react';
import s from './Cards.module.css'

import Card from '../Card/Card';

export default function Cards({cities, onClose}) {
  return (
    <div className={s.cards}>
      {cities.map(c => <Card
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose={() => onClose(c.id)}
          id={c.id}
        /> )}
    </div>
  );
}
