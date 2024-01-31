import Link from "next/link";
import React from "react";
import { UserButton, UserProfile, currentUser } from "@clerk/nextjs";

export default async function About () {
  const user = await currentUser();
  return (
    <div className="md:m-5 w-full rounded-lg md:px-10 py-5 flex justify-center font-extrabold">
      <div className="max-w-[80%]">
        <div className="md:text-6xl">
          <div className="hidden lg:flex">WE HELP ANALYZE YOUR REPORTS</div>
          <div className="lg:hidden text-2xl flex justify-center">
            WE HELP ANALYZE
          </div>
          <div className="lg:hidden text-3xl flex justify-center">
            YOUR REPORTS
          </div>
          <span className="lg:hidden text-3xl flex justify-center">
            {" "}
            THROUGH <span className="text-green-900">&nbsp;NLP</span>
          </span>
          <div className="hidden lg:flex justify-center">
            THROUGH <div className="text-green-900">&nbsp;NLP</div>
          </div>
        </div>
        <div className="flex mx-10 md:m-0 justify-center text-green-200 text-xs md:text-base font-light mt-2">
          standing in a long queue at the doctor's office can be time consuming
        </div>
        <div className="flex justify-center text-lg md:text-3xl md:tracking-widest mt-5 text-white text-md font-semibold ">
          That's where we come in
        </div>
        <div className="md:flex justify-center md:tracking-wider  hidden  md:text-md text-gray-100 md:font-bold">
          Use our AI based NLP system to analyze your medical report
        </div>
        <div>
          <div className="">
            {user ? (
              <div className="flex justify-center">
                <Link href="/dashboard" className="bg-white bg-opacity-15 p-5 mt-10 hover:scale-105 transition shadow-lg rounded-full text-green-900">Go to dashboard page</Link>
              </div>
            ) : (
              <div class="mt-10 font-semibold ">
                <Link href="/sign-up" className="flex justify-center">
                  <button class=" rounded-full hover:scale-105 px-3 py-2 text-gray-300 transition hover:bg-green-700 shadow-md text-md md:text-2xl bg-black bg-opacity-15 w-64 cursor-pointer">
                    Register
                  </button>
                </Link>
                <p className="flex justify-center text-sm md:text-md mt-1">
                  already registered?
                  <Link
                    href="/sign-in"
                    className="underline text-green-900 cursor-pointer"
                  >
                    Login{" "}
                  </Link>
                  &nbsp; instead
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

