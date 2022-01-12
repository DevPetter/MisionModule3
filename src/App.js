import { Route, Routes } from "react-router-dom"
import "./App.css"
import { Navigation } from "./components/Navigation"
import { About } from "./pages/About"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
