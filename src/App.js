import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Work from "./components/work/Work"
import Testimonial from "./components/testimonial/Testimonial"
import Contact from "./components/contact/Contact"
import "./App.scss"

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className='section'>
        <Intro />
        <Portfolio />
        <Work />
        <Testimonial />
        <Contact />

      </div>
    </div>
  );
}

export default App;
