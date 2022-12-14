import Link from "next/link"
import Menu from "../../components/menu";
import Product from "../../components/product";

function ProductList({products}){

    // console.log(products)

  return (
    <>
      <Menu/>
      <h1>List of Products</h1> 
      {
        products.map((product) => {
            return  (
                 <Product product={product} key={product.id}/>
            );
        })
      }
    </>
  )
}

export default ProductList

export async function getStaticProps(){

  console.log("Generating / Regenerating ProductList at: ", Date.now())

    const response = await fetch(
      'https://json-server-danson.vercel.app/products',
      {
        headers: {
                Accept: 'application/json, text/plain, */*',
                'User-Agent': '*',
        },
      }
    )

    //const data = await response.json()
    const data = await response.json(JSON.stringify(response.products))
    // console.log(response)

    return {
      props: {
         products: data, 
      },
      //revalidate: 10
    }
  }