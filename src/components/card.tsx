import Image from "next/image";

export default function Card({ image }) {
  return (
    <>
      <div className="flex flex-col gap-5 bg-[#FFFFFF] rounded-3xl drop-shadow-2xl lg:mt-5 lg:w-72 lg:h-[370px] md:w-56 md:h-[300px] sm:w-44 sm:h-[230px] sm:mt-4">
        {/* Image Section */}
        <div>
          <Image src={image} width={300} height={300} alt="cardImage"></Image>

          {/* Text Section */}
          <div className="p-5 w-[90%]">
            {/* Title  */}
            <h1 className="font-bold text-[#4D6BB9] md:text-[12px] lg:text-[13px] sm:text-[10px]">
              Lorem Ipsum
            </h1>
            {/* Description  */}
            <p className="mt-2 lg:text-[11px] md:text-[9px] sm:text-[6px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
