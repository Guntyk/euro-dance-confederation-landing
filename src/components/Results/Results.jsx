import Button from "../common/Button/Button";
import "./Results.css";

export default function Results() {
  return (
    <section className="section results">
      <div className="container">
        <h3 className="sec-title results-title">Results you get</h3>
        <ul className="results-list">
          <li className="results-mark">
            <Career />
            <h4 className="title">Career system</h4>
            <p className="description">
              Automation of transitions: Beginner dancer — Champion — Coach —
              Judge — Club manager — Tournament organizer.
              <br />
              <span className="ending">All roles in the single system!</span>
            </p>
          </li>
          <li className="results-mark">
            <Digital />
            <h4 className="title">Digitalization</h4>
            <p className="description">
              Mobile app. Video broadcasts of events.
              <br />
              Automation of payments, e-books of each user.
              <br />
              <span className="ending">
                The whole dance world on your phone.
              </span>
            </p>
          </li>
          <li className="results-mark">
            <Community />
            <h4 className="title">Community</h4>
            <p className="description">
              Own social network, message board, chat. Community of
              professionals, dancers and their parents.
              <br />
              <span className="ending">
                From each according to his ability, to each according to his
                needs.
              </span>
            </p>
          </li>
        </ul>
        <Button className="primary" />
      </div>
    </section>
  );
}

