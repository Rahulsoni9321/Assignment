import { usePatientInfo } from "../../AllInfoContextProvider";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Labinformation = () => {
  const { Labresults } = usePatientInfo();
  return (
    <div className="rounded-xl bg-white p-2 h-72 overflow-auto ">
      <MaxWidthWrapper>
        <div className="text-xl font-bold pb-4">Lab Results</div>
      </MaxWidthWrapper>
      <MaxWidthWrapper>
        <div className="flex flex-col gap-2">
          {Labresults ? Labresults.map((results: string, index: number) => {
            return (
              <div key={index} className="flex justify-between px-2 hover:bg-[#F6F7F8] p-2.5 cursor-pointer">
                <div className="text-xs">{results}</div>
                <img className="w-4 h-4" src="/download_FILL0_wght300_GRAD0_opsz24 (1).svg"></img>
              </div>
            );
          }):<div></div>}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Labinformation;
