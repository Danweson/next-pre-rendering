import Link from "next/link"

function Post({post}){
    return (
        <>
            <hr></hr>
            <Link href={`/posts/${post.id}`} passHref>
            <a>
                <h4>{post.id}. {post.title}</h4>
            </a>
            </Link>
        </>
    )
}

export default Post