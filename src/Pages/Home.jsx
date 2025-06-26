import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Skill from '../Components/Skills'

function Home() {
    return (
        <>
            <div className='w-screen bg-gradient-to-tr from-blue-800 to-lime-800'>
                <Navbar />
                <Hero />
                <About/>
                <Skill/>
            </div>
        </>
    )
}

export default Home