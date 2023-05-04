import React from 'react';
import style from './style.module.scss';
import returnButton from '../../assets/caret-left-solid.svg';
import nextButton from '../../assets/caret-right-solid.svg';

export function ReturnButton() {
  return (
    <button className={style['return-button']}>
      <img src={returnButton} alt="Return"></img>
    </button>
  );
}

export function NextButton() {
  return (
    <button className={style['next-button']}>
      <img src={nextButton} alt="Next"></img>
    </button>
  );
}
