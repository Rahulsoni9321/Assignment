import { PatientList } from "../config";
import MaxWidthWrapper from "./MaxWidthWrapper";

const PatientHolder = () => {
  return (
    <div className="flex flex-col gap-1 bg-white rounded-2xl text-[#072635] mt-8 h-fit ">
      <MaxWidthWrapper>
        <div className="flex justify-between py-3 pb-8">
          <p className="text-xl font-bold">Patient</p>
          <img className="" src="/search_FILL0_wght300_GRAD0_opsz24.svg"></img>
        </div>
        <div className="flex flex-col gap-3 2xl:gap-5 ">
          {PatientList.map((patient, index) => {
            return (
              <div key={index} className="flex justify-between items-center hover:bg-[#D8FCF7] p-2">
                <div className="flex items-center gap-2">
                  <img className="w-[40px] h-[40px] 2xl:w-[48px] 2xl:h-[48px]" src={patient.profile}></img>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-sm font-semibold">{patient.name}</p>
                    <p className="text-xs font-thin text-[#707070]">
                      {patient.gender}, {patient.age}
                    </p>
                  </div>
                </div>
                <img src="/more_horiz_FILL0_wght300_GRAD0_opsz24.svg"></img>
              </div>
            );
          })}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PatientHolder;
