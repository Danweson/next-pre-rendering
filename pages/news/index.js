import Link from "next/link"
import Menu from "../../components/menu"


function NewsArticleList({articles}){

    // console.log(articles)

  return (
    <>
      <Menu/>
      <h1>List of News Articles</h1> 
      {
        articles.map(article => {
            return (
                <div key={article.id}>
                    <h2>
                        {article.id}.  {article.title} | {article.category}
                    </h2>
                </div> 
            )
        })
      }
    </>
  )
}

export default NewsArticleList

export async function getServerSideProps() {
    const response = await fetch("https://vercel.com/danweson/json-server-danson/news")
    const data = await response.json()

  console.log('Pre-rendering NewsArticleList')

    // console.log(data)

    return {
        props:{
            articles: data,
        },
    }
}