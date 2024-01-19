import React from "react";

const ClearButton = ({ setUserInfo }) => {
  const handleClearCV = () => {
    setUserInfo({
      name: "",
      email: "",  
      phone: "",
      Adress: "",
      education: [],
      experiences: [],
    });
  };
  return (
    <div>
      <button onClick={handleClearCV}>Clear</button>
    </div>
  );
};

export default ClearButton;
