import './styles/header.css'
import NeonSearchIcon from "./searchIcon.jsx";

export default function Header() {
    return (
        <div id="header">
            <div id="headerLeft">
                <button>
                    Experience
                </button>
                <button>
                    Education
                </button>
                <button>
                    Projects
                </button>
                <button>
                    About
                </button>
                <button>
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
                <button>
                    Contact
                </button>
            </div>
        </div>
    )
}