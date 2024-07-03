import Nav from "./components/Nav"
import ProductionHouse from "./components/ProductionHouse"
import Slider from "./components/Slider"
import GenreMovieList from "./components/GenreMovieList"
export default function App() {
  return (
    <main>
      <Nav />
      <Slider/>
      <ProductionHouse/>
      <GenreMovieList/>
    </main>
  )
}