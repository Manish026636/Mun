import React from 'react'

const LargeTab = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row gap-4'>
        <div class="flex-1 md:flex-[3] rounded-lg bg-gradient-to-r from-blue-300 to-indigo-200">
          <div className='text-center'>
            <h1 className='text-gray-100 text-xl font-bold mt-7'>Speakers</h1>
          </div>

          <div class=" mt-7 h-[50vh] hide-scrollbar  rounded-b-lg bg-white overflow-y-auto">
            <div className=' p-4 '>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-lg '>
                <table class="w-full">
                  <thead>
                    <tr class="w-[100vw] md:overflow-x-auto  text-xs font-semibold text-center text-gray-500">
                      <td class="w-6 border-r-2 font-bold py-6">1</td>
                      <td class="w-16  border-r-2">Akash Yadav</td>
                      <td class="w-20 border-r-2">INDIA</td>
                      <td class="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="india.png" alt="" /></td>
                      <td class="w-10 border-r-2">00.00</td>
                      <td class="w-20"><button class="bg-gradient-to-r from-purple-300 to-indigo-400 text-white font-bold py-2 px-4 rounded">START</button></td>
                    </tr>
                  </thead>
                </table>

              </div>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-lg '>
                <table class="w-full">
                  <thead>
                    <tr class="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                      <th class="w-6 border-r-2 font-bold py-6">2</th>
                      <th class="w-16  border-r-2">Akash Yadav</th>
                      <th class="w-20 border-r-2">RUSSIA</th>
                      <th class="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="russia.png" alt="" /></th>
                      <th class="w-10 border-r-2">00.00</th>
                      <th class="w-20"><button class="bg-gradient-to-r from-purple-300 to-indigo-400 text-white font-bold py-2 px-4 rounded">START</button></th>
                    </tr>
                  </thead>
                </table>

              </div>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-lg '>
                <table class="w-full">
                  <thead>
                    <tr class="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                      <th class="w-6 border-r-2 font-bold py-6">3</th>
                      <th class="w-16  border-r-2">Akash Yadav</th>
                      <th class="w-20 border-r-2">USA</th>
                      <th class="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="usa.png" alt="" /></th>
                      <th class="w-10 border-r-2">00.00</th>
                      <th class="w-20"><button class="bg-gradient-to-r from-purple-300 to-indigo-400 text-white font-bold py-2 px-4 rounded">START</button></th>
                    </tr>
                  </thead>
                </table>

              </div>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-lg '>
                <table class="w-full">
                  <thead>
                    <tr class="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                      <th class="w-6 border-r-2 font-bold py-6">4</th>
                      <th class="w-16  border-r-2">Akash Yadav</th>
                      <th class="w-20 border-r-2">CHINA</th>
                      <th class="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="china.png" alt="" /></th>
                      <th class="w-10 border-r-2">00.00</th>
                      <th class="w-20"><button class="bg-gradient-to-r from-purple-300 to-indigo-400 text-white font-bold py-2 px-4 rounded">START</button></th>
                    </tr>
                  </thead>
                </table>

              </div>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-lg '>
                <table class="w-full">
                  <thead>
                    <tr class="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                      <th class="w-6 border-r-2 font-bold py-6">5</th>
                      <th class="w-16  border-r-2">Akash Yadav</th>
                      <th class="w-20 border-r-2">FRANCE</th>
                      <th class="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="france.png" alt="" /></th>
                      <th class="w-10 border-r-2">00.00</th>
                      <th class="w-20"><button class="bg-gradient-to-r from-purple-300 to-indigo-400 text-white font-bold py-2 px-4 rounded">START</button></th>
                    </tr>
                  </thead>
                </table>

              </div>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-lg '>
                <table class="w-full">
                  <thead>
                    <tr class="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                      <th class="w-6 border-r-2 font-bold py-6">6</th>
                      <th class="w-16  border-r-2">Akash Yadav</th>
                      <th class="w-20 border-r-2">INDIA</th>
                      <th class="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="india.png" alt="" /></th>
                      <th class="w-10 border-r-2">00.00</th>
                      <th class="w-20"><button class="bg-gradient-to-r from-purple-300 to-indigo-400 text-white font-bold py-2 px-4 rounded">START</button></th>
                    </tr>
                  </thead>
                </table>

              </div>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-lg '>
                <table class="w-full">
                  <thead>
                    <tr class="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                      <th class="w-6 border-r-2 font-bold py-6">7</th>
                      <th class="w-16  border-r-2">Akash Yadav</th>
                      <th class="w-20 border-r-2">INDIA</th>
                      <th class="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="india.png" alt="" /></th>
                      <th class="w-10 border-r-2">00.00</th>
                      <th class="w-20"><button class="bg-gradient-to-r from-purple-300 to-indigo-400 text-white font-bold py-2 px-4 rounded">START</button></th>
                    </tr>
                  </thead>
                </table>

              </div>
              <div className='bg-[#EAF1FD] my-2 h-16 rounded-lg '>
                <table class="w-full">
                  <thead>
                    <tr class="w-[100vw] md:overflow-x-auto md:w-fit text-xs font-semibold tracking-wide text-center text-gray-500">
                      <th class="w-6 border-r-2 font-bold py-6">8</th>
                      <th class="w-16  border-r-2">Akash Yadav</th>
                      <th class="w-20 border-r-2">INDIA</th>
                      <th class="w-10 border-r-2"><img className=' w-[4vh] md:w-[6vh] rounded mx-auto' src="india.png" alt="" /></th>
                      <th class="w-10 border-r-2">00.00</th>
                      <th class="w-20"><button class="bg-gradient-to-r from-purple-300 to-indigo-400 text-white font-bold py-2 px-4 rounded">START</button></th>
                    </tr>
                  </thead>
                </table>

              </div>




            </div>
          </div>
        </div>

        <div class="flex-1  rounded-lg bg-gradient-to-r from-light-blue-300 to-indigo-200">
          <div className='text-center'>
            <h1 className='text-gray-100 text-xl font-bold mt-7'>Deligate Info</h1>
          </div>
          <div class="p-4 py-10 mt-7 h-[50vh]  rounded-b-lg bg-white">
            <div class=" grid grid-cols-2  gap-1 md:gap-4">
              <div class="text-center  mt-2">
                <img className=' w-[10vh] md:w-[10vh] rounded mx-auto' src="france.png" alt="" />
                <h2 className='mt-2'>France</h2>
              </div>
              <div class="bg-blue-100 rounded-2xl text-center font-bold text-lg ">
                <h1 className='mt-8'>00 : 00</h1>
              </div>
            </div>
            <div class="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-4 ">
              <textarea class="hide-scrollbar overflow-y-auto  form-textarea rounded-xl h-20 w-full  border-2 border-gray-400 hover:border-blue-500 " placeholder="Notes..."></textarea>
              <div className="rating mt-6">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-yellow-600" />
              </div>
            </div>
            <div class="mt-4 grid grid-cols-1 sm:grid-cols-1 ">
              <textarea class="hide-scrollbar overflow-y-auto  form-textarea rounded-xl h-20 w-full  border-2 border-gray-400 hover:border-blue-500 " placeholder="Comments...."></textarea>

            </div>
            <div className='mt-8 text-center'>
              <button class="bg-gradient-to-r from-blue-300 to-indigo-400 text-white font-bold py-2 px-4 rounded">Submit</button>

            </div>
          </div>

        </div>
      </div>





    </>
  )
}

export default LargeTab