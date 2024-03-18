import { useCallback } from "react";

const FrameComponent3 = () => {
  const onAstuteLexServicadoClick = useCallback(() => {
    // Please sync "Company Landing Page" to the project
  }, []);

  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[30px] box-border top-[0] z-[99] sticky max-w-full">
      <header className="flex-1 bg-mediumorchid flex flex-row items-start justify-between pt-5 pb-[17px] pr-[35px] pl-[11px] box-border max-w-full gap-[20px] text-center text-3xl text-black font-kiwi-maru">
        <div className="h-[72px] w-[1018px] relative bg-mediumorchid hidden max-w-full" />
        <h1
          className="m-0 w-[244px] relative text-inherit font-medium font-inherit inline-block whitespace-nowrap cursor-pointer z-[1]"
          onClick={onAstuteLexServicadoClick}
        >
          Astute Lex Servicado
        </h1>
        <div className="w-[610px] flex flex-row items-start justify-start gap-[30px] max-w-full">
          <div className="w-[123px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
            <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit inline-block min-w-[105px] z-[1]">
              Products
            </h1>
          </div>
          <div className="w-32 flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
            <h1 className="m-0 self-stretch relative text-inherit font-medium font-inherit inline-block min-w-[110px] z-[1]">
              Solutions
            </h1>
          </div>
          <h1 className="m-0 w-[103px] relative text-inherit font-medium font-inherit inline-block min-w-[103px] z-[1]">
            Discover
          </h1>
          <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-mid-8">
            <div className="self-stretch rounded-[15.69px] bg-plum flex flex-row items-start justify-start pt-0 pb-[15.199999999999989px] pr-[23px] pl-[30px] whitespace-nowrap z-[1]">
              <div className="h-[33px] w-[166px] relative rounded-[15.69px] bg-plum hidden" />
              <div className="h-[17.8px] flex-1 relative font-medium inline-block z-[2]">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default FrameComponent3;
