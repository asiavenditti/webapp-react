import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingleMoviePage from "./pages/SingleMoviePage"
import HomePage from "./pages/HomePage"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/:id" element={<SingleMoviePage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
