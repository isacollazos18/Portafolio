import React from 'react';
import Navbar from './components/Navbar/Navbar';
import About from './components/App/AboutUs/About';
import Projects from './components/App/Proyects/Projects';
import Footer from './components/footer/Footer';
import Technologies from './components/App/Tecnologies/Technologies';
import Services from './components/App/OurService/Services';
import ContactForm from './components/App/Contact/ContactForm';
import HeroSection from './components/App/Information/HeroSection';




const App: React.FC = () => {
    return (
        <div>
           <Navbar /> 
           <HeroSection />
           <About />
           <Services />
           <Projects />
           <Technologies />
           <ContactForm />
           <Footer />
        </div>
    );
};

export default App;