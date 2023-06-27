import Logo from "../../materials/img/Logo";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <a href="#" className="logo">
            <Logo />
            European Confederation of Dance Sports
          </a>
          <a href="#form" className="join-link">
            Join us
          </a>
        </div>
      </div>
    </header>
  );
}
