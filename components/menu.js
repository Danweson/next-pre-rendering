import Link from "next/link"

function Menu(){
    return (
        <>
            <Link href="/">
                <a>Home</a>
            </Link>
            &nbsp; &nbsp;
            <Link href="/users">
                <a>User</a>
            </Link>
            &nbsp; &nbsp;
            <Link href="/posts">
                <a>Posts</a>
            </Link>
            &nbsp; &nbsp;
            <Link href="/products">
                <a>Products</a>
            </Link>
            &nbsp; &nbsp;
            <Link href="/news">
                <a>News Articles</a>
            </Link>
            &nbsp; &nbsp;
            <Link href="/events">
                <a>Events</a>
            </Link> 
            &nbsp; &nbsp;
            <Link href="/dashboard">
                <a>Dashboard</a>
            </Link> &nbsp; &nbsp;
            <Link href="/dashboard-swr">
                <a>Dashboard SWR</a>
            </Link>
            
        </>
    )
}

export default Menu