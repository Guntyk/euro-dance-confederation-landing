import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <h3 className="sec-title">Already joined</h3>
        <ul className="stats-list">
          <li className="stats-mark">
            <h4 className="number">10 000+</h4>
            <span className="description">dancers</span>
          </li>
          <li className="stats-mark">
            <h4 className="number">400+</h4>
            <span className="description">coaches</span>
          </li>
          <li className="stats-mark">
            <h4 className="number">30</h4>
            <span className="description">countries</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
