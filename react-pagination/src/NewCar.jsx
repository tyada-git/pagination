import React, { useState } from "react";

const NewCar = () => {
  const [pchecked, setPChecked] = useState(false);
  const handleParentCheck = (e) => {
    console.log(e);
    setPChecked(e.target.checked);
  };
  const [childCh, setChildCh] = useState(false);
  const handleChild = (e) => {
    setChildCh(e.target.checked);
  };
  return (
    <>
      <div className="selectbox">
        <div>
          <input
            type="checkbox"
            checked={pchecked}
            onChange={handleParentCheck}
          />
          Tata
          <div>
            <input
              type="checkbox"
              checked={childCh ? childCh : pchecked}
              onChange={handleChild}
            />
            xuv
          </div>
          <div>
            <input
              type="checkbox"
              checked={childCh ? childCh : pchecked}
              onChange={handleChild}
            />
            nanno
          </div>
        </div>
      </div>
    </>
  );
};

export default NewCar;
