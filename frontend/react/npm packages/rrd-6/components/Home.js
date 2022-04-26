import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate()
    return (
        <div>
            Home page

            <button onClick={() => navigate('order-summary')}>Place order</button>
        </div>
    )
}

export default Home
