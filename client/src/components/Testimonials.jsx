import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: 'Solosphere completely transformed my freelance career. I landed three long-term contracts in my first month itself. The bidding process is transparent and the payout was seamless.',
      name: 'Sarah Rahman',
      role: 'Full Stack Engineer'
    },
    {
      id: 2,
      quote: 'Finding quality talent for our marketing campaigns used to take weeks. With Solosphere, we posted a job and received five high-quality proposals within a few hours.',
      name: 'Michael Davis',
      role: 'Marketing Director, TechVibe'
    },
    {
      id: 3,
      quote: 'As a graphic designer, I love the UI of this platform. It is clean, responsive, and allows me to display my bids beautifully. Managing files and milestone chats is very intuitive.',
      name: 'Emily Chen',
      role: 'UI/UX Designer'
    }
  ]

  return (
    <div className='bg-white dark:bg-gray-900 py-24 border-y border-gray-100 dark:border-gray-900'>
      <div className='container px-6 mx-auto'>
        <div className='max-w-xl mb-16'>
          <p className='text-xs font-semibold tracking-widest text-gray-400 uppercase'>Success Stories</p>
          <h2 className='mt-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl'>
            Trusted by professionals worldwide
          </h2>
        </div>

        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map(item => (
            <div 
              key={item.id} 
              className='bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-100 dark:border-gray-800 flex flex-col justify-between hover:border-gray-200 dark:hover:border-gray-700 transition-colors duration-300'
            >
              <p className='text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light italic'>
                "{item.quote}"
              </p>
              
              <div className='mt-8 pt-6 border-t border-gray-50 dark:border-gray-900/50 flex items-center justify-between'>
                <div>
                  <h4 className='text-sm font-semibold text-gray-800 dark:text-gray-200'>{item.name}</h4>
                  <p className='text-xs text-gray-400 font-normal mt-0.5'>{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
