import Labinformation from "./minicomponents/Labinformation";
import Profile from "./minicomponents/Profile";

const PatientInfo = () => {
  return (
    <div className="flex flex-col gap-8 mt-4">
     <Profile></Profile>
     <Labinformation></Labinformation>
    </div>
  );
};



export default PatientInfo;
