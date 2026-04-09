import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import ReadingWithBabies from './pages/ReadingWithBabies'
import Videos from './pages/Videos'
import ContactUs from './pages/ContactUs'
import ClassicBooks from './pages/ClassicBooks'
import BookRecommendations from './pages/BookRecommendations'
import NotFound from './pages/NotFound'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/reading-with-babies" element={<ReadingWithBabies />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/classic-childrens-books-list" element={<ClassicBooks />} />
          <Route path="/book-recommendations" element={<BookRecommendations />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
