// src/app/page.ts
  // Importing Navbar
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Projects';
import Contact from './components/Contact';

const Page = () => {
  return (
    <div>
       {/* Navbar is added only once here */}
      
      <div className="container mx-auto p-4">
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default Page;
