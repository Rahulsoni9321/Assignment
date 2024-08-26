import { usePatientInfo } from "../../AllInfoContextProvider";
import MaxWidthWrapper from "../MaxWidthWrapper";
import Card from "./Card";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, // x axis
  LinearScale, // y axis
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const Diagnosishistory = () => {
  const { Diagnosishistory } = usePatientInfo();
  console.log(Diagnosishistory);
  if (Diagnosishistory.length == 0) {
    return <div>Loading</div>;
  }

  let label = [];

  for (let i = 0; i < Diagnosishistory.length; i++) {
    label[i] = Diagnosishistory[Diagnosishistory.length - i - 1].month.slice(0,3) +","+ Diagnosishistory[Diagnosishistory.length - i - 1].year
      
  }

  let Systolic:any = [];
  for (let j=0;j<Diagnosishistory.length;j++){
    Systolic[j] = Diagnosishistory[Diagnosishistory.length-j-1].blood_pressure.systolic.value ;
  }

  let Diastolic:any = [];
  for (let j=0;j<Diagnosishistory.length;j++){
    Diastolic[j] = Diagnosishistory[Diagnosishistory.length-j-1].blood_pressure.diastolic.value ;
  }

  const data = {
    labels: label,
    datasets: [
      {
        label: "Systolic",
        data: Systolic,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        fill: false,
        tension:0.4
      },
      {
        label: "Diastolic",
        data: Diastolic,
        borderColor: "rgba(153,102,255,1)",
        backgroundColor: "rgba(153,102,255,1)",
        fill: false,
        tension:0.4
      },
    ],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
  };
  return (
    <div className="flex flex-col gap-5 rounded-xl text-[#072635] bg-white">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-7 ">
          <div className="font-bold text-xl py-6">Diagnosis History</div>
          <div className="rounded-xl flex gap-12 px-5 bg-[#F4F0FE] p-3">
            <div className="flex flex-col gap-2 flex-grow">
              <div className="flex justify-between">
                <p className="font-bold text-xl px-2">Blood Pressure</p>
                <div className="flex gap-1 items-center">
                  <p className="text-sm font-normal">Last 6 months</p>
                  <img src="/ArrowDown.svg"></img>
                </div>
              </div>

              <Line  className="text-xs" data={data} options={options} />
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-col justify-start gap-0.5 border-b-2 border-gray-200 pb-4">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-[#E66FD2] w-3 h-3"></div>
                  <div className="text-[16px] ">Systolic</div>
                </div>
                <div className="text-xl font-bold">
                  {Diagnosishistory[0].blood_pressure.systolic.value}
                </div>
                <div className="flex gap-3 items-center">
                  <img src="/ArrowUp.svg"></img>
                  <div className="font-thin text-[13px]">
                    {Diagnosishistory[0].blood_pressure.systolic.levels}
                  </div>
                </div>
              </div>
             
              <div className="flex flex-col justify-start gap-0.5 pt-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-[#8C6FE6] w-3 h-3"></div>
                  <div className="text-[16px] ">Diastolic</div>
                </div>
                <div className="text-xl font-bold">
                  {Diagnosishistory[0].blood_pressure.diastolic.value}
                </div>
                <div className="flex gap-3 items-center">
                  <img src="/ArrowDown.svg"></img>
                  <div className="font-thin text-[13px]">
                    {Diagnosishistory[0].blood_pressure.diastolic.levels}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Card
              classname="bg-[#E0F3FA]"
              Name="Respiratory Rate"
              Value={Diagnosishistory[0].respiratory_rate.value}
              condition={Diagnosishistory[0].respiratory_rate.levels}
              imgsrc="/respiratory rate.svg"
            ></Card>
            <Card
              classname="bg-[#FFE6E9]"
              Name="Temperature"
              Value={Diagnosishistory[0].temperature.value}
              condition={Diagnosishistory[0].temperature.levels}
              imgsrc="/temperature.svg"
            ></Card>
            <Card
              classname="bg-[#FFE6F1]"
              Name="Heart Rate"
              Value={Diagnosishistory[0].heart_rate.value}
              condition={Diagnosishistory[0].heart_rate.levels}
              imgsrc="/HeartBPM.svg"
              indication="/ArrowDown.svg"
            ></Card>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
// LineChartExample.js

export default Diagnosishistory;
