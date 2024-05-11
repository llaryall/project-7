import Image from "next/image";
import Rectangle from "../../public/Rectangle 252.svg";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="relative flex w-screen">
        {/* Background Image */}
        <img src="/Rectangle 252.svg" alt="headerBackground" />

        {/* Logo Image */}
        <Link href="/">
          <Image
            className="absolute inline top-10 z-10 lg:left-52 lg:w-[400px] md:left-36 md:w-[270px] sm:w-[200px] sm:left-32"
            src="/Group 564.svg"
            alt="logo"
            width={0}
            height={0}
          />
        </Link>

        {/* Blue Container */}
        <div className="absolute bottom-0 flex flex-col justify-between bg-[#4D6BB9] rounded-tr-2xl lg:w-[570px] lg:h-[320px] md:w-[390px] md:h-[220px] sm:w-[320px] sm:h-[180px]">
          {/* Title */}
          <h1 className="self-end mt-10 text-white font-bold lg:mr-16 lg:text-[45px] md:text-3xl md:mr-10 sm:text-2xl sm:mr-7">
            Moving service
          </h1>

          {/* Description */}
          <div className="self-center lg:w-[48%] lg:ml-20 md:w-[55%] md:ml-24 sm:w-[50%] sm:ml-20 ">
            <p className="text-white lg:text-[10px] md:text-[8px] sm:text-[5px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-10 lg:ml-10 md:ml-20 sm:ml-20">
            <button className="p-3 pl-8 pr-8 font-bold text-black bg-[#EFD063] rounded-tl-2xl rounded-tr-2xl lg:text-[11px] md:text-[8px] md:p-2 md:pl-6 md:pr-6 sm:text-[6px] sm:p-2 sm:pr-5 sm:pl-5 hover:bg-[#ffe278] transition-colors">
              I Need Help
            </button>
            <button className="items-end font-bold text-white lg:text-[11px] md:text-[8px] sm:text-[6px] hover:font-extrabold ">
              What the services
            </button>
          </div>
        </div>

        {/* White Container */}
        <div className="absolute flex flex-col justify-between bg-[#FFFFFF] rounded-3xl drop-shadow-2xl lg:w-[440px] lg:h-[300px] lg:right-52 lg:-bottom-32 md:w-[310px] md:h-[240px] md:right-40 md:-bottom-28 sm:w-[260px] sm:h-[200px] sm:right-24 sm:-bottom-24">
          {/* Title */}
          <h1 className="self-end text-[#4D6BB9] font-bold lg:mt-12 lg:text-5xl lg:mr-20 md:text-3xl md:mt-7 md:mr-20 sm:text-2xl sm:mr-20 sm:mt-10">
            Lorem Ipsum
          </h1>

          {/* Description */}
          <div className="self-center mr-4 lg:w-[70%] lg:h-[50%] md:w-[67%] md:h-[50%] sm:w-[70%] sm:h-[45%]">
            <p className="p-2 lg:pt-5 lg:text-[10px] md:text-[8px] sm:text-[6px] sm:pt-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-start gap-8 lg:ml-16 md:ml-12 sm:ml-10">
            <button className="p-3 pl-8 pr-8 font-bold text-white bg-[#4D6BB9] rounded-tl-2xl rounded-tr-2xl lg:text-[11px] md:text-[8px] md:p-2 md:pl-6 md:pr-6 sm:text-[6px] sm:p-2 sm:pr-5 sm:pl-5 hover:bg-[#678ae3] transition-colors">
              I Need Help
            </button>
            <button className="items-end font-bold text-[#4D6BB9] lg:text-[12px] md:text-[8px] sm:text-[6px] hover:font-extrabold ">
              What the services
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
