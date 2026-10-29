"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MapChart from "@/components/MapChart";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="min-h-full overflow-x-hidden"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-full flex flex-col lg:flex-row gap-6 lg:gap-0 px-4 py-6 sm:px-8 md:px-12 lg:px-20 xl:px-48 lg:py-4">
        {/* Map */}
        <div className="h-[220px] sm:h-[280px] lg:h-full lg:w-1/2 flex-shrink-0 flex items-center justify-center text-6xl p-2">
          <MapChart />
        </div>

        {/* Contact Form */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-auto min-h-[620px] lg:min-h-0 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-6 justify-center p-6 sm:p-8 lg:p-24"
        >
          {/* Animated Title */}
          <div className="text-center text-2xl sm:text-2xl lg:text-6xl mb-4 text-gray-900">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 0.55, 1] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>

          {/* Message */}
          <span className="text-sm sm:text-base">Dear Bradley,</span>
          <textarea
            rows={4}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none text-sm sm:text-base"
            name="user_message"
            placeholder="Your message..."
          />

          {/* Sender Email */}
          <span className="text-sm sm:text-base">My mail address is:</span>
          <input
            name="user_email"
            type="email"
            placeholder="Your email"
            className="bg-transparent border-b-2 border-b-black outline-none text-sm sm:text-base"
          />

          {/* Your Email (fixed) */}
          <span className="text-sm sm:text-base">Bradley's e-mail address</span>
          <input
            type="text"
            placeholder="bredley.tuhuleruw@gmail.com"
            className="bg-transparent border-b-2 border-b-black outline-none text-sm sm:text-base"
            disabled
          />

          {/* Regards */}
          <span className="text-sm sm:text-base">Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-3 sm:p-4 text-sm sm:text-base">
            Send
          </button>

          {/* Status Messages */}
          {success && (
            <span className="text-green-600 font-semibold text-sm sm:text-base text-center">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold text-sm sm:text-base text-center">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
