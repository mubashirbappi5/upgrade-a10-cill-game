import React from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <div>
           <section className=" text-gray-800 py-6 px-6">
            <div className="border-2 border-sky-200 bg-sky-50 rounded-xl p-10 shadow-sm my-7">
        <h1 className="text-3xl font-bold text-center text-sky-600">
        We're Here to Help
        </h1>
     
      </div>
      <div className="max-w-6xl mx-auto text-center">
       
        <p className="text-lg dark:text-white mb-12">
          Have questions or need assistance? Our support team is here to ensure
          you have the best experience with CILL Gamer. Choose a method below to
          get in touch with us!
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">📧 Email Support</h3>
          <p className="mb-4">
            Send us an email with your queries, and our team will respond
            promptly.
          </p>
          <a
            href="mailto:support@cillgamer.com"
            className="text-blue-600 hover:underline font-medium"
          >
            support@cillgamer.com
          </a>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">💬 Live Chat</h3>
          <p className="mb-4">
            Chat with our support team in real time to resolve your issues.
          </p>
          <div className="tooltip" data-tip="Coming soon">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Start Chat
          </button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">📞 Call Us</h3>
          <p className="mb-4">
            Reach out to us directly through our support hotline for urgent
            assistance.
          </p>
          <a
            href="tel:+1234567890"
            className="text-blue-600 hover:underline font-medium"
          >
            01851516736
          </a>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">🗂️ Knowledge Base</h3>
          <p className="mb-4">
            Browse our articles, FAQs, and tutorials for self-help guidance.
          </p>
          <Link to={'/#faq'} className="bg-blue-600 btn text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Visit Knowledge Base
          </Link>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">💡 Submit a Ticket</h3>
          <p className="mb-4">
            Have a specific issue? Submit a support ticket and track its
            progress.
          </p>
          <div className="tooltip" data-tip="Coming soon">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
            Submit Ticket
          </button>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-3">🌐 Social Media</h3>
          <p className="mb-4">
            Connect with us on social media for updates and quick responses.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/mubashirbappi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Facebook
            </a>
            <a
              href="https://x.com/mubashirbappi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Twitter
            </a>
            <a
              href="https://www.facebook.com/mubashirbappi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
            
        </div>
    );
};

export default Support;