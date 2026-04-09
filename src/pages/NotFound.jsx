import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! We couldn't find that page.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </div>
  )
}
