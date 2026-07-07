import React from 'react'

const FeaturedCompanies = () => {
  const companies = [
    { id: 1, name: 'Google', industry: 'Technology & Cloud', location: 'California, USA', jobsCount: 14 },
    { id: 2, name: 'Microsoft', industry: 'Enterprise Software', location: 'Washington, USA', jobsCount: 8 },
    { id: 3, name: 'Meta', industry: 'Social Technologies', location: 'California, USA', jobsCount: 11 },
    { id: 4, name: 'Amazon', industry: 'E-commerce & Web Services', location: 'Washington, USA', jobsCount: 19 },
    { id: 5, name: 'Netflix', industry: 'Streaming & Entertainment', location: 'California, USA', jobsCount: 5 },
    { id: 6, name: 'Stripe', industry: 'Financial Infrastructure', location: 'San Francisco, USA', jobsCount: 7 }
  ]

  return (
    <div className='bg-white dark:bg-gray-900 py-20 border-t border-gray-100 dark:border-gray-900'>
      <div className='container px-6 mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-12'>
          <div className='max-w-xl'>
            <p className='text-xs font-semibold tracking-widest text-gray-400 uppercase'>Partners</p>
            <h2 className='mt-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl'>
              Featured Employers
            </h2>
          </div>
          <button className='mt-4 md:mt-0 text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 border-b border-gray-900 dark:border-gray-100 pb-1 transition-colors duration-200'>
            View all companies &rarr;
          </button>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {companies.map(company => (
            <div 
              key={company.id} 
              className='p-8 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl flex flex-col justify-between hover:border-gray-200 dark:hover:border-gray-700 transition-colors duration-300'
            >
              <div>
                <div className='flex justify-between items-start'>
                  <h3 className='text-lg font-medium text-gray-900 dark:text-gray-100'>
                    {company.name}
                  </h3>
                  <span className='text-xs text-gray-400 font-normal'>
                    {company.location}
                  </span>
                </div>
                <p className='text-xs text-gray-400 mt-1 uppercase tracking-wider'>{company.industry}</p>
              </div>

              <div className='mt-8 pt-4 border-t border-gray-100/50 dark:border-gray-800/50 flex justify-between items-center'>
                <span className='text-xs text-gray-500 dark:text-gray-400 font-medium'>
                  {company.jobsCount} active openings
                </span>
                <span className='text-xs font-semibold text-gray-900 dark:text-gray-100 hover:underline cursor-pointer'>
                  Explore careers
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FeaturedCompanies
