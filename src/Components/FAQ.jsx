import React from 'react';

const FAQ = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
  <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
      How it works
    </p>
    <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
      Frequently Asked Questions
    </h2>
    <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
      <div>
        <h3 className="font-semibold">What is CILL Gamer?</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          CILL Gamer is an innovative platform designed to bring gamers
          together, offering a wide range of games, seamless experiences, and a
          vibrant community where players can connect, compete, and have fun.
        </p>
      </div>
      <div>
        <h3 className="font-semibold">How do I get started?</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Getting started with CILL Gamer is easy! Sign up for a free account,
          explore our game library, and start playing right away. We also
          provide tutorials to help you navigate the platform.
        </p>
      </div>
      <div>
        <h3 className="font-semibold">Is CILL Gamer free to use?</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Yes! CILL Gamer offers a free membership plan with access to numerous
          games. For exclusive features and premium content, we offer optional
          subscription plans at affordable prices.
        </p>
      </div>
      <div>
        <h3 className="font-semibold">How can I connect with other gamers?</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          You can connect with other gamers through our community features,
          including chat rooms, leaderboards, and multiplayer gaming. Join the
          fun and make new friends while playing your favorite games.
        </p>
      </div>
    </div>
  </div>
</section>

            
        </div>
    );
};

export default FAQ;