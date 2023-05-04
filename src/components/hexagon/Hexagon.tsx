import React from 'react';
import style from './style.module.scss';
import { NextButton } from '../buttons/Button';

export default function Hexagon() {
  return (
    <section>
      <div className={style['hexagon-container']}>
        <div className={style['hexagon']}>
          <div className={style['hexagon-line']}></div>
          <h1 className={style['presentation-title']}>PRESENTATION</h1>
          <h2 className={style['presentation-subtitle']}>
            Presentation sub title
          </h2>
          <div className={style['hexagon-line']}></div>
        </div>
        <div className={style['hexagon']}></div>
        <div className={style['hexagon']}></div>
      </div>
      <NextButton></NextButton>
    </section>
  );
}
