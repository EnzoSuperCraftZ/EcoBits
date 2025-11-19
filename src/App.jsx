import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Info from './components/Info'
import CausasProblema from './components/CausasProblema'
import Impacto from './components/Impacto'
import Solucao from './components/Solucao'
import Footer from './components/Footer'
import SiteMapa from './components/SiteMapa'


function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigateToMap = () => {
    setCurrentPage('map')
    window.scrollTo(0, 0)
  };

  const navigateToMap = () => {
    setCurrentPage('map')
    window.scrollTo(0, 0)
  }

  const navigateToHome = () => {
    setCurrentPage('home')
    window.scrollTo(0, 0)
  }

  if (currentPage === 'map') {
    return <SiteMapa onBack={navigateToHome} />
  }

  return (
    <div className="app">
      <Navbar onNavigateToMap={handleNavigateToMap} />
      <Intro onNavigateToMap={navigateToMap} />
      <Info />
      <CausasProblema />
      <Impacto />
      <Solucao onNavigateToMap={navigateToMap} />
      <Footer />
    </div>
  )
}

export default App


