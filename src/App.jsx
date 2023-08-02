import { Footer } from "./components/Footer.jsx"
import { Header } from "./components/Header.jsx"
import { ImagesSection } from "./components/ImagesSection.jsx"
import { Main } from "./components/Main.jsx"
import { Services } from "./components/Services.jsx"
import { Testimonials } from "./components/Testimonials.jsx"

function App() {

  return (
  <main className="max-w-[1440px] mx-auto relative">
    <Header></Header>
    <Main></Main>
    <Services/>
    <Testimonials></Testimonials>
    <ImagesSection></ImagesSection>
    <Footer></Footer>
  </main>
  )
}

export default App
