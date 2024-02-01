import FileUpload from "@/components/FileUpload";
import Header from "@/components/Header";
import { UserButton, UserProfile, currentUser } from "@clerk/nextjs";
import Link from "next/link";

export default async function Page() {
  const user = await currentUser();

  if (!user) return <div>Not logged in</div>;

  return (
    <div className="m-4 h-[91vh] ">
      <div className="  flex justify-center md:mt-5 mt-10 ">
        <Link href="/">
          <div className="bg-green-700 cursor-pointer border-2 border-green-800 flex p-4 rounded-full shadow-lg hover:bg-green-800 transition">
            <div className="flex items-center space-x-2 ">
              <button>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3845/3845868.png"
                  alt="Logo"
                  className=" w-6 md:w-9 mx-2"
                />
              </button>
            </div>
            <div className="text-xl md:text-3xl font-extrabold text-white hover:text-gray-100">
              REPORT ANALYZER
            </div>
          </div>
        </Link>
      </div>
      <div className="flex justify-between mx-2 md:mt-0 mt-5 md:mx-10 items-center">
        <div className="text-base md:text-2xl font-bold text-gray-800 bg-white p-2 shadow-md border-2 border-gray-100 bg-opacity-55 rounded-full">
          Hello there {user?.firstName} 👋
        </div>
        <div className="border-2 border-black rounded-full ">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <div className="flex justify-center mt-12 md:mt-20 ">
        <FileUpload />
      </div>
    </div>
  );
}
