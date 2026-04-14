import Hero from '../components/Hero'
import { img } from '../utils/img'
import './BookRecommendations.css'

const books = [
  {
    image: '9780063327054-3544937956.jpg',
    alt: 'Melodies of the Weary Blues',
    title: 'Melodies of the Weary Blues',
    subtitle: 'Poems from Langston Hughes',
    author: 'Compiled by Shamar Knight-Justice',
    illustrator: 'Illustrations from 23 artists',
  },
  {
    image: 'Screenshot-2025-08-04-at-3.39.49-PM.png',
    alt: "Let's Rumble",
    title: "Let's Rumble",
    author: 'by Rachel G. Payne',
  },
  {
    image: '81pavz9NitL._AC_UF10001000_QL80_.jpg',
    alt: 'Mama Hug',
    title: 'Mama Hug',
    author: 'by Emma Straub',
    illustrator: 'Illustrations by Stevie Lewis',
    note: 'Now available in Board Book format',
  },
  {
    image: '91uDVfhAwlL._AC_UF10001000_QL80_-1.jpg',
    alt: 'Board Books Resource',
    title: 'Board Books: A Resource',
    author: 'Rachel Payne, Brooklyn Public Library',
    description: 'The best resource for board books — see her article from The Horn Book, 2023.',
    link: 'https://www.hbook.com/story/baby-testing-board-books-a-report-and-a-roundup-from-a-margaret-wise-brown-board-book-award-jury-member',
    linkLabel: 'Read on hbook.com',
  },
  {
    image: '81O-xP1za1L._AC_UF10001000_QL80_.jpg',
    alt: 'Very Good Hats',
    title: 'Very Good Hats',
    author: 'by Emma Straub',
  },
  {
    image: '9780316514934-1.jpg',
    alt: 'Ooo, Baby Baby',
    title: 'Ooo, Baby Baby',
    author: 'by Sandra Boynton',
  },
  {
    image: 'image-asset.jpg',
    alt: 'Nose to Nose',
    title: 'Nose to Nose',
    author: 'by Thyra Heder',
  },
]

export default function BookRecommendations() {
  return (
    <div className="recs-page">
      <Hero image={img('READING-W-BABIES-CONTACT-US-IMG3.jpg')} title="Book Recommendations" />

      <div className="container recs-content">
        {books.map(({ image, alt, title, subtitle, author, illustrator, description, link, linkLabel, note }) => (
          <div key={image} className="rec-card">
            <div className="rec-img-wrap">
              <img src={img(image)} alt={alt} className="rec-cover" />
            </div>
            <div className="rec-text">
              <h3 className="rec-title">{title}</h3>
              {subtitle && <p className="rec-subtitle">{subtitle}</p>}
              {author && <p className="rec-author">{author}</p>}
              {illustrator && <p className="rec-illustrator">{illustrator}</p>}
              {note && <span className="rec-note">{note}</span>}
              {description && <p className="rec-description">{description}</p>}
              {link && (
                <a href={link} className="btn rec-link-btn" target="_blank" rel="noreferrer">
                  {linkLabel}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
