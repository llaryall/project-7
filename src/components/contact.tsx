import Image from "next/image";
export default function Contact() {
  const contanctTheme = "lg:text-[12px] md:text-[9px] sm:text-[6px] text-[#4D6BB9]";
  const contactdivTheme = "flex flex-row gap-10";
  const inputTheme = "bg-[#9FB1DE] lg:p-2 rounded-3xl md:p-1 sm:p-0";

  return (
    <>
      <div className="flex flex-col flex-wrap items-center  w-screen bg-[#F2F2F2] lg:gap-12 md:gap-8 md:h-80 lg:h-[350px] md:mt-[390px] lg:mt-[460px] sm:mt-[300px] sm:h-60 sm:gap-6">
        {/* Contact Us Heading */}
        <h1 className="font-extrabold mt-10 text-[#4D6BB9] md:text-4xl lg:text-5xl sm:text-3xl">
          Contact Us
        </h1>

        <div className="flex flex-row justify-center gap-20 w-screen">
          {/* Input Fields Section */}
          <div className="flex flex-col lg:gap-3 md:gap-3 sm:gap-2 ml-20 w-[20%]">
            <input className={inputTheme} type="text" placeholder="Name" />
            <input className={inputTheme} type="email" placeholder="Email" />
            <input
              className={inputTheme}
              type="number"
              placeholder="Phone Number"
            />
            <button className="bg-[#9FB1DE] text-[12px] w-[40%] ml-[30%] rounded-3xl lg:p-3 md:p-2">
              Submit
            </button>
          </div>

          {/* Contact Details Section */}
          <div className="flex flex-col gap-4 md:mt-4 lg:mt-6">
            <div className={contactdivTheme}>
              <Image src="/Email.svg" width={20} height={20}></Image>
              <p className={contanctTheme}>test@gmail.com</p>
            </div>
            <div className={contactdivTheme}>
              <Image src="/Phone.svg" width={20} height={20}></Image>
              <p className={contanctTheme}>(303) 555-0105</p>
            </div>
            <div className={contactdivTheme}>
              <Image src="/Location.svg" width={20} height={20}></Image>
              <p className={contanctTheme}>
                2715 Ash Dr. San Jose, South Dakota 83475
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
