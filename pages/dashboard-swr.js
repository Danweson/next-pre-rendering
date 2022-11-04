import useSWR from "swr"
import Menu from "../components/menu"

const fetcher =  async () => {
    const response = await fetch('https://vercel.com/danweson/json-server-danson/dashboard')
    const data = await response.json() 
    return data
 }

function DashboardSWR(){

   const { data, error } = useSWR('dashboard', fetcher)

   if(error) return 'An error has occured'
   if(!data) return 'Loading'

    return (
        <div>
            <Menu/>
            <h2>Dashboard</h2>
            <h2>Posts - {data.posts}</h2>
            <h2>Likes - {data.likes}</h2>
            <h2>Followers - {data.followers}</h2>
            <h2>Following - {data.following}</h2>
        </div>
    )

}

export default DashboardSWR 