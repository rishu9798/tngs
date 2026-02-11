import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Expertise from './components/sections/Expertise';
import Industries from './components/sections/Industries';
import Process from './components/sections/Process';
import Quality from './components/sections/Quality';
import Contact from './components/sections/Contact';
import Product from './components/sections/Product';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className='h-screen'>
        <Hero />
        <About />
        <Expertise />
        <Industries />
        <Product/>
        <Process />
        <Quality />
        <Contact />
      </main>
    </div>
  );
}

export default App;
