import { useState, useEffect } from "react"
import Menu from "../components/menu"

function Dashboard(){

    const [isLoading, setIsLoading] = useState(true)
    const [dashboardData, setDashboardData] = useState("null")

useEffect(() => {

    async function fetchDataDashbordData() {

        const response = await fetch('https://json-server-danson.vercel.app/dashboard')
        const data = await response.json()

        console.log(data)

        setDashboardData(data)
        setIsLoading(false)
    }

    fetchDataDashbordData()
}, [])

    if (isLoading) {
        <h2>Loading...</h2>
    }

    return (
        <div>
            <Menu/>
            <h2>Dashboard</h2>
            <h2>Posts - {dashboardData.posts}</h2>
            <h2>Likes - {dashboardData.likes}</h2>
            <h2>Followers - {dashboardData.followers}</h2>
            <h2>Following - {dashboardData.following}</h2>
        </div>
    )

}

export default Dashboard