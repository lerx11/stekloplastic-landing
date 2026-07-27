import Header from './components/Header'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Benefits from './components/Benefits'
import Stats from './components/Stats'
import Process from './components/Process'
import Services from './components/Services'
import Gallery from './components/Gallery'
import CaseStudy from './components/CaseStudy'
import Clients from './components/Clients'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Author from './components/Author'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Problem />
        <Solution />
        <Benefits />
        <Stats />
        <Process />
        <Services />
        <Gallery />
        <CaseStudy />
        <Clients />
        <FAQ />
        <CTA />
        <Author />
      </main>
      <Footer />
    </div>
  )
}

export default App
