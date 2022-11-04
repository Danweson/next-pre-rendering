import Link from "next/link"

function Product({product}){
    return (
        <>
            <hr></hr>
            <Link href={`/products/${product.id}`} passHref>
            <a>
                <h4>{product.id}. {product.description}</h4>
            </a>
            </Link>
        </>
    )
}

export default Product