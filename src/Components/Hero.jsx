import React from 'react'

function Hero() {
    return (
        <>
            <div className='w-screen h-full min-h-screen'>
                <h1 className='text-[10vw] lg:text-[6vw] font-bold text-white text-center mt-10'>I'm <span className='text-lime-300'>Nashra Khan</span> <br /><span className='border border-gray-300 rounded-xl'>Frontend</span> Developer </h1>
                <div className='grid lg:grid-cols-3 grid-cols-1 space-y-5 px-16 mt-16 w-full'>
                    <div className='bg-gradient-to-br from-gray-800 to-gray-900 -rotate-12 text-white p-6 rounded-xl shadow-xl w-96 font-sans h-[240px] mt-28'>
                        <h2 className="text-xl font-semibold mb-6 tracking-wide uppercase">Client Review From Delhi</h2>
                        <p className='text-lg text-gray-500'>
                            The WordPress website exceeded my expectations with its sleek design,
                            seamless functionality, and outstanding support. Highly recommended for
                            any business!</p>
                    </div>
                    <div className='box w-96 h-[300px]'>
                        <img src="/img/me.png" alt="" className='drop-shadow-[0_0_40px_rgba(255,255,0,0.4)] mt-2' />
                      
                    </div>
                    <div className='bg-gradient-to-br from-gray-800 to-gray-900 rotate-12 text-white p-6 rounded-xl shadow-xl w-96 font-sans mx-12 h-[240px] relative top-20'>

                        <h2 className="text-xl font-semibold mb-6 tracking-wide">MY EXPERTISE</h2>

                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                                <span>FRONTEND</span>
                                <span>90%</span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-700 rounded-full relative">
                                <div className="h-1.5 bg-purple-500 rounded-full w-[93%]"></div>
                                <div className="w-3 h-3 bg-purple-400 rounded-full absolute -top-1 right-[6%] shadow-md"></div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <div className="flex justify-between items-center mb-1">
                                <span>Backend</span>
                                <span>50%</span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-700 rounded-full relative">
                                <div className="h-1.5 bg-blue-500 rounded-full w-[50%]"></div>
                                <div className="w-3 h-3 bg-blue-400 rounded-full absolute -top-1 left-[48%] shadow-md"></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1">
                                <span>Wordpress</span>
                                <span>80%</span>
                            </div>
                            <div className="w-full h-1.5 bg-gray-700 rounded-full relative">
                                <div className="h-1.5 bg-yellow-400 rounded-full w-[88%]"></div>
                                <div className="w-3 h-3 bg-yellow-300 rounded-full absolute -top-1 right-[9%] shadow-md"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero