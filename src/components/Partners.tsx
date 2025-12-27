import WTMLogoGenerator from "./ui/WTMLogoGenerator";

export default function Partners() {
  return (
    <div className="px-[20px] md:px-[60px] py-[20px] md:py-12 max-w-[1200px] mx-auto text-center">
      <h3 className="my-7 p-0 text-[28px] md:text-[32px] leading-[30px]">
        Partners
      </h3>
      {/* <h4 className="mb-3 mt-[26.6px] text-xl">Community Partner</h4>
      <div className="flex gap-x-16">
        <div className="w-[120px] h-[100px]">
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*4YZ4tOc5oRs_Ksx-R_WFMw.png"
            className="w-full h-full object-contain"
            alt="Google Developer Groups | Vizag"
          />
        </div>
      </div> */}
      <div className="flex flex-wrap gap-12 w-max mx-auto">
        <div className="w-max">
          <h4 className="opacity-50 mt-[26.6px] text-xl">Venue Partner</h4>
          <div className="w-[120px] h-[100px]">
            <a href="https://gitam.edu">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/d/da/GITAM_logo.svg/1200px-GITAM_logo.svg.png"
                className="w-full h-full object-contain"
                alt="GITAM"
              />
            </a>
          </div>
        </div>
        <div className="w-max">
          <h4 className="opacity-50 mt-[26.6px] text-xl">Tech Partner</h4>
          <div className="w-[120px] h-[100px]">
            <a href="https://theananta.in">
              <img
                src="/partners/the_ananta_logo_white.svg"
                className="w-full h-full object-contain"
                alt="The Ananta Studio™️ 2024"
              /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
