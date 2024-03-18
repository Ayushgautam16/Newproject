import { useMemo } from "react";

const FrameComponent2 = ({
  name1,
  frame40Placeholder,
  group41,
  propMinWidth,
  propWidth,
  propWidth1,
}) => {
  const nameStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameInputStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupIconStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[16.300000000000182px] text-left text-lg text-neutral-100 font-other-18-20-m">
      <h2
        className="m-0 relative text-inherit leading-[20px] font-medium font-inherit inline-block min-w-[51.3px] shrink-0 [debug_commit:1cbd860] z-[1]"
        style={nameStyle}
      >
        {name1}
      </h2>
      <div className="self-stretch flex-1 rounded-27xl bg-neutral-100 shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] flex flex-row items-start justify-between pt-[18.199999999999815px] pb-[18.100000000000136px] pr-[23px] pl-[20.5px] shrink-0 [debug_commit:1cbd860] z-[1] border-[1px] border-solid border-neutral-300">
        <div className="h-[59.7px] w-[291.6px] relative rounded-27xl bg-neutral-100 shadow-[0px_2px_6px_rgba(19,_18,_66,_0.07)] box-border hidden border-[1px] border-solid border-neutral-300" />
        <input
          className="w-[100.6px] [border:none] [outline:none] bg-[transparent] h-[19.5px] flex flex-col items-start justify-start pt-[1.400000000000091px] px-0 pb-0 box-border font-other-18-20-m text-lg text-slategray"
          placeholder={frame40Placeholder}
          type="text"
          style={frameInputStyle}
        />
        <img
          className="h-[23.4px] w-[20.8px] relative z-[2]"
          alt=""
          src={group41}
          style={groupIconStyle}
        />
      </div>
    </div>
  );
};

export default FrameComponent2;
