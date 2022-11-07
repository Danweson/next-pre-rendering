import Menu from "../../components/menu";
import Post from "../../components/post";

function PostList({posts}){

    // console.log(posts)

  return (
    <>
      <Menu/>
      <h1>List of Posts</h1> 
      {
        posts.map((post) => {
            return  (
                 <Post post={post} key={post.id}/>
            );
        })
      }
    </>
  )
}

export default PostList

export async function getStaticProps(){
    // const response = await fetch('https://dummyjson.com/users')
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts',
      {
        headers: {
          Accept: 'application/json, text/plain, */*',
          'User-Agent': '*',
        },
      }
    )

    const data = await response.json()
    // console.log(data)

    return {
      props: {
         posts: data,
      },
    }
}