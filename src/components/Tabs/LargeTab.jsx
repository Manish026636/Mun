import React from 'react'

const LargeTab = () => {
  return (
    <>
      <div className='container mx-auto grid grid-cols-12 gap-4'>
        <div class="col-span-8 md:col-span-8  h-20 rounded-t-2xl  bg-gradient-to-r from-blue-300 to-indigo-200">
          <div className='text-center'>
            <h1 className='text-gray-100 text-xl font-bold mt-7'>Speakers</h1>
          </div>

          <div class="my-7  h-fit rounded-b-2xl  bg-white">
            <div className='container p-4    mx-auto'>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-2xl '>
              </div>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-2xl '>
              </div>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-2xl '>
              </div>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-2xl '>
              </div>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-2xl '>
              </div>
              <div className='bg-[#EAF1FD] h-16 rounded-2xl '>
              </div>
            </div>

          </div>
        </div>
        <div class="col-span-4 md:col-span-4 text-center h-20 rounded-t-2xl  bg-gradient-to-r from-light-blue-300 to-indigo-200">
          <h1 className='text-gray-100 text-xl font-bold mt-7'>Delegate Info</h1>
          <div class="my-7 text-center h-96 rounded-b-2xl bg-purple-50"></div>
        </div>
      </div>






    </>
  )
}

export default LargeTab