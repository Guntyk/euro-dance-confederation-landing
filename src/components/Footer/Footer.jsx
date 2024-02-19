import './Footer.css';

export default function Footer() {
  return (
    <footer className='section footer'>
      <div className='container'>
        <span className='rights'>© {new Date().getFullYear()} European Confederation of Dance Sports</span>
      </div>
    </footer>
  );
}
