import '../styles/posts.css'

export default function Post({data, topHR=true, bottomHR=true}) {
    return (
        <>
            {data.map((post, index) => (
                <article
                    key={index}
                    id={`post-${index + 1}`}
                    className="post"
                >
                    <h2>{post.title}</h2>
                    {topHR && <hr className="post-hr"/>}
                    <p>{post.content}</p>
                    {bottomHR && <hr className="post-hr"/>}
                </article>
            ))}
        </>
    )
}