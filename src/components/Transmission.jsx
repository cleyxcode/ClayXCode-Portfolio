"use client";
import React from "react";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

function Transmission() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <a
        href={"cvclay.pdf"}
        download={"cvclay.pdf"}
        className="px-4 py-3 rounded-full ring-1 ring-black bg-black text-white bg-opacity-80 flex items-center text-sm sm:text-base hover:scale-[1.05]"
      >
        Download CV <FiDownload className="text-2xl ml-2" />
      </a>
      <Link
        href={"/contact"}
        className="px-4 py-3 rounded-full flex items-center text-sm sm:text-base bg-white text-white bg-opacity-40 hover:scale-[1.05]"
      >
        Contact Me <IoIosSend className="text-2xl ml-2" />
      </Link>
    </div>
  );
}

export default Transmission;
