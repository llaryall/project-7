import Image from "next/image";

export default function Main() {
  return (
    <>
      <div className="relative flex justify-center w-screen mt-52">
        {/* About Us Section */}
        <div className="absolute inline lg:-top-24 lg:w-64 lg:left-52 md:-top-20 md:left-32 md:w-48 sm:w-32 sm:left-24 sm:-top-12">
          {/* Title */}
          <h1 className="mb-5 font-extrabold text-[#4D6BB9] lg:text-4xl md:text-3xl font-sans sm:text-2xl">
            About Us
          </h1>
          {/* Description */}
          <p className="text-left lg:text-[11px] md:text-[8px] sm:text-[5px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset
          </p>
        </div>

        {/* Image */}
        <img className="w-[68%] mr-9" src="/Union.svg" alt="" />

        {/* We are Family Section */}
        <div className="absolute flex flex-col justify-between bg-[#FFFFFF] rounded-3xl drop-shadow-2xl lg:w-[440px] lg:h-[300px] lg:right-[440px] lg:-bottom-48 md:w-[300px] md:h-[210px] md:right-[330px] md:-bottom-36 sm:w-[250px] sm:h-[160px] sm:-bottom-24 sm:right-[230px]">
          {/* Title */}
          <h1 className="self-end mt-10 mr-12 font-extrabold text-[#4D6BB9] lg:text-5xl md:text-3xl sm:mr-16">
            We are family
          </h1>
          {/* Description */}
          <div className="self-center ml-2 w-[60%] w-[85%]">
            <p className="text-center lg:text-[11px] md:text-[8px] sm:text-[5px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset
            </p>
          </div>
          <div className="flex items-center justify-center gap-10">
            <p className="p-3 pl-8 pr-8 font-bold text-white bg-[#4D6BB9] rounded-tl-2xl rounded-tr-2xl lg:text-[11px] md:text-[8px] md:p-2 md:pl-6 md:pr-6 sm:text-[6px] sm:p-2 sm:pr-5 sm:pl-5">
              Lorem Ipsum
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
