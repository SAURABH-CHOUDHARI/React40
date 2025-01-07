import { useState } from "react";

const Accordian = ({ data }) => {
  const [selected, setselected] = useState(null);
  const [enebleMultiselection, setEnebleMultiselection] = useState(false);
  const [multiselected, setMultiselected] = useState([]);
  const handelselection = (selectedID) => {

    if (selectedID == selected) {
      setselected(null);
    } else {
      setselected(selectedID);
    }
  };
  const handelmultiselection = (currentID) => {
    let copymultiple = [...multiselected];
    let findIdxofcurrentID = copymultiple.indexOf(currentID)
    if (findIdxofcurrentID == -1) {
      copymultiple.push(currentID);
    } else {
      copymultiple.splice(findIdxofcurrentID, 1)
    }
    setMultiselected(copymultiple);


  };

  return (
    <div className="accordian w-[500px] flex flex-col items-center ">
      <button
        className={`${enebleMultiselection ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"} text-white duration-300 py-2 px-5 rounded-md active:scale-95 active:text-white mb-5`}
        onClick={() => {
          setEnebleMultiselection((prev) => !prev);
        }}
      >
        {enebleMultiselection ? "Disable Multiselection" : "Enable Multiselection"}
      </button>
      {data && data.length > 0 ? (
        data.map((d, key) => {
          return (
            <div className="mb-5   bg-slate-600 hover:bg-slate-700 w-full rounded-lg " key={key}
              onClick={() => {
                if (enebleMultiselection) {
                  handelmultiselection(d.id);
                } else {
                  handelselection(d.id);
                }
              }}
            >
              <div className="px-2 py-3 active:scale-95 duration-300 w-full " >
                <div

                  className="title flex justify-between"
                >
                  <h3 className="font-bold text-xl">{d.question}</h3>
                  <span className="text-2xl">+</span>
                </div>
              </div>
              {enebleMultiselection ?
                multiselected.indexOf(d.id) !== -1 && <div className="bg-slate-900 w-full px-2 py-2 rounded-b-lg text-white">{d.answer}</div>
                : selected === d.id ? <div className="bg-slate-900 w-full px-2 py-2 rounded-b-lg text-white">{d.answer}</div> : null
              }
            </div>
          );
        })
      ) : (
        <div>No data found .. </div>
      )}
    </div>
  );
};

export default Accordian;
