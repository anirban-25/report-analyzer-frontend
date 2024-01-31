
import React from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";

const FooterComp = () => {
  return (
    <div className="md:m-5 w-full rounded-lg md:px-10 5 flex justify-center font-extrabold">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="mt-10 bg-white bg-opacity-15 rounded-lg hover:scale-105 transition hover:bg-opacity-25 shadow-xl">
          <div className="">
            <div className="flex justify-center font-bold text-base md:text-2xl pt-5 tracking-wide">
              ABOUT US
            </div>
            <div className="flex justify-center">
              <div className="p-2 md:p-5 text-green-900 md:text-base text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam,
                vero non accusamus ad sit ipsam architecto blanditiis repellat
                harum pariatur!
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-white bg-opacity-15 rounded-lg hover:scale-105 transition hover:bg-opacity-25 shadow-xl">
          <div className="flex justify-center font-bold text-base md:text-2xl pt-5 tracking-wide">
            CONTACT US
          </div>
          <div className="flex justify-center">
            <div className="p-2 md:p-5 text-green-900 md:text-base text-sm">
              You can contact us through our email podmara@gmail.com or through
              our phone number +69 912369123
            </div>
          </div>
        </div>
        <div className="mt-10 bg-white bg-opacity-15 rounded-lg hover:scale-105 transition hover:bg-opacity-25 shadow-xl">
          <div className="flex justify-center font-bold text-base md:text-2xl pt-5 tracking-wide">
            STEPS TO FOLLOW
          </div>
          <div className="flex justify-center">
            <div className="p-2 md:p-5 text-green-900 md:text-base text-sm">
              Just sign-up in our application and upload the pdf of the medical
              report in the mentioned area. We will provide you an analysis
              based on your report in no time ;)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
