import React from "react";

const Banner9 = () => {
  return (
    <div  id="Support" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-black to-green-700  gap-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-white">Get in Touch</h1>
        <p className="text-gray-100">
          Feel free to reach out to us anytime – your questions and feedback are always welcome!
        </p>
      </div>
      <div className="container mx-auto px-4 gap-14">
        <div className="flex flex-wrap lg:flex-nowrap bg-white shadow-lg rounded-lg">
          {/* Map Section */}
          <div className="w-full lg:w-1/2 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8380273370235!2d90.42294177402806!3d23.788781487304334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7db6c941153%3A0xff8d39bc125b6ea5!2sSTATA%20IT%20LIMITED!5e0!3m2!1sen!2sbd!4v1733985715742!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Location Map"
            ></iframe>
          </div>

          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2 p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
                  Phone*
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Your phone number"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="comment">
                  Comment*
                </label>
                <textarea
                  id="comment"
                  placeholder="Your message"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
                  rows="4"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner9;