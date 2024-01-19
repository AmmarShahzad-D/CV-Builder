import React, { useState } from "react";
import SideBar from "./SideBar";
import CVDisplay from "./CVDisplay";

const CVBuilder = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    education: [],
    experiences: [],
  });


  const handleLoadExample = () => {
    setUserInfo({
      name: "Ammar Shahzad",
      email: "example@example.com",
      phone: "0300-111-1111",
      address: "house no 12 Main Street  Suite Suite Suite Suite  ",
      education: [
        {
          degree: "Bachelor of Science",
          school: "University A",
          graduationYear: "2020",
        },
      ],
      experiences: [
        {
          jobTitle: "Software Engineer",
          company: "Tech Co",
          startDate: "2018-01-01",
          endDate: "2022-01-01",
        },
      ],
    });
  };
  return (
    <div>
      <SideBar
        onLoadExample={handleLoadExample}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
      <CVDisplay userInfo={userInfo} />
    </div>
  );
};

export default CVBuilder;
