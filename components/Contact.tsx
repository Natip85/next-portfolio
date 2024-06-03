import { Element } from "react-scroll";

export default function Contact() {
  return (
    <Element name="Contact">
      <div className="pt-[5rem] pb-[3rem] bg-gray-900">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center w-[80%] mx-auto">
          <div>
            <p className="heading_mini">Get in Touch</p>
            <h1 className="heading_primary">
              Let&apos;s make your{" "}
              <span className="text-yellow-400">Brand</span> brilliant
            </h1>
            <p className="text-white text-[15px] mt-[1rem] opacity-75">
              I&apos;m always excited to collaborate on new projects and bring
              creative ideas to life. Whether you have a question, need a quote,
              or just want to chat about web development, feel free to reach
              out. Let&apos;s work together to make your brand shine and create
              something amazing. Drop me a message and let&apos;s get started on
              your next big idea!
            </p>
            <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold">
              +972 52 753 3703
            </h1>
          </div>
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
              <input
                type="text"
                placeholder="Name"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            ></textarea>
            <button className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
}
