import { usePatientInfo } from "../../AllInfoContextProvider";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Diagnosticlist = () => {
  const { Diagonisfulllist } = usePatientInfo();
  return (
    <div className="rounded-xl bg-white p-2  ">
      <MaxWidthWrapper>
        <div className="flex flex-col gap-6">
          <div className="text-xl font-bold pb-6">Diagnostic List</div>
          <table className="w-full ">
            <thead className="  rounded-xl p-2 px-5">
              <tr className=" bg-[#F6F7F8] rounded-full text-sm ">
                <th className="py-2  w-[110px] font-bold text-start ">
                  Problem/Diagnosis
                </th>
                <th className="py-2  w-[110px]  font-bold text-start">
                  Description
                </th>
                <th className="py-2   w-[110px] font-bold text-middle">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="">
              {Diagonisfulllist ? (
                Diagonisfulllist.map((list: any, index: number) => {
                  return (
                    <tr key={index} className="">
                      <td className="text-xs py-4 ">{list.name}</td>
                      <td className="text-xs py-4">{list.description}</td>
                      <td className="text-xs py-4 text-center">
                        {list.status}
                      </td>
                    </tr>
                  );
                })
              ) : (
                <></>
              )}
            </tbody>
          </table>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Diagnosticlist;
