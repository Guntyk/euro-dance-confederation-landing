import "./Principles.css";

export default function Principles() {
  return (
    <section className="section principles">
      <div className="container">
        <h3 className="sec-title">Our principles</h3>
        <ul className="principles-list">
          <li className="principles-mark">
            <div className="decor-wrapper">
              <span className="decor big pink"></span>
            </div>
            <h5 className="title">Sport</h5>
            <p className="description">
              Open Tournaments but Closed Championships.
              <br />
              National teams, ratings, titles.
            </p>
            <p className="ending">The laws of sports are above all!</p>
          </li>
          <li className="principles-mark">
            <div className="decor-wrapper">
              <span className="decor small blue"></span>
            </div>
            <h5 className="title">Exclusivity</h5>
            <p className="description">
              One organization per country. Certification of clubs, coaches,
              judges.
            </p>
            <p className="ending">
              Membership in the ECDS guarantees the quality of work.
            </p>
          </li>
          <li className="principles-mark">
            <div className="decor-wrapper">
              <span className="decor small lavender"></span>
            </div>
            <h5 className="title">Standardization</h5>
            <p className="description">
              Single database, rules, requirements for tournaments, judges,
              dancers of all levels.
            </p>
            <p className="ending">
              Dance Europe is understandable and accessible.
            </p>
          </li>
          <li className="principles-mark">
            <div className="decor-wrapper">
              <span className="decor medium green"></span>
            </div>
            <h5 className="title">Win-win strategy</h5>
            <p className="description">
              Comfort and respect. Long-term cooperation. Positive outcome for
              all parties.
            </p>
            <p className="ending">Everyone wins with us.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
