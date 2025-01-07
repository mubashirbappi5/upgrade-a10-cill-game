import React from 'react';


const Blog = () => {
    return (
        <div>
           <section className=" sm:py-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
  <div className="container p-6 mx-auto space-y-8">
    <div className="space-y-2 text-center">
      <h2 className="text-3xl font-bold">Latest from CILL Gamer</h2>
      <p className="font-serif text-sm text-gray-600 dark:text-gray-400">
        Stay updated with the latest trends, tips, and insights from the world of gaming.
      </p>
    </div>
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
      <article className="flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <a href="#" aria-label="Explore the latest updates">
          <img
            alt="CILL Gamer Update"
            className="object-cover w-full h-52"
            src="https://i.ibb.co.com/zbPjL9w/images.png"
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <a
            href="#"
            className="text-xs tracking-wider uppercase text-violet-600 dark:text-violet-400 hover:underline"
          >
            Update
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            Top Strategies for Competitive Gaming
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 dark:text-gray-400">
            <span>January 5, 2025</span>
            <span>3.1K views</span>
          </div>
        </div>
      </article>
      <article className="flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <a href="#" aria-label="Explore the latest updates">
          <img
            alt="CILL Gamer Update"
            className="object-cover w-full h-52"
            src="https://i.ibb.co.com/YdWRhCQ/download-13.jpg"
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <a
            href="#"
            className="text-xs tracking-wider uppercase text-violet-600 dark:text-violet-400 hover:underline"
          >
            Tips
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            How to Build Your Ultimate Gaming Setup
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 dark:text-gray-400">
            <span>January 4, 2025</span>
            <span>2.8K views</span>
          </div>
        </div>
      </article>
      <article className="flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <a href="#" aria-label="Explore the latest updates">
          <img
            alt="CILL Gamer Update"
            className="object-cover w-full h-52"
            src="https://i.ibb.co.com/FnyYDn9/download-14.jpg"
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <a
            href="#"
            className="text-xs tracking-wider uppercase text-violet-600 dark:text-violet-400 hover:underline"
          >
            Events
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            Upcoming Gaming Tournaments in 2025
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 dark:text-gray-400">
            <span>January 3, 2025</span>
            <span>3.5K views</span>
          </div>
        </div>
      </article>
      <article className="flex flex-col bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <a href="#" aria-label="Explore the latest updates">
          <img
            alt="CILL Gamer Update"
            className="object-cover w-full h-52"
            src="https://i.ibb.co.com/6FpRqc0/download-15.jpg"
          />
        </a>
        <div className="flex flex-col flex-1 p-6">
          <a
            href="#"
            className="text-xs tracking-wider uppercase text-violet-600 dark:text-violet-400 hover:underline"
          >
            News
          </a>
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            Exploring the Future of VR in Gaming
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 dark:text-gray-400">
            <span>January 2, 2025</span>
            <span>4.1K views</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>

            
        </div>
    );
};

export default Blog;