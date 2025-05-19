import React, { useState } from "react";
import enquirystyle from "./EnquiryForm.module.css";
import axios from "axios"

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    mobile: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    location: "",
    programs: "",
    age: 0,
    gender: "",
    checkit: "new"
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    formData.age = parseInt(formData.age);
    try {
      const response = await axios.post("http://localhost:5000/api/stu_enq/daycare/enquiry",formData)

      const data = response.data;
      setFormData({
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        pincode: "",
        country: "",
        state: "",
        city: "",
        location: "",
        programs: "",
        age: 0,
        gender: "",
        checkit: "new"
      }); 
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <div className={enquirystyle.contain}>
    <div className={enquirystyle["form-container"]}>
      <h1 className={enquirystyle.title}>Little Learners Daycare</h1>
      <p className={enquirystyle.subtitle}>Where every child's journey of discovery and growth begins with love and care</p>

      <div className={enquirystyle["form-card"]}>
        <h2 className={enquirystyle["form-heading"]}>Enroll Your Child</h2>
        <p className={enquirystyle["form-subtext"]}>We're excited to meet your little one! Fill out this form and we’ll get back to you within 24 hours.</p>

        <form className={enquirystyle["form-grid"]} onSubmit={handleSubmit}>
          {[
            ["First Name", "first_name", "text"],
            ["Last Name", "last_name", "text"],
            ["Email Address", "email", "email"],
            ["Mobile Number", "mobile", "tel"],
            ["Pincode", "pincode", "text"],
            ["Country", "country", "text"],
            ["State", "state", "text"],
            ["City", "city", "text"],
            ["Location (Optional)", "location", "text"],
            ["Child’s Age", "age", "number"],
          ].map(([label, name, type]) => (
            <div className={enquirystyle["form-group"]} key={name}>
              <label>{label}</label>
              <input
                type={type}
                name={name}
                placeholder={label}
                value={formData[name]}
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className={enquirystyle["form-group"]}>
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select gender</option>
              <option value = "M">Male</option>
              <option value = "F">Female</option>
            </select>
          </div>

          <div className={enquirystyle["form-group"]}>
            <label>Program</label>
            <select name="programs" value={formData.program} onChange={handleChange} required>
              <option value="">Select program</option>
              <option>bharatanatyam</option>
              <option>hindiclass</option>
              <option>daycare</option>
              <option>carnatic</option>
              <option>violin</option>
              <option>tabla</option>
              <option>piano</option>
            </select>
          </div>

          <div className={enquirystyle["submit-wrapper"]}>
            <button type="submit" className={enquirystyle["submit-btn"]}>
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default EnrollmentForm;
