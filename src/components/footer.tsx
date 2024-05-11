import Card from "./card";
import Contact from "./contact";
import Rectangle1 from "../../public/Rectangle 250 (1).svg";
import Rectangle2 from "../../public/Rectangle 250 (2).svg";
import Rectangle3 from "../../public/Rectangle 250.svg";

export default function Footer() {
  return (
    <>
      <div className="w-screen bg-[#4D6BB9] lg:mt-60 lg:h-32 md:h-32 md:mt-60 sm:mt-40 sm:h-24">
        {/* Header title */}
        <h1 className="font-bold text-4xl text-[#FFFFFF] lg:ml-48 lg:pt-7 md:pt-7 md:ml-20 sm:text-3xl sm:ml-20 sm:pt-4">
          Services
        </h1>

        {/* Cards */}
        <div className="flex flex-row lg:gap-5 md:gap-5 sm:gap-3 justify-center">
          <Card image={Rectangle3} />
          <Card image={Rectangle1} />
          <Card image={Rectangle2} />
        </div>

        {/* Button */}
        <button className="lg:text-[12px] m-12 lg:ml-[560px] text-white bg-[#4D6BB9] lg:p-4 lg:pl-8 lg:pr-8 rounded-[35px] md:p-3.5 md:pl-8 md:pr-8 md:text-[9px] md:ml-[400px] sm:text-[6px] sm:p-2 sm:pl-6 sm:pr-6 sm:ml-[300px] hover:bg-[#678ae3] transition-colors">
          Lorem Ipsum
        </button>
      </div>

      {/* Contact component */}
      <Contact />

      
      <div className="w-screen h-16 bg-[#2D3751]"></div>
    </>
  );
}
