import { Element } from "react-scroll";
import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
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
            {/* <h1 className="mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold">
              +972 52 753 3703
            </h1> */}
            <a
              href="tel:+972527533703"
              className="block mt-[2rem] mb-[2rem] text-[30px] text-yellow-300 underline font-bold w-fit"
            >
              +972 52 753 3703
            </a>
          </div>
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/5e53288da9af531f27ea4abe61462f68"
            method="POST"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
              <input
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                  minLength: 2,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-red-500">
                  {errors.name.type === "required" &&
                    "Don't forget to submit your name!"}
                  {errors.name.type === "maxLength" &&
                    "Max length is 100 characters."}
                  {errors.name.type === "minLength" &&
                    "Min length is 2 characters."}
                </p>
              )}

              <input
                className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-500">
                  {errors.email.type === "required" &&
                    "A valid email address is required."}
                </p>
              )}
            </div>
            <input
              type="text"
              {...register("subject")}
              placeholder="SUBJECT"
              className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
            />

            <textarea
              className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
              placeholder="MESSAGE"
              rows={4}
              {...register("message", {
                required: true,
                maxLength: 2000,
                minLength: 10,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-red-500">
                {errors.message.type === "required" &&
                  "Make sure to send your detialed message!"}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 characters."}
                {errors.message.type === "minLength" &&
                  "Min length is 10 characters."}
              </p>
            )}
            <button
              type="submit"
              className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Element>
  );
}
