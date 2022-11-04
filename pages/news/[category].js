import Menu from "../../components/menu"

function ArticleListByCategory({articles, category}) {
    // console.log(articles)
    return (
        <>    
          {/*  {articles.lenth > 0? */}
           <h2>Showing news for category <i>{category}</i></h2>
           {/*  :
           null 
            } */}
            {
                /* articles.lenth > 0? */
                articles.map((article) => {
                    return (
                        <div key={article.id}>
                            <Menu/>
                            <h2>
                                {article.id} {article.title} | {article.category}
                            </h2>
                            <p>{article.description}</p>
                            <hr/>
                        </div>
                    )
                })
               /*  :
                <h1>No Category News Articles</h1> */

            }
            
            
        </>
    )
}

export default ArticleListByCategory

export async function getServerSideProps(context) {

    const { params, req, res, query } = context
    console.log(query)
    console.log(req.headers.cookie)
    res.setHeader('Set-Cookie', ['name=Danson'])
    const {category}  = params

    const response = await fetch(
        `https://vercel.com/danweson/json-server-danson/news?category=${category}`
    )

    const data = await response.json()

    console.log(`Pre-rendering NewsArticleList for category ${category}`)
    // console.log(response)
    // console.log(data)

    return {
        props: {
            articles: data,
            category,
        },
    }
}