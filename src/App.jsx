import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Concept from './components/Concept'
import Agenda from './components/Agenda'
import Enroll from './components/Enroll'
import Join from './components/Join'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main>
        <Concept />
        <Agenda />
        <Enroll />
        <Join />
      </main>
      <Footer />
    </>
  )
}
