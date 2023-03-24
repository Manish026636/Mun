import React from 'react'
const CPView = () => {
    return (
        <>
            <section>
        // Do you have any motions
                <div className=' flex items-center'>
                    <div className='bg-white mx-auto justify-center text-center h-72 w-[60vh] md:w-[70vh] rounded-2xl'>
                        <h1 className='py-20 font-bold text-lg'>Do you have any motions on the floor ? </h1>
                        <button class="bg-[#6EB6F9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
                            Send to Delegates
                        </button>

                    </div>


                </div>

            </section>
            <section className='mt-20'>
                <div className='flex justify-center'>
                    <div className='bg-white h-[53vh] w-[60vh] md:w-[200vh] rounded-2xl'>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <div class=" m-4  p-4 rounded-xl">
                                <h2 className='font-bold'>Proposed Topics....</h2>
                                <div className='mt-4 text-center'>
                                    <div>
                                        <button class="bg-[#6CB9FF] hover:bg-blue-700 text-white text-sm font-bold py-3 px-4 mt-2 rounded-lg">Topic 1  |  10 Min</button>
                                    </div>
                                    <div>
                                        <button class="bg-[#5AE1FF] hover:bg-blue-700 text-white text-sm font-bold py-3 px-4 mt-2 rounded-lg">Topic 2  |  09 Min</button>
                                    </div>
                                    <div>
                                        <button class="bg-[#B283FF] hover:bg-blue-700 text-white text-sm font-bold py-3 px-4 mt-2 rounded-lg">Topic 3  |  08 Min</button>
                                    </div>
                                    <div>
                                        <button class="bg-[#EEEEEE] hover:bg-blue-700 text-indigo-300 text-sm font-bold py-3 px-4 mt-2 rounded-lg">Topic 4  |  07 Min</button>
                                    </div>
                                    <div>
                                        <button class="bg-[#EEEEEE] hover:bg-blue-700 text-indigo-300 text-sm font-bold py-3 px-4 mt-2 rounded-lg">Topic 5  |  06 Min</button>
                                    </div>
                                    <div>
                                        <button class="bg-[#EEEEEE] hover:bg-blue-700 text-indigo-300 text-sm font-bold py-3 px-4 mt-2 rounded-lg">Topic 6  |  05 Min</button>
                                    </div>

                                </div>
                            </div>



                            <div class="bg-[#F0F6FF] m-6 rounded-2xl md:mr-10 p-4 h-[35vh] text-center md:mt-20   md:h-[40vh]">
                                <h2 className='font-bold text-xl py-12 md:py-12'>Start voting on Topic 1</h2>
                                <div>
                                    <button class="bg-[#ADADAD] hover:bg-blue-700 text-white text-sm font-bold py-3 px-10 mt-2  rounded-lg md:mt-8">SEND</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </section>

        </>
    )
}

export default CPView
