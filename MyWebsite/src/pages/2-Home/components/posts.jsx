import '../styles/posts.css'
import posts from '../data/posts.js'

export default function Post() {
    return (
        <>
            {posts.map((post, index) => (
                <article
                    key={index}
                    id={`post-${index + 1}`}
                    className="post"
                >
                    <h2>{post.title}</h2>
                    <hr className="post-hr"/>
                    <p>{post.content}</p>
                    <hr className="post-hr"/>
                </article>
            ))}
        </>
    )
}