function Career() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.2991 6.5C25.2991 5.67157 25.9706 5 26.7991 5H30.5491C31.3775 5 32.0491 5.67157 32.0491 6.5V17.0764H52.8991V6.50011C52.8991 5.67168 53.5707 5.00011 54.3991 5.00011H58.1491C58.9775 5.00011 59.6491 5.67168 59.6491 6.50011V15.4119C59.6491 15.688 59.4252 15.9119 59.1491 15.9119C58.8729 15.9119 58.6491 15.688 58.6491 15.4119V6.50011C58.6491 6.22396 58.4252 6.00011 58.1491 6.00011H54.3991C54.1229 6.00011 53.8991 6.22396 53.8991 6.50011V17.0764H53.9002V17.5764V23.3264V23.8264H53.8991V36.6254H53.9002V37.1254V42.8754V43.3754H53.8991V56.1759H53.9002V56.6759V62.4259V62.9259H53.8991V73.4999C53.8991 73.776 54.1229 73.9999 54.3991 73.9999H58.1491C58.4252 73.9999 58.6491 73.776 58.6491 73.4999V20.9638C58.6491 20.6876 58.8729 20.4638 59.1491 20.4638C59.4252 20.4638 59.6491 20.6876 59.6491 20.9638V73.4999C59.6491 74.3283 58.9775 74.9999 58.1491 74.9999H54.3991C53.5707 74.9999 52.8991 74.3283 52.8991 73.4999V62.9259H32.0491V73.4998C32.0491 74.3282 31.3775 74.9998 30.5491 74.9998H26.8C25.971 74.9998 25.2992 74.3274 25.3 73.4984L25.3077 64.9248C25.3079 64.6486 25.532 64.425 25.8081 64.4252C26.0843 64.4255 26.3079 64.6495 26.3077 64.9257L26.3 73.4993C26.2997 73.7757 26.5237 73.9998 26.8 73.9998H30.5491C30.8252 73.9998 31.0491 73.7759 31.0491 73.4998V6.5C31.0491 6.22386 30.8252 6 30.5491 6H26.7991C26.5229 6 26.2991 6.22386 26.2991 6.5V59.3414C26.2991 59.6176 26.0752 59.8414 25.7991 59.8414C25.5229 59.8414 25.2991 59.6176 25.2991 59.3414V6.5ZM32.0491 56.1759H52.8991V43.3754H32.0491V56.1759ZM52.8991 57.1759H32.0503V61.9259H52.8991V57.1759ZM52.8991 23.8264V36.6254H32.0491V23.8264H52.8991ZM52.8991 42.3754V37.6254H32.0503V42.3754H52.8991ZM52.8991 18.0764V22.8264H32.0503V18.0764H52.8991Z"
        fill="white"
      />
      <path
        d="M31.1474 35.0712C31.1474 35.0712 28.2249 35.0712 26.5885 35.0712C24.6493 35.0712 21.1178 35.0712 21.1178 35.0712C21.1178 35.0712 18.9992 35.0712 17.4707 35.0712C14.4493 35.0712 12 32.6351 12 29.63C12 26.625 14.4493 24.1889 17.4707 24.1889C17.5315 24.1889 17.5921 24.1899 17.6525 24.1919C18.4961 20.0511 22.1763 16.9341 26.5885 16.9341C30.3281 16.9341 33.5419 19.1732 34.9485 22.377C38.4023 22.4583 41.177 25.2685 41.177 28.7232C41.177 32.2291 38.3195 35.0712 34.7946 35.0712C33.4125 35.0712 31.1474 35.0712 31.1474 35.0712Z"
        fill="#14133E"
        stroke="white"
        strokeLinejoin="round"
      />
      <path
        d="M59.051 65.036C59.051 65.036 55.6496 65.036 53.9582 65.036C52.4188 65.036 49.8839 65.036 49.8839 65.036C49.8839 65.036 48.0151 65.036 46.8282 65.036C44.578 65.036 42.7539 63.2203 42.7539 60.9805C42.7539 58.7408 44.578 56.925 46.8282 56.925C46.8523 56.925 46.8763 56.9253 46.9003 56.9257C47.3943 53.486 50.366 50.8418 53.9582 50.8418C56.901 50.8418 59.4275 52.6165 60.5163 55.1494C61.0167 54.9858 61.5513 54.8973 62.1067 54.8973C64.9194 54.8973 67.1995 57.1669 67.1995 59.9667C67.1995 62.7664 64.9194 65.036 62.1067 65.036C60.6594 65.036 59.051 65.036 59.051 65.036Z"
        fill="#2C2278"
        stroke="white"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Digital() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.2151 21.7463H48.1652C49.2697 21.7463 50.1652 20.8509 50.1652 19.7463V16.6577C50.1652 15.5531 51.0606 14.6577 52.1652 14.6577H59.0506"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M42.2151 30.6073H55.3701C56.4746 30.6073 57.3701 29.7119 57.3701 28.6073V26.4048C57.3701 25.3002 58.2655 24.4048 59.3701 24.4048H69.6835"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M49.3042 30.6084V33.9249C49.3042 35.0294 50.1996 35.9249 51.3042 35.9249H65.2536"
        stroke="white"
        strokeLinecap="round"
      />
      <path d="M42.2151 44.7852H56.3923" stroke="white" strokeLinecap="round" />
      <path
        d="M42.2151 59.849H54.6721C55.7767 59.849 56.6721 58.9536 56.6721 57.849V55.6465C56.6721 54.5419 57.5676 53.6465 58.6721 53.6465H69.6835"
        stroke="white"
        strokeLinecap="round"
      />
      <path
        d="M49.3042 59.8481V64.0507C49.3042 65.1553 50.1996 66.0507 51.3042 66.0507H61.7093"
        stroke="white"
        strokeLinecap="round"
      />
      <rect x="5" y="17" width="37" height="48" rx="2" stroke="white" />
      <path
        d="M15 17C15 22.5228 10.5228 27 5 27"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M5 55C10.5228 55 15 59.4772 15 65"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M16 34H24"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 41L33 41"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 49L29 49"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M32 34H31"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="61.7088"
        cy="14.6582"
        r="2.65823"
        fill="#BAE629"
        stroke="white"
        strokeLinecap="round"
      />
      <circle
        cx="72.3418"
        cy="24.4053"
        r="2.65823"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="67.9114"
        cy="35.9243"
        r="2.65823"
        fill="#E50074"
        stroke="white"
        strokeLinecap="round"
      />
      <circle
        cx="59.0508"
        cy="44.7857"
        r="2.65823"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="72.3418"
        cy="53.6455"
        r="2.65823"
        fill="#7676DD"
        stroke="white"
        strokeLinecap="round"
      />
      <circle
        cx="64.3675"
        cy="66.0503"
        r="2.65823"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Community() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73.2502 41C73.2502 39.7574 72.2429 38.75 71.0002 38.75H52.0002C47.9962 38.75 44.7502 41.9959 44.7502 46V58.25H66.0002C70.0043 58.25 73.2502 55.0041 73.2502 51V41Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M23.5002 34.5C23.5002 36.1568 22.1571 37.5 20.5002 37.5C18.8434 37.5 17.5002 36.1568 17.5002 34.5C17.5002 32.8431 18.8434 31.5 20.5002 31.5C22.1571 31.5 23.5002 32.8431 23.5002 34.5Z"
        stroke="white"
      />
      <path
        d="M48.5002 13C48.5002 14.3807 47.381 15.5 46.0002 15.5C44.6195 15.5 43.5002 14.3807 43.5002 13C43.5002 11.6193 44.6195 10.5 46.0002 10.5C47.381 10.5 48.5002 11.6193 48.5002 13Z"
        stroke="white"
      />
      <path
        d="M61.0781 47.3452C61.0781 49.2782 59.5111 50.8452 57.5781 50.8452C55.6451 50.8452 54.0781 49.2782 54.0781 47.3452C54.0781 45.4122 55.6451 43.8452 57.5781 43.8452C59.5111 43.8452 61.0781 45.4122 61.0781 47.3452Z"
        stroke="white"
      />
      <path
        d="M18.2998 65.1992C18.2998 66.8561 19.643 68.1992 21.2998 68.1992C22.9567 68.1992 24.2998 66.8561 24.2998 65.1992C24.2998 63.5424 22.9567 62.1992 21.2998 62.1992C19.643 62.1992 18.2998 63.5424 18.2998 65.1992Z"
        stroke="white"
      />
      <path
        d="M47.0002 17H45.0002C42.7911 17 41.0002 18.7909 41.0002 21H51.0002C51.0002 18.7909 49.2094 17 47.0002 17Z"
        fill="#E50074"
      />
      <path
        d="M64.0002 58V57C64.0002 54.2386 61.7617 52 59.0002 52H57.0002C54.2388 52 52.0002 54.2386 52.0002 57V58"
        stroke="white"
      />
      <path
        d="M34.7502 11C34.7502 8.1005 37.1007 5.75 40.0002 5.75H51.0002C55.0043 5.75 58.2502 8.99594 58.2502 13V16C58.2502 18.8995 55.8997 21.25 53.0002 21.25H34.7502V11Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M12.0002 45V45C12.0002 42.2386 14.2388 40 17.0002 40H20.0002C22.7617 40 25.0002 42.2386 25.0002 45V45"
        stroke="white"
      />
      <path
        d="M24.0004 69.5552H22.3337C19.5723 69.5552 17.3337 71.7938 17.3337 74.5552V74.9996H29.0004V74.5552C29.0004 71.7938 26.7618 69.5552 24.0004 69.5552Z"
        fill="#BAE629"
      />
      <path
        d="M44.0002 21L44.0002 31C44.0001 34.3137 41.3139 37 38.0002 37H33.0002"
        stroke="white"
      />
      <path
        d="M59.0002 58L59.0002 62.0001C59.0002 64.7615 56.7616 67 54.0002 67H36.0002"
        stroke="white"
      />
      <path
        d="M36.2502 62C36.2502 59.1005 33.8997 56.75 31.0002 56.75H17.5002C12.6678 56.75 8.75024 60.6675 8.75024 65.5C8.75024 70.3325 12.6678 74.25 17.5002 74.25H36.2502V62Z"
        stroke="white"
        strokeWidth="1.5"
      />
      <path
        d="M58.0002 13L59.0003 13C61.7617 13.0001 64.0002 15.2406 64.0002 18.002C64.0002 25.299 64.0002 30.636 64.0002 39"
        stroke="white"
      />
      <path d="M22.0002 45V56.2" stroke="white" />
      <path
        d="M6.75024 38C6.75024 31.7868 11.787 26.75 18.0002 26.75H24.5002C29.3327 26.75 33.2502 30.6675 33.2502 35.5C33.2502 40.3325 29.3327 44.25 24.5002 44.25H6.75024V38Z"
        stroke="white"
        strokeWidth="1.5"
      />
    </svg>
  );
}
