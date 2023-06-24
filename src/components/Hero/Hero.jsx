import Button from "../common/Button/Button";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="title">
          Unified Standarts
          <br />
          for a United Europe
        </h1>
        <h2 className="subtitle">
          Community
          <br />
          of dancers & coaches
        </h2>
        <Button className="primary" />
      </div>
    </section>
  );
}
