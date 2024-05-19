"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef<HTMLFormElement>(null);

  // const sendEmail = (e) => {
  //   e.preventDefault();
  //   setError(false);
  //   setSuccess(false);

  //   emailjs
  //     .sendForm(
  //       process.env.NEXT_PUBLIC_SERVICE_ID,
  //       process.env.NEXT_PUBLIC_TEMPLATE_ID,
  //       form.current,
  //       process.env.NEXT_PUBLIC_PUBLIC_KEY
  //     )
  //     .then(
  //       () => {
  //         setSuccess(true);
  //         form.current.reset();
  //       },
  //       () => {
  //         setError(true);
  //       }
  //     );
  // };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="flex h-full flex-col px-4 sm:px-8 md:px-12 lg:flex-row lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="flex h-1/2 items-center justify-center text-6xl lg:h-full lg:w-1/2">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={() => {
            console.log("uruygf");
          }}
          ref={form}
          className="flex h-1/2 flex-col justify-center gap-8 rounded-xl  bg-secondary p-24 text-xl lg:h-full lg:w-1/2"
        >
          <span>Dear Vishal,</span>
          <textarea
            rows={6}
            className="resize-none border-b-2 border-b-primary bg-transparent outline-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="border-b-2 border-b-primary bg-transparent outline-none"
          />
          <span>Regards</span>
          <button className="rounded  p-4 font-semibold  btn btn-primary hover:bg-accent">
            Send
          </button>
          {success && (
            <span className="font-semibold text-green-600">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="font-semibold text-red-600">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
