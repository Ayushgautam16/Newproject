import FrameComponent2 from "./frame-component2";

const FrameComponent1 = () => {
  return (
    <div className="w-[1005px] flex flex-row items-start justify-start py-0 px-[19px] box-border max-w-full text-center text-19xl-3 text-neutral-100 font-kiwi-maru">
      <div className="flex-1 rounded-21xl bg-gray-200 box-border flex flex-col items-start justify-start pt-3.5 px-[5px] pb-[61px] gap-[33px] max-w-full border-[2px] border-solid border-gray-100 mq700:gap-[16px_33px] mq450:pt-5 mq450:pb-10 mq450:box-border">
        <div className="self-stretch h-[437px] relative rounded-21xl bg-gray-200 box-border hidden border-[2px] border-solid border-gray-100" />
        <div className="w-[583px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[219px] relative font-medium inline-block z-[1] mq450:text-4xl mq950:text-12xl">
            Contact Us
          </div>
        </div>
        <div className="w-[927px] flex flex-row items-end justify-center gap-[28.800000000000185px] max-w-full text-left text-lg font-other-18-20-m mq950:flex-wrap">
          <div className="h-[245px] w-[291.6px] flex flex-col items-start justify-end pt-0 px-0 pb-[17.90000000000009px] box-border min-w-[291.5999999999999px] mq950:flex-1">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[39.899999999999864px] mq450:gap-[20px_39.9px]">
              <FrameComponent2
                name1="Name"
                frame40Placeholder="John Carter"
                group41="/group-41.svg"
              />
              <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[15.300000000000182px]">
                <h2 className="m-0 relative text-inherit leading-[20px] font-medium font-inherit shrink-0 [debug_commit:1cbd860] z-[1]">
                  Phone Number
                </h2>
                <div className="self-stretch flex-1 rounded-27xl bg-neutral-100 shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] flex flex-row items-start justify-between py-[18.09999999999991px] pr-[21px] pl-[21.299999999999955px] shrink-0 [debug_commit:1cbd860] z-[1] text-slategray border-[1px] border-solid border-neutral-300">
                  <div className="h-[59.7px] w-[291.6px] relative rounded-27xl bg-neutral-100 shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] box-border hidden border-[1px] border-solid border-neutral-300" />
                  <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                    <div className="relative leading-[20px] z-[2]">
                      (123) 456 - 7890
                    </div>
                  </div>
                  <img
                    className="h-[23.5px] w-[15.1px] relative z-[2]"
                    alt=""
                    src="/group.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-row items-end justify-start gap-[51px] min-w-[395px] max-w-full mq700:flex-wrap mq700:gap-[51px_25px] mq700:min-w-full">
            <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[17.90000000000009px] box-border min-w-[190px]">
              <div className="self-stretch h-[227.1px] flex flex-col items-start justify-start gap-[39.899999999999864px] mq450:gap-[20px_39.9px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16.300000000000182px]">
                  <h2 className="m-0 relative text-inherit leading-[20px] font-medium font-inherit inline-block min-w-[47.2px] shrink-0 [debug_commit:1cbd860] z-[1]">{`Email `}</h2>
                  <div className="self-stretch rounded-27xl bg-neutral-100 shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] flex flex-row items-start justify-between pt-[19.59999999999991px] pb-[22.000000000000227px] pr-[25px] pl-[20.59999999999991px] shrink-0 [debug_commit:1cbd860] z-[1] border-[1px] border-solid border-neutral-300">
                    <div className="h-[59.7px] w-[291.6px] relative rounded-27xl bg-neutral-100 shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] box-border hidden border-[1px] border-solid border-neutral-300" />
                    <input
                      className="w-[119.1px] [border:none] [outline:none] font-other-18-20-m text-lg bg-[transparent] h-[18.1px] relative leading-[20px] text-slategray text-left inline-block p-0 z-[2]"
                      placeholder="Email address"
                      type="text"
                    />
                    <div className="h-[17.5px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                      <img
                        className="w-[23.6px] h-[14.5px] relative z-[2]"
                        alt=""
                        src="/group-1.svg"
                      />
                    </div>
                  </div>
                </div>
                <FrameComponent2
                  name1="Company"
                  frame40Placeholder="Company name"
                  group41="/group-3984.svg"
                  propMinWidth="85.2px"
                  propWidth="135.5px"
                  propWidth1="14.9px"
                />
              </div>
            </div>
            <div className="h-[270px] w-[264px] flex flex-col items-end justify-start gap-[10px] min-w-[264px] text-center text-5xl font-kiwi-maru mq700:flex-1">
              <div className="flex flex-row items-start justify-end py-0 pr-[35px] pl-[39px]">
                <h1 className="m-0 w-[190px] relative text-inherit font-medium font-inherit inline-block z-[1] mq450:text-lgi">
                  Schedule a Call
                </h1>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-center justify-start z-[1] text-2xs text-darkgray font-inter">
                <div className="self-stretch overflow-hidden flex flex-row items-start justify-center pt-0 px-5 pb-1">
                  <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-2">
                    <div className="w-[42px] relative flex items-center justify-center min-w-[42px]">
                      January
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 overflow-hidden flex flex-col items-center justify-between">
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-between gap-[10.29px]">
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-1.5">
                      <div className="w-3 relative font-extralight flex items-center justify-center min-w-[12px]">
                        01
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[3.5px]">
                      <div className="w-[17px] relative flex items-center justify-center min-w-[17px]">
                        Mo
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center p-[5.5px]">
                      <div className="w-[13px] relative flex items-center justify-center min-w-[13px]">
                        Tu
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[3.5px]">
                      <div className="w-[17px] relative flex items-center justify-center min-w-[17px]">
                        We
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[5px]">
                      <div className="w-3.5 relative flex items-center justify-center min-w-[14px]">
                        Th
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[6.5px]">
                      <div className="w-[11px] relative flex items-center justify-center min-w-[11px]">
                        Fr
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[5px] text-cornflowerblue">
                      <div className="w-3.5 relative flex items-center justify-center min-w-[14px]">
                        Sa
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[5px] text-cornflowerblue">
                      <div className="w-3.5 relative flex items-center justify-center min-w-[14px]">
                        Su
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-between gap-[10.29px]">
                    <div className="rounded bg-darkslategray flex flex-row items-center justify-center py-[5.5px] px-[9.5px]">
                      <div className="w-[5px] relative font-extralight flex items-center justify-center min-w-[5px]">
                        1
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[9px]">
                      <div className="w-1.5 relative flex items-center justify-center min-w-[6px]">
                        1
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative flex items-center justify-center min-w-[7px]">
                        2
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-2">
                      <div className="w-2 relative flex items-center justify-center min-w-[8px]">
                        3
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-2">
                      <div className="w-2 relative flex items-center justify-center min-w-[8px]">
                        4
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative flex items-center justify-center min-w-[7px]">
                        5
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[8.5px] text-cornflowerblue">
                      <div className="w-[7px] relative flex items-center justify-center min-w-[7px]">
                        6
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[8.5px] text-cornflowerblue">
                      <div className="w-[7px] relative flex items-center justify-center min-w-[7px]">
                        7
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-between gap-[10.29px]">
                    <div className="rounded bg-darkslategray flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative font-extralight flex items-center justify-center min-w-[7px]">
                        2
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative flex items-center justify-center min-w-[7px]">
                        8
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative flex items-center justify-center min-w-[7px]">
                        9
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-1.5">
                      <div className="w-3 relative flex items-center justify-center min-w-[12px]">
                        10
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[6.5px]">
                      <div className="w-[11px] relative flex items-center justify-center min-w-[11px]">
                        11
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-1.5">
                      <div className="w-3 relative flex items-center justify-center min-w-[12px]">
                        12
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center p-[5.5px] text-cornflowerblue">
                      <div className="w-[13px] relative flex items-center justify-center min-w-[13px]">
                        13
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center p-[5.5px] text-cornflowerblue">
                      <div className="w-[13px] relative flex items-center justify-center min-w-[13px]">
                        14
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-between gap-[10.29px]">
                    <div className="rounded bg-darkslategray flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative font-extralight flex items-center justify-center min-w-[7px]">
                        3
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-1.5">
                      <div className="w-3 relative flex items-center justify-center min-w-[12px]">
                        15
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-1.5">
                      <div className="w-3 relative flex items-center justify-center min-w-[12px]">
                        16
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-1.5">
                      <div className="w-3 relative flex items-center justify-center min-w-[12px]">
                        17
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-1.5">
                      <div className="w-3 relative flex items-center justify-center min-w-[12px]">
                        18
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-1.5">
                      <div className="w-3 relative flex items-center justify-center min-w-[12px]">
                        19
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[5px] text-cornflowerblue">
                      <div className="w-3.5 relative flex items-center justify-center min-w-[14px]">
                        20
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-1.5 text-cornflowerblue">
                      <div className="w-3 relative flex items-center justify-center min-w-[12px]">
                        21
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-between gap-[10.29px]">
                    <div className="rounded bg-darkslategray flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative font-extralight flex items-center justify-center min-w-[7px]">
                        4
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[5px]">
                      <div className="w-3.5 relative flex items-center justify-center min-w-[14px]">
                        22
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[5px]">
                      <div className="w-3.5 relative flex items-center justify-center min-w-[14px]">
                        23
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[5px]">
                      <div className="w-3.5 relative flex items-center justify-center min-w-[14px]">
                        24
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[5px]">
                      <div className="w-3.5 relative flex items-center justify-center min-w-[14px]">
                        25
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[5px]">
                      <div className="w-3.5 relative flex items-center justify-center min-w-[14px]">
                        26
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center p-[5.5px] text-cornflowerblue">
                      <div className="w-[13px] relative flex items-center justify-center min-w-[13px]">
                        27
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[5px] text-cornflowerblue">
                      <div className="w-3.5 relative flex items-center justify-center min-w-[14px]">
                        28
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-between gap-[10.29px]">
                    <div className="rounded bg-darkslategray flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative font-extralight flex items-center justify-center min-w-[7px]">
                        5
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[5px]">
                      <div className="w-3.5 relative flex items-center justify-center min-w-[14px]">
                        29
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[5px]">
                      <div className="w-3.5 relative flex items-center justify-center min-w-[14px]">
                        30
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center p-[5.5px]">
                      <div className="w-[13px] relative flex items-center justify-center min-w-[13px]">
                        31
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[9px] text-dimgray">
                      <div className="w-1.5 relative flex items-center justify-center min-w-[6px]">
                        1
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[8.5px] text-dimgray">
                      <div className="w-[7px] relative flex items-center justify-center min-w-[7px]">
                        2
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-2 text-steelblue">
                      <div className="w-2 relative flex items-center justify-center min-w-[8px]">
                        3
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-2 text-steelblue">
                      <div className="w-2 relative flex items-center justify-center min-w-[8px]">
                        4
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch overflow-hidden flex flex-row items-center justify-between gap-[10.29px] text-dimgray">
                    <div className="rounded bg-darkslategray flex flex-row items-center justify-center py-[5.5px] px-[8.5px] text-darkgray">
                      <div className="w-[7px] relative font-extralight flex items-center justify-center min-w-[7px]">
                        6
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative flex items-center justify-center min-w-[7px]">
                        5
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative flex items-center justify-center min-w-[7px]">
                        6
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative flex items-center justify-center min-w-[7px]">
                        7
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative flex items-center justify-center min-w-[7px]">
                        8
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[8.5px]">
                      <div className="w-[7px] relative flex items-center justify-center min-w-[7px]">
                        9
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-1.5 text-steelblue">
                      <div className="w-3 relative flex items-center justify-center min-w-[12px]">
                        10
                      </div>
                    </div>
                    <div className="rounded flex flex-row items-center justify-center py-[5.5px] px-[6.5px] text-steelblue">
                      <div className="w-[11px] relative flex items-center justify-center min-w-[11px]">
                        11
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
