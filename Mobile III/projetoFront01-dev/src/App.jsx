import style from "./App.module.css";

export function App() {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          src="https://cdn.pixabay.com/photo/2016/10/20/18/35/earth-1756274__340.jpg"
          alt="Cover"
        />
        <img
          className={style.avatar}
          src="https://github.com/LuxcaBR.png"
          alt="Avatar"
        />
        <p className={style.p1}>Lucas Eduardo Faleiro</p>
        <p className={style.p2}>Um cara que odeia programação </p>
        <div className={style.stack}>
          <span>#GAMES</span>
          <span>#HISTORY</span>
          <span>#MILITARISM</span>
          <span>#ROCK</span>
          <span>#METAL</span>
          <span>#SOCCER</span>
        </div>
      </div>
    </div>
  );
}
