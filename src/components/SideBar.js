import React from "react";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import ClearButton from "./ClearButton";

const SideBar = ({ userInfo, setUserInfo, onClearCV, onLoadExample }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUserInfo((prevInfo) => {
      const updatedInfo = { ...prevInfo, [name]: value };
      console.log("Updated User Info:", updatedInfo); // Add this line
      return updatedInfo;
    });
  };
  return (
    <div className="sidebar">
      {/* button */}
      <ClearButton setUserInfo={setUserInfo} />
      <button onClick={onLoadExample}>Load Example</button>
      {/* user infromation input */}
      <div className="user-info">
        <label>Name : </label>
        <input
          type="text"
          name="name"
          value={userInfo.name}
          onChange={handleInputChange}
        />
        <label>Email : </label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleInputChange}
        />
        <label>Phone : </label>
        <input
          type="tel"
          name="phone"
          value={userInfo.phone}
          onChange={handleInputChange}
        />
        <label>Address : </label>
        <input
          type="tel"
          name="address"
          value={userInfo.address}
          onChange={handleInputChange}
        />
      </div>
      <EducationForm
        education={userInfo.education}
        setUserInfo={(educationEntry) =>
          setUserInfo((prevInfo) => ({
            ...prevInfo,
            education: [...prevInfo.education, educationEntry],
          }))
        }
      />
      <ExperienceForm
        experiences={userInfo.experiences}
        setUserInfo={(experienceEntry) =>
          setUserInfo((prevInfo) => ({
            ...prevInfo,
            experiences: [...prevInfo.experiences, experienceEntry],
          }))
        }
      />
    </div>
  );
};
export default SideBar;
