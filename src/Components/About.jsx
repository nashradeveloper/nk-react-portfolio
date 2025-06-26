import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <>
            <div className="container mx-auto text-center lg:w-6/12 lg:mt-32 mt-32 p-3 h-[500px]">
                <h2 className='uppercase lg:text-[6vw] text-[12vw] text-lime-300 font-bold'>Who Am I</h2>
                <p className='text-lg text-white font-normal'>Frontend Developer with 6+ months of hands-on experience in designing and developing web
                    applications using the frontend developer (React and Tailwind css). With a strong passion for coding
                    and a background in a non-technical field, I bring a unique perspective to problem-solving and user-
                    focused development. Looking to contribute my skills and grow in a challenging frontend developer
                    role.</p>
                    <Link to='/projects' className='text-lg font-medium text-blue-200 bg-lime-300 rounded-lg py-2 px-6'><button className='mt-7'>Show My Projects</button></Link>
            </div>
        </>
    )
}

export default About