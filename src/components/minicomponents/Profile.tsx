
import MaxWidthWrapper from "../MaxWidthWrapper";
import { usePatientInfo } from "../../AllInfoContextProvider";

const Profile = () => {
  const {personalinfo} = usePatientInfo();
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white py-6 text-[#072635]">
      <div className="flex flex-col gap-3 justify-center items-center">
        <img
          className="w-[180px] h-[180px] 2xl:w-[200px] 2xl:h-[200px] object-cover"
          src={personalinfo.profile_picture}
        ></img>
        <div className="text-xl font-semibold ">{personalinfo.name}</div>
      </div>
      <MaxWidthWrapper>
      <div className="flex flex-col gap-2">
        
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#F6F7F8] flex  items-center justify-center">

          <img className=" " src={DetailsImg[0]}></img>
          </div>
          <div className="flex flex-col ">
               <p className="text-[11px] font-medium">Date of Birth</p>
               <p className="font-bold text-[12px]">{personalinfo.date_of_birth}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#F6F7F8] flex  items-center justify-center">

          <img className=" " src={DetailsImg[1]}></img>
          </div>
          <div className="flex flex-col ">
               <p className="text-[11px] font-medium">Gender</p>
               <p className="font-bold text-[12px]">{personalinfo.gender}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#F6F7F8] flex  items-center justify-center">

          <img className=" " src={DetailsImg[2]}></img>
          </div>
          <div className="flex flex-col ">
               <p className="text-[11px] font-medium">Contact Info</p>
               <p className="font-bold text-[12px]">{personalinfo.phone_number}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#F6F7F8] flex  items-center justify-center">

          <img className=" " src={DetailsImg[3]}></img>
          </div>
          <div className="flex flex-col ">
               <p className="text-[11px] font-medium">Emergency Contacts</p>
               <p className="font-bold text-[12px]">{personalinfo.emergency_contact}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#F6F7F8] flex  items-center justify-center">

          <img className=" " src={DetailsImg[4]}></img>
          </div>
          <div className="flex flex-col ">
               <p className="text-[11px] font-medium">Insurance Provider</p>
               <p className="font-semibold text-[12px]">{personalinfo.insurance_type}</p>
          </div>
        </div>
      </div>
      </MaxWidthWrapper>
      <div className="w-full flex justify-center">
          <button className="px-4 p-2 bg-[#01F0D0] rounded-full text-xs font-medium">Show All Information</button>
      </div>
    </div>
  );
};

const DetailsImg = [
  "/calendar_today_FILL0_wght300_GRAD0_opsz24.svg",
  "/FemaleIcon.svg",
  "/PhoneIcon.svg",
  "/PhoneIcon.svg",
  "/InsuranceIcon.svg",
];

export default Profile;
