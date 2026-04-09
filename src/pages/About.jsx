import { Link } from 'react-router-dom'
import { img } from '../utils/img'
import './About.css'

export default function About() {
  return (
    <div className="about-page">

      {/* 1 — Header image */}
      <img src={img('headersmall.png')} alt="Reading with Babies" className="about-header-img" />

      {/* 2 — Babies need books */}
      <section className="about-band">
        <div className="container about-intro">
          <h2 className="about-headline">Babies need books.<br />Parents need books.</h2>
          <p className="about-subhead">
            From the very first days of life, reading together nurtures connection and sparks curiosity. At{' '}
            <em>Reading With Babies</em>, we celebrate the simple, powerful act of sharing stories with little
            ones and the joy it brings to both baby and reader.
          </p>
        </div>
      </section>

      {/* 3 — Susan */}
      <section className="about-card-section container">
        <div className="about-card">
          <div className="two-col">
            <div className="col-img center">
              <img src={img('susanauthorpic.jpg')} alt="Susan Straub" className="susan-photo" />
              <p className="susan-email">
                <a href="mailto:susan@readingwithbabies.com"><strong>susan@readingwithbabies.com</strong></a>
              </p>
            </div>
            <div className="col-text valign-center">
              <h2 className="card-heading">Meet Susan Straub</h2>
              <p className="card-subheading">The Heart Behind Reading With Babies</p>
              <p><strong>A lifelong advocate for early literacy, now sharing stories as a proud grandmother.</strong></p>
              <p>
                After 25 years of running the <em>Read To Me Program</em>, I just couldn't stop spreading the
                joy of reading. As a mother to two children and a Gaga to three grandsons, I've seen firsthand
                how stories shape relationships, imagination, and confidence. Through this site, I hope to keep
                encouraging parents, caregivers, and communities to read early, read often, and read together.
              </p>
              <p><strong>Read reviews and learn more about my writing life.</strong></p>
              <a href="http://susan-straub.com/" className="btn" target="_blank" rel="noreferrer noopener">
                Visit My Author Website
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Read To Me */}
      <section className="about-card-section container">
        <div className="about-card">
          <div>
            <div className="rtm-text-photos">
              <div className="rtm-text">
                <h2 className="card-heading">Read To Me Program</h2>
                <p className="card-subheading">25 years of helping young parents discover the magic of reading with their children.</p>
                <p>
                  The Read To Me Program began as a way to encourage teen and young mothers to share stories,
                  songs, and laughter with their babies and toddlers. Over the years, it has empowered parents
                  to use shared reading as an essential, enjoyable tool to help them raise their children.
                </p>
                <p>
                  Through partnerships with schools, libraries, and community programs, we help parents practice
                  and discover the joy of reading with their babies and toddlers from the very beginning. Recent
                  partnerships include the NYC LYFE Program (Learning for Young Families through Education),
                  which supports young parents continuing their education while raising children, and Rachel Payne
                  and the Brooklyn Public Library's Under 5s Program, where families gather to sing, read, and
                  learn together.
                </p>
                <div className="btn-group">
                  <Link to="/contact-us" className="btn">
                    Get in touch to bring Read to Me to your community!
                  </Link>
                  <Link to="/videos" className="btn">
                    Watch Program Videos
                  </Link>
                </div>
              </div>
              <div className="rtm-photo-row">
                <img src={img('IMG_7209.jpg')} alt="Read To Me Program" className="rtm-row-img" />
                <img src={img('rtm-photo-1.png')} alt="Read To Me Program" className="rtm-row-img" />
                <img src={img('rtm-photo-2.png')} alt="Read To Me Program" className="rtm-row-img" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Books */}
      <section className="about-band about-books-band">
        <div className="container">
          <h2 className="about-headline">The Books I've Been Writing</h2>
          <div className="books-grid">
            <div className="book-item">
              <a href="https://www.booksaremagic.net/item/_7oYv4gAfpawyS_m7DMIVw" target="_blank" rel="noreferrer">
                <img src={img('m.jpg')} alt="Reading with Babies, Toddlers and Twos" className="book-cover" />
              </a>
              <p>
                <a href="https://www.booksaremagic.net/item/_7oYv4gAfpawyS_m7DMIVw" target="_blank" rel="noreferrer">
                  <strong><em>Reading with Babies, Toddlers and Twos: A Guide to Laughing, Learning and Growing Together Through Books</em></strong>
                </a><br />
                by Susan Straub (Author),<br />
                KJ Dell'Antonia (Author), Rachel Payne<br />
                Sourcebooks; Paperback - May 7, 2013
              </p>
            </div>
            <div className="book-item">
              <a href="https://www.booksaremagic.net/item/1nTza9Y_Qo2Cw5R3-Ernig" target="_blank" rel="noreferrer">
                <img src={img('m-1.jpg')} alt="The Fire Chief" className="book-cover" />
              </a>
              <p>
                <a href="https://www.booksaremagic.net/item/1nTza9Y_Qo2Cw5R3-Ernig" target="_blank" rel="noreferrer">
                  <strong><em>The Fire Chief</em></strong>
                </a><br />
                by Susan Straub;<br />
                Illustrations by <a href="https://andiporretta.com" target="_blank" rel="noreferrer">Andrea Porretta</a>;<br />
                Self Published; 2018.
              </p>
            </div>
            <div className="book-item">
              <a href="https://www.susan-straub.com/books" target="_blank" rel="noreferrer">
                <img src={img('Screenshot2023-12-22at1.02.56-PM.png')} alt="Gaga Mistake Day" className="book-cover" />
              </a>
              <p>
                <a href="https://www.susan-straub.com/books" target="_blank" rel="noreferrer">
                  <strong><em>Gaga Mistake Day</em></strong>
                </a><br />
                by <a href="https://www.emmastraub.net" target="_blank" rel="noreferrer">Emma Straub</a> and Susan Straub;<br />
                Illustrations by <a href="https://jesslove.format.com" target="_blank" rel="noreferrer">Jessica Love</a>;<br />
                Rocky Pond Books, PRH; 2024
              </p>
            </div>
            <div className="book-item">
              <a href="https://booksaremagic.net/item/p5lAnqxqGBRazYXbRkL4-g" target="_blank" rel="noreferrer">
                <img src={img('1769389090653-p5q56.webp')} alt="Ring Ring" className="book-cover" />
              </a>
              <p>
                <a href="https://booksaremagic.net/item/p5lAnqxqGBRazYXbRkL4-g" target="_blank" rel="noreferrer">
                  <strong><em>Ring Ring</em></strong>
                </a><br />
                by Susan Straub;<br />
                Illustrations by <a href="https://www.anaitsart.com/new-page" target="_blank" rel="noreferrer">Anait Semirdzhyan</a>;<br />
                Rocky Pond Books, PRH; Sep 13 2026
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
