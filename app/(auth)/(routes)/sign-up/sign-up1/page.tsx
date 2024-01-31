import Header from "@/components/Header";
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full mx-auto">
      <Header />
      <div className="flex justify-center">
          <SignUp />;
      </div>
    </div>
  );
}
