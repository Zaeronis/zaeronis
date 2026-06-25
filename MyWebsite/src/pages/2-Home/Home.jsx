import './styles/home.css'
import Post from "./components/posts.jsx";

export default function Home() {
    return (
        <div id="home-container">
            <h1 id="home-title">Home</h1>
            <div id="home-content">
                <Post />
            </div>
        </div>
    )
}