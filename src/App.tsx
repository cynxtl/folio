import { MouseLight } from './components/MouseLight';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
// import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100 relative">
      <MouseLight />
      <Header />

      <main>
        <Hero />
        <Projects />
        {/* <Experience /> */}
        <Skills />
        <Certifications />
      </main>

      <Footer />
    </div>
  );
}

export default App;
