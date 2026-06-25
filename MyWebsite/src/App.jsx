import { useState } from 'react'
import Landing from './pages/landing/landing.jsx'
import './App.css'
import Header from "./global/components/header.jsx";
import Home from "./pages/home/home.jsx";

const Projects = 'TBD'
const Education = 'TBD'
const Experience = 'TBD'
const Contact = 'TBD'

const pages = [
    { name: 'landing', component: Landing },
    { name: 'home', component: Home },
    { name: 'projects', component: Projects },
    { name: 'education', component: Education},
    { name: 'experience', component: Experience},
    { name: 'contact', component: Contact},
]

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
