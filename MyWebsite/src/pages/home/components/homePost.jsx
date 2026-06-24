import '../styles/homePost.css'
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
                    <hr />
                    <p>{post.content}</p>
                    <hr />
                </article>
            ))}
        </>
    )
}