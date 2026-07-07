import React from 'react'

const Stats = () => {
  return (
    <div className='border-y border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 py-16'>
      <div className='container px-6 mx-auto'>
        <div className='grid grid-cols-2 gap-8 md:grid-cols-4 text-center'>
          {/* Stat 1 */}
          <div className='space-y-2'>
            <p className='text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-100'>
              12,400
            </p>
            <p className='text-xs uppercase tracking-widest text-gray-400 font-medium'>
              Active Listings
            </p>
          </div>

          {/* Stat 2 */}
          <div className='space-y-2 border-l border-gray-100 dark:border-gray-800'>
            <p className='text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-100'>
              8,500
            </p>
            <p className='text-xs uppercase tracking-widest text-gray-400 font-medium'>
              Vetted Talents
            </p>
          </div>

          {/* Stat 3 */}
          <div className='space-y-2 border-l border-gray-100 dark:border-gray-800'>
            <p className='text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-100'>
              450+
            </p>
            <p className='text-xs uppercase tracking-widest text-gray-400 font-medium'>
              Partner Brands
            </p>
          </div>

          {/* Stat 4 */}
          <div className='space-y-2 border-l border-gray-100 dark:border-gray-800'>
            <p className='text-4xl md:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-100'>
              98.2%
            </p>
            <p className='text-xs uppercase tracking-widest text-gray-400 font-medium'>
              Success Rate
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats
