import Link from "next/link"
import { useRouter } from 'next/router'
import Menu from "../../components/menu"

function Post({product}) {

    const router = useRouter()

    if (router.isFallback) {
        return <h1>Loading...</h1>
    }
    
    return (
        <> 
            <Menu/>
            <p key={product.id}>
                <h4>{product.price}</h4>
                {product.description}
            </p>
        </>
    )
}

export default Post

export async function getStaticPaths(){

    const response = await fetch('https://vercel.com/danweson/json-server-danson/products')
    const data = await response.json()
    console.log("Fall back")

    /* const paths = data.map((product) => {
        return {
            params : {
               productId: `${product.id}`,
            },
        }
    }) */

    return {
        paths: [
            {
                params: { productId: '1' },
            },
            {
                params: { productId: '2' },
            },
            {
                params: { productId: '3' },
            },
        ], 
        // paths: paths,

        // fallback: false,
        // fallback: false,
        fallback: 'blocking',
    }
}

export async function getStaticProps(context){

    const { params } = context
    // const response = await fetch('https://dummyjson.com/users')

    console.log(`Generating / Regenerating Product ${params.productId}  `)

    const response = await fetch(
        `https://json-server-danson.vercel.app/products/${params.productId}`
        )

    const data = await response.json()

    if (!data.id) {
        return {
            notFound: true,
        }
    }

    console.log(`Generating page for /posts/${params.productId}`)

    return {
      props: {
         product: data,
      },
      revalidate: 10
    }
}