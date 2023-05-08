import style from './style.module.scss';

export default function Contents() {
  return (
    <>
      <div className={style['hexagon-container']}>
        <div className={style['contents-hexagon']}>
          <ul className={style['contents-hexagon__lists']}>
            <li className={style['contents-hexagon__list']}>
              CONTENTS
              <br />
              <span>Contents subtitle</span>
            </li>
            <li className={style['contents-hexagon__list']}>
              CONTENTS
              <br />
              <span>Contents subtitle</span>
            </li>
            <li className={style['contents-hexagon__list']}>
              CONTENTS
              <br />
              <span>Contents subtitle</span>
            </li>
            <li className={style['contents-hexagon__list']}>
              CONTENTS
              <br />
              <span>Contents subtitle</span>
            </li>
          </ul>
        </div>
        <span className={style['contents-hexagon__contents']}>
          C<span>ONTENTS</span>
        </span>
      </div>
    </>
  );
}
