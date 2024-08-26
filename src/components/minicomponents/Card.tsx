import MaxWidthWrapper from "../MaxWidthWrapper";

const Card = ({
  classname,
  imgsrc,
  Name,
  condition,
  indication,
  Value,
}: {
  classname: string;
  imgsrc: string;
  Name: string;
  condition: string;
  indication?: string;
  Value: string;
}) => {
  return (
    <div className={`rounded-lg p-2 w-[200px] 2xl:w-[228px] ${classname}`}>
      <MaxWidthWrapper>
        <div className="flex flex-col gap-3">
          <img className="w-[96px] h-[96px]" src={imgsrc}></img>
          <div className="flex flex-col ">
          <div className="font-normal text-[16px]">{Name}</div>

          <div className="font-bold text-2xl">{Value}</div>
          </div>
          <div className="flex gap-3 items-center mt-1 text-xs">
            <img className={indication ? "w-3 h-3":"hidden"} src={indication}></img> {condition}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Card;
