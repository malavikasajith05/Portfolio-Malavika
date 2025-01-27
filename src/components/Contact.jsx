import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center ">
      <div className="flex flex-col items-center justify-center gap-8 max-w-4xl mx-auto px-6 py-12 bg-white rounded-xl shadow-lg shadow-amber-700">
        <h1 className="text-center text-5xl md:text-6xl font-semibold text-amber-800">
          <span className="bg-gradient-to-r from-amber-700 to-amber-400 bg-clip-text text-transparent">
            Get in Touch!
          </span>
        </h1>

        <p className="text-center text-xl md:text-2xl font-medium text-gray-600">
          Want to connect? Send me an email via the button below, and I'll respond to you as soon as I can.
        </p>

        <a
          href="mailto:malavikasajith5@gmail.com"
          className="flex items-center justify-center gap-3 rounded-lg border-2 border-amber-800 bg-amber-800 px-6 py-3 text-lg font-bold text-white shadow-xl shadow-amber-600 transition-all duration-300 hover:scale-105 hover:bg-amber-700 hover:shadow-amber-500"
        >
          <FaEnvelope className="text-white text-2xl" />
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Contact;


