import Header from "@/components/Header";
import { SignIn, currentUser } from "@clerk/nextjs";
import Link from 'next/link'
 

export default async function Page() {
  const user  = await currentUser();
  return (
    <div>
      <div className="w-full mx-auto">
        <Header />
        <div className="flex justify-center">
          <SignIn />;
        </div>
      </div>
    </div>
  );
}
