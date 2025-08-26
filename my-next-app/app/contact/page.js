"use client";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-teal-600 text-center">
        Get in Touch
      </h1>
      <p className="text-gray-600 mb-12 text-center max-w-xl">
        Have questions or feedback? Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8 md:p-12">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
              />
            </div>
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg px-4 py-3 h-40 focus:outline-none focus:ring-2 focus:ring-teal-400 transition resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-teal-600 transition shadow-md"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 flex flex-col gap-6 text-gray-700">
            <div className="flex items-center gap-3">
              <span className="text-teal-500 text-xl">📍</span>
              <p>123 Fashion Street, City, Country</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-teal-500 text-xl">📧</span>
              <p>contact@clothify.com</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-teal-500 text-xl">📞</span>
              <p>+123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-96 md:h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019071720143!2d-122.4194156846816!3d37.77492977975945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f54c6dcb%3A0x7c19c40f6e1de4b3!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1692888325742!5m2!1sen!2sus"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
