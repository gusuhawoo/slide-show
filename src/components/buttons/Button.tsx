import React from 'react';
import style from './style.module.scss';
import returnButton from '../../assets/caret-left-solid.svg';
import nextButton from '../../assets/caret-right-solid.svg';

export function ReturnButton(props: { onClick: () => void }) {
  return (
    <button
      className={style['return-button']}
      type="button"
      onClick={props.onClick}
    >
      <img src={returnButton} alt="Return"></img>
    </button>
  );
}

export function NextButton(props: { onClick: () => void }) {
  return (
    <button
      className={style['next-button']}
      type="button"
      onClick={props.onClick}
    >
      <img src={nextButton} alt="Next"></img>
    </button>
  );
}
