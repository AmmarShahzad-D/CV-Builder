import React from "react";

const CVDisplay = ({ userInfo }) => {
  // console.log(userInfo);
  const { name, email, phone, address, education, experiences } = userInfo;
  return (
    <div className="user-info">
      <h2>{name}</h2>
      <p>Emial : {email}</p>
      <p>Phone : {phone}</p>
      <p>Address : {address}</p>
      <div className="education">
        <h3>Education</h3>
        {education.map((entry, index) => (
          <div key={index} className="education-entry">
            <p>{`${entry.degree} at ${entry.school} , Education Year : ${entry.graduationYear}`}</p>
          </div>
        ))}
      </div>

      <h3>Experience</h3>
      {experiences.map((entry, index) => (
        <div key={index} className="experience-entry">
          <h1>
            {" "}
            {`${entry.jobTitle} at ${entry.company} , ${entry.startDate} to ${entry.endDate} `}{" "}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default CVDisplay;
