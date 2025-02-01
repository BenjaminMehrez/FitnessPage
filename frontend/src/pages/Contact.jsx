// src/pages/Contact.jsx
import HeroContact from "../components/Hero/HeroContact";
import contactimg from "/imgcontact.jpg";

function Contact() {
  return (
    <>
      <HeroContact />
      <section className="flex items-center bg-gray-200 min-h-screen">
        <div className="my-10 sm:my-0 max-w-7xl mx-auto flex flex-col lg:flex-row px-10 lg:px-0">
          <div className="rounded-l-lg shadow-lg bg-white p-10 max-w-130">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Contact Us</h1>
            <p className="text-gray-600 mt-4">
              We'd love to hear from you! If you have any questions, comments,
              or just want to say hello, please feel free to get in touch. We're
              here to help.
            </p>
            <form className="space-y-6 mt-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
                  placeholder="Enter Name"
                  required
                />
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
                  placeholder="Enter Email"
                  required
                />
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
                  placeholder="Enter Subject"
                  required
                />
                <input
                  type="text"
                  id="number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
                  placeholder="Enter Number"
                  required
                />
              </div>
              <textarea
                id="message"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-lime-400 cursor-pointer text-black py-3 rounded-lg font-semibold text-lg transition duration-300 hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-300"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
          <div className="hidden lg:block">
            <img src={contactimg} alt="Gym Image" className="h-160 object-cover rounded-r-lg brightness-90" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
