"use client";
import React from "react";
import Link from "next/link";
import { IoIosSend } from "react-icons/io";
import { FiDownload } from "react-icons/fi";

function Transmission() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      <a
        href={"/CV_Bredcly_Tuhuleruw_FullStack.pdf"}
        download={"CV_Bredcly_Tuhuleruw_FullStack.pdf"}
        className="fixed right-4 bottom-[calc(16px+env(safe-area-inset-bottom))] z-50 min-h-11 min-w-[140px] justify-center px-4 py-3 rounded-full ring-1 ring-black bg-black text-white bg-opacity-90 flex items-center text-sm sm:text-base lg:text-lg shadow-lg hover:scale-[1.05]"
      >
        Download CV <FiDownload className="text-2xl ml-2" />
      </a>
      <Link
        href={"/contact"}
        className="min-h-11 min-w-[120px] justify-center px-4 py-3 rounded-full flex items-center text-sm sm:text-base lg:text-lg bg-white text-white bg-opacity-40 hover:scale-[1.05]"
      >
        Contact Me <IoIosSend className="text-2xl ml-2" />
      </Link>
    </div>
  );
}

export default Transmission;
