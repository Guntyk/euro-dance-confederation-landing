import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <h3 className="sec-title">Testimonials</h3>
        <span className="sec-subtitle">See what they say about us</span>
        <ul className="testimonials-list">
          <li className="testimonials-mark">
            <div className="video"></div>
            <h5 className="name">Name Surname</h5>
            <span className="role">Coach Highest Category</span>
          </li>
          <li className="testimonials-mark">
            <div className="video"></div>
            <h5 className="name">Name Surname</h5>
            <span className="role">Judge National Category</span>
          </li>
          <li className="testimonials-mark">
            <div className="video"></div>
            <h5 className="name">Name Surname</h5>
            <span className="role">Professional Dancer</span>
          </li>
          <li className="testimonials-mark">
            <div className="video"></div>
            <h5 className="name">Name Surname</h5>
            <span className="role">Co-founder</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
