"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { api } from "~/trpc/react";
// import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [Message, setMessage] = useState("");
  const [From, setFrom] = useState("");
  const text = "Say Hello";

  const SendMail = api.contact.sendMail.useMutation();
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
            SendMail.mutate({ from: From, message: Message });
          }}
          className="flex h-1/2 flex-col justify-center gap-8 rounded-xl  bg-secondary p-24 text-xl lg:h-full lg:w-1/2"
        >
          <span>Dear Vishal,</span>
          <textarea
            rows={6}
            className="resize-none border-b-2 border-b-primary bg-transparent outline-none"
            name="user_message"
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="border-b-2 border-b-primary bg-transparent outline-none"
            value={From}
            onChange={(e) => setFrom(e.target.value)}
          />
          <span>Regards</span>
          <button
            type="submit"
            className="btn  btn-primary rounded  p-4 font-semibold hover:bg-accent"
          >
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
