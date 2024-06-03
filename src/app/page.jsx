import Image from "next/image";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

export default function Page() {
  return (
    <div>
      <Navbar className=" " />
      <main>
        <div>
          <Home />
        </div>
        <div>
          <AboutUs />
        </div>
        <div>
          <Services />
        </div>
      </main>
    </div>
  );
}
