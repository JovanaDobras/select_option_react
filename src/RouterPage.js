import React, { useState, useEffect } from "react";
import { AppContext, useGlobalHook } from "./context";
import "./App.css";

function RouterPage() {
  const { podaci } = useGlobalHook(AppContext);
  const [selectDistrict, setSelectDistrict] = useState("");


  // const data = podaci?.find(element => selectDistrict === element.district);
  //   console.log(podaci);
  //   console.log(data);
  //   console.log(data.cities);


  return (
    <div>
      <div className="select-options">
        <select className="select-podaci" onChange={(e) => setSelectDistrict(e.target.value)}>
          <option value="">Please select</option>

          {podaci.map((option, index) => (
            <option key={index} value={option.district}>
              {option.district}
            </option>
          ))}
        </select>

        {selectDistrict && (
          <select className="select-podaci">
            {podaci.find((element) => selectDistrict === element.district)
              ?.cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
          </select>
        )}
      </div>
    </div>
  );
}

export default RouterPage;
