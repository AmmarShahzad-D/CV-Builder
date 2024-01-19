import React, { useState } from "react";

// ...
const EducationForm = ({ education, setUserInfo }) => {
  const [educationEntry, setEducationEntry] = useState({
    degree: "",
    school: "",
    graduationYear: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducationEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
  };

  const handleAddEducation = () => {
    // console.log("Education Entry : ", educationEntry)
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      education: [...prevInfo.education, educationEntry],
    }));
    setEducationEntry({ degree: "", school: "", graduationYear: "" });
  };

  return (
    <div className="education">
      <h3>Education</h3>

      {/* Education Form */}
      <div className="education-from">
        <label>Degree </label>
        <input
          // type="text"
          name="degree"
          value={educationEntry.degree}
          onChange={handleInputChange}
        />
        <label>School </label>
        <input
          // type="text"
          name="school"
          value={educationEntry.school}
          onChange={handleInputChange}
        />
        <label>Graduation Year</label>
        <input
          // type="text"
          name="graduationYear"
          value={educationEntry.graduationYear}
          onChange={handleInputChange}
        />

        <button onClick={handleAddEducation}>Add Education</button>
      </div>
    </div>
  );
};

export default EducationForm;
