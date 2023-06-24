import map from "../../materials/img/map.webp";
import "./Map.css";

export default function Map() {
  return (
    <section className="map">
      <div className="container">
        <h3 className="sec-title">Game all the way</h3>
        <span className="sec-subtitle">
          Scheme of career growth according to out standards
        </span>
      </div>
      <img src={map} alt="map" className="map-img" />
    </section>
  );
}
