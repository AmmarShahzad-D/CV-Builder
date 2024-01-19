import React, { useState } from "react";

// ...
const ExperienceForm = ({ experiences, setUserInfo }) => {
    const [experienceEntry, setExperienceEntry] = useState({
        jobTitle: "",
        company: "",
        startDate: "",
        endDate: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setExperienceEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
    };

    const handleAddExperience = () => {
        // console.log("Experiences : ", experienceEntry)
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            experiences: [...prevInfo.experiences, experienceEntry],
        }));
        setExperienceEntry({ jobTitle: "", company: "", startDate: "", endDate: "" });
    };

    return (
        <div className="experience-form">
            <h3>Experience Form</h3>
            {/* Experience Form */}
            <div className="add-experience">
                <label>Title : </label>
                <input
                    type="text"
                    name="jobTitle"
                    value={experienceEntry.jobTitle}
                    onChange={handleInputChange}
                />
                <label>Company : </label>
                <input
                    type="text"
                    name="company"
                    value={experienceEntry.company}
                    onChange={handleInputChange}
                />
                <label>Start Date : </label>
                <input
                    type="text"
                    name="startDate"
                    value={experienceEntry.startDate}
                    onChange={handleInputChange}
                />
                <label>End Date : </label>
                <input
                    type="text"
                    name="endDate"
                    value={experienceEntry.endDate}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={handleAddExperience}>Add Experience</button>
        </div>
    );
};

export default ExperienceForm;
