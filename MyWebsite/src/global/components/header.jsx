import '../styles/header.css'
import NeonSearchIcon from "./searchIcon.jsx";

export default function Header({ setCurrentPage }) {
    return (
        <div id="header">
            <div id="headerLeft">
                <button
                    onClick={() => setCurrentPage('experience')}
                >
                    Experience
                </button>
                <button
                    onClick={() => setCurrentPage('education')}
                >
                    Education
                </button>
                <button
                    onClick={() => setCurrentPage('projects')}
                >
                    Projects
                </button>
                <button
                    onClick={() => setCurrentPage('about')}
                >
                    About
                </button>
                <button
                    onClick={() => setCurrentPage('home')}
                >
                    Home
                </button>
            </div>
            <div id="headerMid">
                <input
                    type="text"
                    placeholder="Search"
                    id="searchInput"
                />
                <button id="searchButton">
                    <NeonSearchIcon />
                </button>
            </div>
            <div id="headerRight">
                <button
                    onClick={() => setCurrentPage('contact')}
                >
                    Contact
                </button>
            </div>
        </div>
    )
}