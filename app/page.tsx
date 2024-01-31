import Image from "next/image";
import Header from "../components/Header";
import About from "../components/About";
import FooterComp from "../components/FooterComp";
export default function Home() {
  return (
    <div className="h-full w-full ">
      <div className="m-5">
        <Header />
        <About />
        <div>
          <FooterComp/>
        </div>
      </div>
    </div>
  );
}
