import React from 'react'
import { Progress } from "@material-tailwind/react";

const VotingResult = () => {
    return (
        <>
        <div className='flex justify-center'>
            <div className='bg-white h-[60vh] w-[100vh] rounded-lg'>
            <div class="flex flex-col md:flex-row">
  <div class="w-full md:w-7/12 bg-blue-200 p-4">Column 1</div>
  <div class="w-full md:w-5/12 bg-green-200 p-4">Column 2</div>
</div>


          
            </div>
        </div>

        <Progress value={50} className="h-10 rounded-lg" label="Completed" />

        </>
    )
}

export default VotingResult
