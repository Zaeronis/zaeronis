import './styles/about.css';
import Posts from "../../global/components/posts.jsx";
import posts from "./data/posts.js";



export default function About() {



    return (
        <div className="about-container">
            <h1 className="about-title">About</h1>
            <div className="about-content">
                <Posts data={posts} bottomHR={false}/>
            </div>
        </div>
    )
}