import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home/Home'
import Learn from './pages/Learn/Learn'

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="learn" element={<Learn />} />
      </Route>
    </Routes>
  )
}
