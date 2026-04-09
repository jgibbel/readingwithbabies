import './Hero.css'

export default function Hero({ image, title }) {
  return (
    <div className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay" />
      {title && <h1 className="hero-title">{title}</h1>}
    </div>
  )
}
