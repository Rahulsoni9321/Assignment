import { usePatientInfo } from "./AllInfoContextProvider";
import MaxWidthWrapper from "./components/MaxWidthWrapper";
import Navbar from "./components/Navbar";
import PatientData from "./components/PatientData";
import PatientHolder from "./components/PatientHolder";
import PatientInfo from "./components/PatientInfo";

function App() {
  const { Diagonisfulllist } = usePatientInfo();

  if (Diagonisfulllist.length == 0) {
    return (
      <div className="min-h-screen flex bg-black/40 items-center justify-center">
        <div className="flex gap-4 items-center ">
        <svg className="h-6 w-6 animate-spin" viewBox="0 0 100 100">
  <circle
    fill="none"
    stroke-width="10"
    className="stroke-current opacity-40"
    cx="50"
    cy="50"
    r="40"
  />
  <circle
    fill="none"
    stroke-width="10"
    className="stroke-current"
    strokeDasharray="250"
    strokeDashoffset="210"
    cx="50"
    cy="50"
    r="40"
  />
</svg>

          <p className="text-2xl text-gray-200 font-semibold ">Loading....</p>
        </div>
        
      </div>
    );
  }

  return (
    <div className="bg-[#F6F7F8] min-h-screen 2xl:max-w-7xl 2xl:mx-auto ">
      <MaxWidthWrapper>
        <Navbar></Navbar>
        <div className="w-full grid grid-cols-[1fr_auto_1fr] gap-x-4">
          <PatientHolder></PatientHolder>
          <PatientData></PatientData>
          <PatientInfo></PatientInfo>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default App;
