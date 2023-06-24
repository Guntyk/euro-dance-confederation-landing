import "./Team.css";

export default function Team() {
  return (
    <section className="team">
      <div className="container">
        <h3 className="sec-title">Our team</h3>
        <ul className="team-list">
          <li className="team-mark">
            <div className="photo"></div>
            <div className="info">
              <h5 className="name">Name Surname</h5>
              <span className="role">Job Title</span>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="socials">
              <a href="#" className="facebook">
                <Facebook />
              </a>
              <a href="#" className="instagram">
                <Instagram />
              </a>
            </div>
          </li>
          <li className="team-mark">
            <div className="photo"></div>
            <div className="info">
              <h5 className="name">Name Surname</h5>
              <span className="role">Job Title</span>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="socials">
              <a href="#" className="facebook">
                <Facebook />
              </a>
              <a href="#" className="instagram">
                <Instagram />
              </a>
            </div>
          </li>
          <li className="team-mark">
            <div className="photo"></div>
            <div className="info">
              <h5 className="name">Name Surname</h5>
              <span className="role">Job Title</span>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="socials">
              <a href="#" className="facebook">
                <Facebook />
              </a>
              <a href="#" className="instagram">
                <Instagram />
              </a>
            </div>
          </li>
          <li className="team-mark">
            <div className="photo"></div>
            <div className="info">
              <h5 className="name">Name Surname</h5>
              <span className="role">Job Title</span>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="socials">
              <a href="#" className="facebook">
                <Facebook />
              </a>
              <a href="#" className="instagram">
                <Instagram />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

function Facebook() {
  return (
    <svg
      className="facebook-icon"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26 10H23C21.6739 10 20.4021 10.5268 19.4645 11.4645C18.5268 12.4021 18 13.6739 18 15V18H15V22H18V30H22V22H25L26 18H22V15C22 14.7348 22.1054 14.4804 22.2929 14.2929C22.4804 14.1054 22.7348 14 23 14H26V10Z"
        stroke="#424895"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Instagram() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.122 10.06C23.056 10.01 22.717 10 20 10C17.283 10 16.944 10.013 15.878 10.06C14.812 10.11 14.088 10.277 13.45 10.525C12.7824 10.7757 12.1777 11.1692 11.678 11.678C11.1688 12.1773 10.7752 12.7822 10.525 13.45C10.277 14.088 10.11 14.812 10.06 15.878C10.01 16.944 10 17.283 10 20C10 22.717 10.013 23.056 10.06 24.122C10.11 25.187 10.277 25.913 10.525 26.55C10.7759 27.2175 11.1694 27.8222 11.678 28.322C12.1775 28.8309 12.7823 29.2245 13.45 29.475C14.088 29.722 14.813 29.89 15.878 29.94C16.944 29.99 17.283 30 20 30C22.717 30 23.056 29.987 24.122 29.94C25.187 29.89 25.913 29.722 26.55 29.475C27.2173 29.2238 27.822 28.8303 28.322 28.322C28.8311 27.8226 29.2247 27.2178 29.475 26.55C29.722 25.912 29.89 25.187 29.94 24.122C29.99 23.056 30 22.717 30 20C30 17.283 29.987 16.944 29.94 15.878C29.89 14.813 29.722 14.087 29.475 13.45C29.224 12.7826 28.8305 12.1779 28.322 11.678C27.766 11.123 27.21 10.779 26.55 10.525C25.912 10.277 25.187 10.11 24.122 10.06Z"
        stroke="#424895"
        strokeWidth="1.75"
      />
      <circle cx="20" cy="20" r="4.125" stroke="#424895" strokeWidth="1.75" />
      <circle cx="25.5" cy="14.5" r="1.5" fill="#424895" />
    </svg>
  );
}
