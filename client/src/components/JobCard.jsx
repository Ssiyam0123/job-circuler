/* eslint-disable react/prop-types */
import {  format } from "date-fns";

import { Link } from 'react-router-dom'


const JobCard = ({job}) => {
  // console.log(job)

  return (
    <Link
      to={`/job/${job?._id}`}
      className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'
    >
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
          Deadline: {format(new Date(job?.deadline),'yyyy-MM-dd')}
        </span>
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
          {job?.category}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
         {job?.title}
        </h1>

        <p className='mt-2 text-sm text-gray-600 '>
         {job?.description}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
          Range: ${job?.min_price} - ${job?.max_price}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>Total Bids: {job?.bid_count}</p>
      </div>
    </Link>
  )
}

export default JobCard
