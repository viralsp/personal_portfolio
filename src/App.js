import './App.css';
import Header from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/about/about'
import Contact from './component/contact/contact'
import Portfolio from './component/portfolio/portfolio'
import Services from './component/services/service'
import Experience from './component/experience/experience'

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <About />
      <Experience/>
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
