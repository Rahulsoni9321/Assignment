const Navbar = () => {
  return (
    <div className="w-full rounded-full flex justify-between items-center text-[#072635] p-2 px-6 2xl:px-12 bg-white h-[60px] 2xl:h-[72px]">
      <img
        className=" h-[36px] w-[180px] 2xl:h-[48px] 2xl:w-[211px]"
        src="/TestLogo.svg"
      ></img>
      <div className="flex items-center justify-between gap-5 p-2">
        {content.map((info, index) => {
          return (
            <div key={index} className="flex items-center gap-1 rounded-full p-2 px-3 cursor-pointer hover:bg-[#01F0D0]">
              <img className="text-[#072635] w-[13px] h-[15px] 2xl:w-[15px] 2xl:h-[17px]" src={info.image}></img>
              <p className="text-[12px] text-[#072635] font-semibold">{info.name}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-between items-center gap-3">
        <div className="border-r border-[#F6F7F8] px-2 flex items-center gap-2 ">
          <img className="rounded-full h-[34px] w-[34px] 2xl:h-[44px] 2xl:w-[44px]" src="/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"></img>
          <div className="flex flex-col leading-tight">
            <p className="text-[12px] text=[#072635] font-bold">Dr. Jose Simmons</p>
            <p className="text-[#707070] font-normal text-[13px]">General Practioner</p>
          </div>
        </div>
        <img className="w-[16px] h-[17px] 2xl:w-[19px] 2xl:h-[20px]" src="/settings_FILL0_wght300_GRAD0_opsz24.svg"/>
        <img className="w-[16px] h-[17px] 2xl:w-[19px] 2xl:h-[20px]" src="/more_vert_FILL0_wght300_GRAD0_opsz24.svg"/>
      </div>
    </div>
  );
};

const content = [
  {
    image: "/home_FILL0_wght300_GRAD0_opsz24.svg",
    name: "Overview",
  },
  {
    image: "/group_FILL0_wght300_GRAD0_opsz24.svg",
    name: "Patient",
  },
  {
    image: "/calendar_today_FILL0_wght300_GRAD0_opsz24.svg",
    name: "Schedule",
  },
  {
    image: "/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg",
    name: "Message",
  },
  {
    image: "/credit_card_FILL0_wght300_GRAD0_opsz24.svg",
    name: "Transactions",
  },
];
export default Navbar;
