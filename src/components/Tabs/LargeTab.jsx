import React from 'react'

const LargeTab = () => {
  return (
    <>
      <div className='container mx-auto'>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="col-span-2 text-center h-20 rounded-t-2xl md:col-span-1 md:w-12/12 bg-gradient-to-r from-blue-300 to-indigo-200">
            <h1 className='text-gray-100 text-xl font-bold mt-7'>Speakers</h1> 
             </div>
          <div class="col-span-2 text-center h-20 rounded-t-2xl md:col-span-1 md:w-6/12 bg-gradient-to-r from-light-blue-300 to-indigo-200">
          <h1 className='text-gray-100 text-xl font-bold mt-7'>Deligate Info</h1> 
          </div>
        </div>


      </div>
    </>
  )
}

export default LargeTab