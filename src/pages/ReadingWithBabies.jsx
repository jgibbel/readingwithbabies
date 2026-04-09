import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import { img } from '../utils/img'
import './ReadingWithBabies.css'

export default function ReadingWithBabies() {
  return (
    <div className="rwb-page">
      <Hero image={img('cropped-B-b-w-toddlers-share.jpeg')} title="Reading with Babies" />

      <div className="container rwb-content">

        <p>
          Reading with babies and toddlers is too good to miss. Yes, babies are often loud and messy, and yes,
          they can't precisely concentrate on your project. BUT, because we are hard-wired for stories AND
          because all babies love being cuddled and listening to your voice, reading a book with babies and
          toddlers will bring you both glorious pleasure.
        </p>
        <p>
          But Why? What? When? do we read with babies and toddlers? This website will reassure you of the
          power of books. I hope to encourage you to share books with your babies and toddlers early and often
          by suggesting titles, tips and strategies proven by research.
        </p>

        <h1 className="section-heading">What to Read?</h1>
        <div className="btn-center">
          <Link to="/classic-childrens-books-list" className="btn">Classic Children's Books List</Link>
        </div>
        <div className="spacer" />
        <div className="btn-center">
          <Link to="/book-recommendations" className="btn">Contemporary Children's Books Recommendations</Link>
        </div>

        <h1 className="section-heading">Where to Get Books?</h1>
        <p>
          A library card is the best way to get reliable and free access to books to read with your baby.
          New York City's three public library systems each have programming for children under 5. You can
          learn more about their offerings and find a location near you on their websites.
        </p>

        <div className="library-block">
          <a href="https://www.queenslibrary.org/programs-activities/kids/early-learning-services-queens-public-library-0-5" target="_blank" rel="noreferrer">
            <img src={img('CLDC_Early_Childhood_Area.jpg')} alt="Queens Public Library Early Childhood Area" className="library-img" />
          </a>
          <div className="btn-center mt-sm">
            <a href="https://www.queenslibrary.org/programs-activities/kids/early-learning-services-queens-public-library-0-5" className="btn" target="_blank" rel="noreferrer">
              Queens Public Library, Early Learning Services
            </a>
          </div>
        </div>

        <div className="library-block">
          <a href="https://www.bklynlibrary.org/learn/kids#little-kids" target="_blank" rel="noreferrer">
            <img src={img('48292030712_cc79bdfcf6_b-2129821080.jpg')} alt="Brooklyn Public Library" className="library-img" />
          </a>
          <div className="btn-center mt-sm">
            <a href="https://www.bklynlibrary.org/learn/kids#little-kids" className="btn" target="_blank" rel="noreferrer">
              Brooklyn Public Library, Little Kids
            </a>
          </div>
        </div>

        <div className="library-block">
          <a href="https://www.nypl.org/education/early-literacy" target="_blank" rel="noreferrer">
            <img src={img('Lion_600x300B-1.jpg')} alt="New York Public Library" className="library-img" />
          </a>
          <div className="btn-center mt-sm">
            <a href="https://www.nypl.org/education/early-literacy" className="btn" target="_blank" rel="noreferrer">
              New York Public Library, Early Literacy
            </a>
          </div>
        </div>

        <h1 className="section-heading">How Do Babies Read?</h1>

        <img src={img('AgesandStagesChartWhatToRead.png')} alt="Ages and Stages Chart - What to Read" className="chart-img" />
        <img src={img('AgesandStagesTips-scaled.png')} alt="Ages and Stages Tips" className="chart-img" />

      </div>
    </div>
  )
}
