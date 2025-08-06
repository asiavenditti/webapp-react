import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingleMoviePage from "./pages/SingleMoviePage"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { LoaderProvider } from "./context/LoaderContext"
import 'ldrs/react/Quantum.css'

function App() {
  return (
    <LoaderProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="api/movies/:id" element={<SingleMoviePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </LoaderProvider>
  )
}

export default App
