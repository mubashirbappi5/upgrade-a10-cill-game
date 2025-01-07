import React from 'react';

const About = () => {
    return (
        <div>
            <div className="border-2 border-sky-200 bg-sky-50 rounded-xl p-10 shadow-sm my-7">
        <h1 className="text-3xl font-bold text-center text-sky-600">
        About CILL Gamer
        </h1>
     
      </div>
      <section className="dark:bg-gray-900 dark:text-white py-10 px-6">
      <div className=" text-center">
        <h2 className="text-3xl font-bold mb-6"></h2>
        <p className="text-center mb-8">
          <strong>CILL Gamer</strong> is an innovative gaming platform designed
          to bring gamers together in a dynamic and immersive environment.
          Whether you're a casual player or a competitive enthusiast, CILL
          Gamer provides a space where you can explore, connect, and play.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        <div className="dark:bg-gray-800 dark:text-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-3">🎮 Diverse Game Library</h3>
          <p>
            Access a wide range of games tailored for different genres and skill
            levels.
          </p>
        </div>
        <div className="dark:bg-gray-800 dark:text-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-3">⚡ Seamless Experience</h3>
          <p>
            Enjoy fast, reliable, and responsive gameplay with a modern user
            interface.
          </p>
        </div>
        <div className="dark:bg-gray-800 dark:text-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-3">🤝 Community Engagement</h3>
          <p>
            Connect with other gamers, share achievements, and compete on
            leaderboards.
          </p>
        </div>
        <div className="dark:bg-gray-800 dark:text-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-3">📱 Cross-Platform Support</h3>
          <p>
            Play on any device with ease, thanks to our responsive design and
            cutting-edge technology.
          </p>
        </div>
        <div className="dark:bg-gray-800 dark:text-white rounded-lg p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-3">🔒 Secure and Scalable</h3>
          <p>
            Built with robust backend support hosted on Vercel for smooth
            performance and data security.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center mt-12">
        <h3 className="text-2xl font-bold mb-4">Built With</h3>
        <ul className="list-disc list-inside text-lg">
          <li>
            <strong>Frontend</strong>: Built using React.js for a seamless user
            interface.
          </li>
          <li>
            <strong>Backend</strong>: Powered by an Express.js server, hosted on
            Vercel, ensuring high availability and performance.
          </li>
          <li>
            <strong>Data Handling</strong>: Integrates with REST APIs to fetch
            and manage game data dynamically.
          </li>
        </ul>
        <p className="text-lg mt-6">
          Our goal is to provide a unified gaming experience that caters to the
          needs of gamers while embracing cutting-edge technology and
          innovation.
        </p>
      </div>
    </section>
            
        </div>
    );
};

export default About;