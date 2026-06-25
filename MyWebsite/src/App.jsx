import { useState } from 'react'
import Landing from './pages/1-Landing/Landing.jsx'
import './App.css'
import Header from "./global/components/header.jsx";
import Home from "./pages/2-Home/Home.jsx";
import About from "./pages/3-About/About.jsx";
import Projects from "./pages/4-Projects/Projects.jsx";
import Education from "./pages/5-Education/Education.jsx";
import Experience from "./pages/6-Experience/Experience.jsx";
import Contact from "./pages/7-Contact/Contact.jsx";

export default function App() {
    const [currentPage, setCurrentPage] = useState('landing');

    return (
        <>
            <Header
            setCurrentPage={setCurrentPage}
            />
            {currentPage === 'landing' && <Landing />}
            {currentPage === 'home' && <Home />}
            {currentPage === 'about' && <About />}
            {currentPage === 'projects' && <Projects />}
            {currentPage === 'education' && <Education />}
            {currentPage === 'experience' && <Experience />}
            {currentPage === 'contact' && <Contact />}

        </>
    );
}
