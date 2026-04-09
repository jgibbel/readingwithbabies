import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <nav className="footer-nav">
          <Link to="/" className="footer-link">About</Link>
          <Link to="/reading-with-babies" className="footer-link">Reading with Babies</Link>
          <Link to="/videos" className="footer-link">Videos</Link>
          <Link to="/contact-us" className="footer-link">Contact Us</Link>
        </nav>
      </div>
    </footer>
  )
}
