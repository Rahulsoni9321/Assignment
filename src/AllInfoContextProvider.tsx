import axios from "axios";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const PatientInfo = createContext([] as any);

export const usePatientInfo = () => {
  return useContext(PatientInfo);
};

export const PatientInfoProvider = ({ children }: { children: ReactNode }) => {
  const [Diagonisfulllist, setDiagonislist] = useState([]);
  const [Labresults, setLabresults] = useState([]);
  const [Diagnosishistory, setDiagnosishistory] = useState([]);
  const [personalinfo, setpersonalinfo] = useState({
    name: "",
    gender: "",
    age: 0,
    profile_picture: "",
    date_of_birth: "",
    phone_number: "",
    emergency_contact: "",
    insurance_type: "",
  });

  let username = "coalition";
  let password = "skills-test";
  let auth = btoa(`${username}:${password}`);

  useEffect(() => {
    async function PatientInforequest() {
      try {
        const response = await axios.get(
          "https://fedskillstest.coalitiontechnologies.workers.dev",
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );
        let data = response.data;
        setDiagonislist(data[0].diagnostic_list);
        setDiagnosishistory(data[0].diagnosis_history);
        setLabresults(data[0].lab_results);
        setpersonalinfo({
          name: data[0].name,
          gender: data[0].gender,
          age: data[0].age,
          profile_picture: data[0].profile_picture,
          date_of_birth: data[0].date_of_birth,
          phone_number: data[0].phone_number,
          emergency_contact: data[0].emergency_contact,
          insurance_type: data[0].insurance_type,
        });
      } catch (error) {
        console.error(error);
      }
    }
    PatientInforequest();
  }, []);
  return (
    <PatientInfo.Provider
      value={{ Diagnosishistory, Diagonisfulllist, Labresults, personalinfo }}
    >
      {children}
    </PatientInfo.Provider>
  );
};
