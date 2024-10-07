import style from "./hero.module.scss";

export const Hero = () => {
  return (
    <>
      <div className={style.hero}>
        <div className="">
          <h1 className={style.text}>Learn to code by watching others</h1>
          <p className={style.tx}>
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.{" "}
          </p>
        </div>
        <div className="">
          <p className={style.link}>
            <span>Try it free 7 days </span>then $20/mo. thereafter
          </p>
          <div className={style.row}>
            <input className={style.input} type="text" placeholder="First Name"/>
            <input className={style.input} type="text" placeholder="Last Name"/>
            <input className={style.input} type="text" placeholder="Email Address"/>
            <input className={style.input} type="text" placeholder="Password"/>
            <button className={style.button}>CLAIM YOUR FREE TRIAL</button>
            <p className={style.pic}>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
          </div>
        </div>
      </div>
    </>
  );
};
