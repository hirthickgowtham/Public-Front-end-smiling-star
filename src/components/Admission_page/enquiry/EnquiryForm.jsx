import React, { useState } from "react";
import enquirystyle from "./EnquiryForm.module.css";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    pincode: "",
    country: "",
    state: "",
    city: "",
    location: "",
    age: "",
    gender: "",
    program: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://your-api-endpoint.com/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          pincode: "",
          country: "",
          state: "",
          city: "",
          location: "",
          age: "",
          gender: "",
          program: "",
        });
      } else {
        alert(`Submission failed: ${data.message}`);
      }
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }
  };

  return (
    <div className={enquirystyle["form-container"]}>
      <h1 className={enquirystyle.title}>Little Learners Daycare</h1>
      <p className={enquirystyle.subtitle}>Where every child's journey of discovery and growth begins with love and care</p>

      <div className={enquirystyle["form-card"]}>
        <h2 className={enquirystyle["form-heading"]}>Enroll Your Child</h2>
        <p className={enquirystyle["form-subtext"]}>We're excited to meet your little one! Fill out this form and we’ll get back to you within 24 hours.</p>

        <form className={enquirystyle["form-grid"]} onSubmit={handleSubmit}>
          {[
            ["First Name", "firstName", "text"],
            ["Last Name", "lastName", "text"],
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
              />
            </div>
          ))}

          <div className={enquirystyle["form-group"]}>
            <label>Gender</label>
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className={enquirystyle["form-group"]}>
            <label>Program</label>
            <select name="program" value={formData.program} onChange={handleChange}>
              <option value="">Select program</option>
              <option>Pre-K</option>
              <option>Nursery</option>
              <option>Kindergarten</option>
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
  );
};

export default EnrollmentForm;
