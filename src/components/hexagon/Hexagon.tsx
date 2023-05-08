import style from './style.module.scss';

export type HexagonProps = {
  title: string;
  subtitle: string;
};

export default function Hexagon({ title, subtitle }: HexagonProps) {
  return (
    <>
      <div className={style['hexagon-container']}>
        <div className={style['hexagon']}>
          <div className={style['hexagon-line']}></div>
          <h1 className={style['presentation-title']}>{title}</h1>
          <h2 className={style['presentation-subtitle']}>{subtitle}</h2>
          <div className={style['hexagon-line']}></div>
        </div>
        <div className={style['hexagon']}></div>
        <div className={style['hexagon']}></div>
      </div>
    </>
  );
}
