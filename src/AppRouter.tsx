import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Learn from './pages/Learn/Learn'
import About from './pages/About/About'
import Deck from './pages/Deck/Deck'

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Learn />} />
        <Route path="about" element={<About />} />
        <Route path="deck" element={<Deck />} />
      </Route>
    </Routes>
  )
}
