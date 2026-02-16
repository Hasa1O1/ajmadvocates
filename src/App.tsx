import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PracticeAreas />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
