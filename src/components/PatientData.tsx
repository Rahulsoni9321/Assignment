import Diagnosishistory from "./minicomponents/Diagnosishistory"
import Diagnosticlist from "./minicomponents/Diagnosticlist"

const PatientData = () => {
  return (
    <div className="flex flex-col gap-8 mt-8">
      <Diagnosishistory></Diagnosishistory>
      <Diagnosticlist></Diagnosticlist>
    </div>
  )
}

export default PatientData
