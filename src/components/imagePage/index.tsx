import React from 'react';
import style from './style.module.scss';
import JsonData from '../../db.json';
import { BsFillHexagonFill } from 'react-icons/bs';

export default function ImagePage() {
  return (
    <>
      <div className={style['img-container']}>
        <img src={JsonData.image} alt="" className={style['img']} />
        <div className={style['img-text']}>
          <h3 className={style['img-text__title']}>
            <BsFillHexagonFill /> Image
          </h3>
          <span className={style['img-text__description']}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
            voluptatum sed natus quibusdam, minus culpa repellendus debitis. Eum
            deserunt, placeat, illo dolore laboriosam laborum doloribus
            officiis, et asperiores eveniet consequatur. Pariatur consequatur
            delectus perferendis alias repellendus optio hic necessitatibus sit
            distinctio libero. Ex soluta, architecto dolores corrupti quas error
            fugiat enim et repudiandae porro consequatur accusantium deleniti
            maiores autem quam, laboriosam sint saepe, quibusdam consequuntur
            suscipit nostrum quisquam rerum! Sunt perferendis natus, blanditiis
            doloribus voluptate pariatur eius maiores dolore accusantium.
          </span>
        </div>
      </div>
    </>
  );
}
