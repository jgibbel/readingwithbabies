import Hero from '../components/Hero'
import { img } from '../utils/img'
import './Videos.css'

const videos = [
  {
    section: 'Reading with Babies Program Video',
    description: 'This 19 minute video, available in English and Spanish, shows how real babies 2-24 months read and interact with books.',
    embeds: [
      'https://www.youtube.com/embed/hEvgy3UcB8I',
      'https://www.youtube.com/embed/6s2G3_w9Mto',
    ],
  },
  {
    section: 'Read to Me Program Video',
    description: 'This video documents an iteration of the Read to Me program implemented with teen parents.',
    embeds: [
      'https://www.youtube.com/embed/Ea-Y22IUokw',
    ],
  },
  {
    section: 'Segments',
    description: 'These clips from the program videos highlight different aspects of the experience and process of reading with your baby.',
    embeds: [
      'https://www.youtube.com/embed/JIOw22Tt78A',
      'https://www.youtube.com/embed/ppGFXiRRTmo',
      'https://www.youtube.com/embed/EBGop8qRTHc',
    ],
  },
]

export default function Videos() {
  return (
    <div className="videos-page">
      <Hero image={img('cropped-B-b-w-toddlers-share.jpeg')} title="Videos" />

      <div className="container videos-content">
        {videos.map(({ section, description, embeds }) => (
          <div key={section} className="video-section">
            <h2 className="video-section-title">{section}</h2>
            <p className="video-section-desc">{description}</p>
            <div className="video-embeds">
              {embeds.map((src) => (
                <div key={src} className="video-wrapper">
                  <iframe
                    src={src}
                    title={section}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
