import './styles/home.css'
import Post from "../../global/components/posts.jsx";
import posts from "./data/posts.js";

export default function Home() {
    return (
        <div id="home-container">
            <h1 id="home-title">Home</h1>
            <div id="home-content">
                <Post data={posts}/>
            </div>
        </div>
    )
}