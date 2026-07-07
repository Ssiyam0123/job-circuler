import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      title: 'Build your profile',
      description: 'Create a clean, digital resume showcasing your verified experience, tech stack, and portfolio highlights.'
    },
    {
      num: '02',
      title: 'Discover opportunities',
      description: 'Filter through hand-picked projects or full-time roles posted by remote-first companies.'
    },
    {
      num: '03',
      title: 'Submit proposals',
      description: 'Propose your rates, set clear deliverables, and start chatting directly with hiring managers.'
    },
    {
      num: '04',
      title: 'Secure collaborations',
      description: 'Work seamlessly with built-in milestones, secure escrow payments, and feedback loop integrations.'
    }
  ]

  return (
    <div className='bg-white dark:bg-gray-900 py-24'>
      <div className='container px-6 mx-auto'>
        <div className='max-w-xl mb-16'>
          <p className='text-xs font-semibold tracking-widest text-gray-400 uppercase'>Process</p>
          <h2 className='mt-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl'>
            How the platform connects you
          </h2>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className='relative group flex flex-col justify-between p-8 border border-gray-100 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900 hover:border-gray-200 dark:hover:border-gray-700 transition-colors duration-300'
            >
              <div>
                <span className='block text-4xl font-light text-gray-200 dark:text-gray-800 group-hover:text-gray-400 dark:group-hover:text-gray-600 transition-colors duration-300'>
                  {step.num}
                </span>
                <h3 className='mt-4 text-lg font-medium text-gray-900 dark:text-gray-100'>
                  {step.title}
                </h3>
              </div>
              <p className='mt-4 text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
