import React from 'react'

const CareerResources = () => {
  const articles = [
    {
      id: 1,
      category: 'Freelancing',
      title: 'How to Write the Perfect Bid Proposal That Gets You Hired',
      excerpt: 'Struggling to win jobs? Learn the top strategies to write proposals that clients cannot ignore, from greetings to milestones.',
      date: 'July 5, 2026',
      readTime: '5 min read',
      author: 'Afsana Mimi'
    },
    {
      id: 2,
      category: 'Career Advice',
      title: 'Top 10 High-Demand Remote Tech Skills to Learn in 2026',
      excerpt: 'From Next.js and Tailwind CSS to AI model integration, we explore the tech stack you need to secure high-paying remote roles.',
      date: 'June 28, 2026',
      readTime: '7 min read',
      author: 'Kazi Farhan'
    },
    {
      id: 3,
      category: 'Guides',
      title: 'Common Interview Mistakes and How to Avoid Them Easily',
      excerpt: 'Prepare like a pro! Avoid these classic traps during virtual interviews, and confidently negotiate your expected salary.',
      date: 'June 15, 2026',
      readTime: '6 min read',
      author: 'Imtiaz Ahmed'
    }
  ]

  return (
    <div className='bg-white dark:bg-gray-950 py-24'>
      <div className='container px-6 mx-auto'>
        <div className='flex flex-col md:flex-row md:items-end justify-between mb-16'>
          <div className='max-w-xl'>
            <p className='text-xs font-semibold tracking-widest text-gray-400 uppercase'>Resources & Insights</p>
            <h2 className='mt-2 text-3xl font-normal tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl'>
              Guides to help you grow
            </h2>
          </div>
          <button className='mt-4 md:mt-0 text-xs font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 border-b border-gray-900 dark:border-gray-100 pb-1 transition-colors duration-200'>
            Explore all guides &rarr;
          </button>
        </div>

        <div className='grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3'>
          {articles.map(article => (
            <div key={article.id} className='flex flex-col justify-between group cursor-pointer'>
              <div>
                <div className='flex items-center gap-3 text-xs text-gray-400 font-medium uppercase tracking-wider mb-4'>
                  <span>{article.category}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className='text-xl font-normal text-gray-900 dark:text-gray-100 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-200 leading-snug'>
                  {article.title}
                </h3>
                <p className='text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed font-light line-clamp-3'>
                  {article.excerpt}
                </p>
              </div>
              
              <div className='mt-8 pt-4 border-t border-gray-100 dark:border-gray-900 flex items-center justify-between'>
                <span className='text-xs text-gray-400 font-medium'>
                  By {article.author}
                </span>
                <span className='text-xs text-gray-900 dark:text-gray-100 font-semibold group-hover:underline'>
                  Read article &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CareerResources
