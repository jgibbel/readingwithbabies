import Hero from '../components/Hero'
import { img } from '../utils/img'
import './ClassicBooks.css'

const books = [
  { title: 'Blueberries for Sal', author: 'Robert McCloskey', desc: 'This simply illustrated glimpse of the past resonates with any child who\'s lost sight of Mom as Sal does during a blueberry picking jaunt.' },
  { title: 'Brown Bear, Brown Bear, What Do You See?', author: 'Bill Martin Jr., Eric Carle (illus.)', desc: 'Many kids can "read" Martin\'s predictable and comforting text before they even learn their letters. Carle\'s simple animal collages are iconic.' },
  { title: 'Caps for Sale: A Tale of a Pedaler, Some Monkeys, and Their Monkey Business', author: 'Esphyr Slobodkina', desc: 'A wonderful, timeless tale of copying and cleverness.' },
  { title: 'The Carrot Seed', author: 'Ruth Krauss, Crocket Johnson (illus.)', desc: 'For more than half a century, this beanie-sporting boy has had faith that his carrot would grow, despite his family\'s doubt.' },
  { title: 'Chicka Chicka Boom Boom', author: 'Bill Martin Jr., John Archambault, Lois Ehlert (illus.)', desc: 'In arguably one of the most memorable and playful alphabet books ever, lowercase letters and their parents, the capital letters, cavort up and down a coconut tree.' },
  { title: 'Clifford the Big Red Dog', author: 'Norman Bridwell', desc: 'Yes, it\'s a television series; yes, it\'s a franchise…but the original books are really good and perfect for babies and toddlers. Big, red dog. Need we say more?' },
  { title: 'Corduroy', author: 'Don Freeman', desc: 'A lovely story of a little girl\'s kindness and empathy for a teddy bear who needs a home, with realistic illustrations.' },
  { title: 'Curious George', author: 'H. A. Rey', desc: 'The story of the little monkey, so like a toddler in his curiosity and impulsiveness but so much more capable, is one kids love. You\'ll probably notice now that George\'s removal from the jungle isn\'t the most politically correct thing ever written, but your child won\'t mind.' },
  { title: 'Freight Train', author: 'Donald Crews', desc: 'This multicolored train has been crossing trestles, going by cities, and going through tunnels for over thirty years. Now there is an app that was created with Crews\'s input.' },
  { title: 'George and Martha', author: 'James Marshall', desc: 'The hippos have an admirable friendship, so real that it\'s full of pranks, hurt feelings, and make-ups. Marshall produced tons more brief stories about them, but this is the first. Arguably the story "Split Pea Soup" is a legend all by itself. Fun for the whole family.' },
  { title: 'Go, Dog. Go!', author: 'P. D. Eastman', desc: 'Simple books meant for beginning readers can make great books for beginning talkers. The board book version is a totally different animal, but it still works.' },
  { title: 'Goodnight Moon', author: 'Margaret Wise Brown, Clement Hurd (illus.)', desc: 'The old-fashioned setting, the simple rhymes, and the cozy illustrations make this a nighttime must-read for many toddlers.' },
  { title: 'Guess How Much I Love You', author: 'Sam McBratney, Anita Jeram (illus.)', desc: 'Big Nutbrown Hare can one-up Baby Nutbrown Hare\'s declarations of love every time, but this baby doesn\'t give up.' },
  { title: 'Harold and the Purple Crayon', author: 'Crockett Johnson', desc: 'You may remember Harold, but you probably didn\'t think of him as a book for babies. In fact, he works very well—simple illustrations and many moons.' },
  { title: 'Harry the Dirty Dog', author: 'Gene Zion, Margaret Bloy Graham (illus.)', desc: 'Harry needs a bath—and after he\'s run away from one, he gets so dirty his family doesn\'t recognize him. His ultimate return and his family\'s recognition make for a very satisfying resolution.' },
  { title: 'Hop on Pop', author: 'Dr. Seuss', desc: 'A wonderful introduction to rhyme.' },
  { title: 'The Little Engine That Could', author: 'Watty Piper, George and Doris Hauman (illus.)', desc: 'This tale still resonates and always will. The original illustrations are fun, but if you find them dated, you can look for Loren Long\'s 2005 take on this classic. If the words (definitely a little on the sweet and cloying side) begin to get to you, you can always edit a bit.' },
  { title: 'The Little House', author: 'Virginia Lee Burton', desc: 'Most of us remember the poignant illustrations in this story of a little house in the country that becomes surrounded by city before sympathetic owners move it to the country again.' },
  { title: 'The Napping House', author: 'Audrey and Don Wood', desc: 'In this fun, cumulative tale, a nap goes awry due to the antics of a "wakeful" flea.' },
  { title: 'Pat the Bunny', author: 'Dorothy Kunhardt', desc: 'The mother of all interactive baby books.' },
  { title: 'The Very Hungry Caterpillar', author: 'Eric Carle', desc: 'Kids love putting their fingers through the holes and pulling the pages to watch the hungry caterpillar eat his way through an uncomfortable assortment of food.' },
  { title: "We're Going on a Bear Hunt", author: 'Michael Rosen, Helen Oxenbury (illus.)', desc: 'A family, a journey, a bear, and lots of great sound effects from Rosen and lively watercolors from Oxenbury make this read-aloud irresistible.' },
  { title: 'Where the Wild Things Are', author: 'Maurice Sendak', desc: 'Sent to his room for being a wild thing, Max travels to the forest and conquers even wilder things before realizing that home is best.' },
  { title: "Where's Spot?", author: 'Eric Hill', desc: 'Plump, yellow Spot and his wonder at discovering the world around him have spoken to children for decades. Also available as ¿Dónde está Spot? in Spanish, and in many other languages.' },
  { title: 'Whistle for Willie', author: 'Ezra Jack Keats', desc: 'A whistle will call Willie the dog, but Peter can\'t whistle until practice finally pays off. Refreshingly warm collage illustrations.' },
]

export default function ClassicBooks() {
  return (
    <div className="classic-page">
      <Hero image={img('cropped-B-b-w-toddlers-share.jpeg')} title="Classic Children's Books List" />

      <div className="container classic-content">
        <ol className="book-list">
          {books.map(({ title, author, desc }, i) => (
            <li key={i} className="book-list-item">
              <span className="book-list-title"><em>{title}</em></span>
              {', '}
              <span className="book-list-author">{author}.</span>
              {' '}
              <span className="book-list-desc">{desc}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
