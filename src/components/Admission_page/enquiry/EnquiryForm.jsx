import React, { useState } from "react";
import enquirystyle from "./EnquiryForm.module.css";
import axios from "axios";
import Popup from "../../Popup/Popup";
import { useEffect } from "react";
import { useRef } from "react";

const EnrollmentForm = () => {
  const domain = import.meta.env.VITE_BACKEND_URL;
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

  const [status,setstatus] = useState(false);
  const [popupdata,setpopupdata] = useState("The form has been submitted successfully");
   const popupRef = useRef(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

    const validateForm = () => {
    const {
      first_name, last_name, email, mobile, pincode, country,
      state, city, location, programs, age, gender
    } = formData;

    for (let key in formData) {
      if (!formData[key] && key !== "checkit") {
        return `Please fill in the ${key.replace("_", " ")}`;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile)) {
      return "Please enter a valid 10-digit mobile number";
    }

    const parsedAge = parseInt(age);
    if (isNaN(parsedAge) || parsedAge < 4 || parsedAge > 12) {
      return "Age must be between 4 and 12 years";
    }

    return null;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

  const error = validateForm();
  if (error) {
    alert(error);
    return;
  }
      const cleanFormData = {
      ...formData,
      age: parseInt(formData.age),
      first_name: formData.first_name.trim(),
      last_name: formData.last_name.trim(),
      email: formData.email.trim().toLowerCase(),
      mobile: formData.mobile.trim(),
      pincode: formData.pincode.trim(),
      country: formData.country.trim(),
      state: formData.state.trim(),
      city: formData.city.trim(),
      location: formData.location.trim(),
      programs: formData.programs.trim(),
      gender: formData.gender.trim(),
      checkit: "new"
    };


    
    try {
      const response = await axios.post(`${domain}api/enquiryForm`,formData)
      const data = response.data;

      if(data){
          setpopupdata(data);
          setstatus(true);
      }

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
      setstatus(false);
      setpopupdata("The form has been submitted successfully");
      
      alert("Error submitting form: " + error.message);
    }
  };

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setstatus(false);
      }
    };

    if (status) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [status]);

  return (
    <div className={enquirystyle.contain}>
    <div className={enquirystyle["form-container"]} style={{opacity:status?0.4:1}}>
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
            ["Location", "location", "text"],
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

         
        </form>

         <div className={enquirystyle["submit-wrapper"]}>
            <button type="submit" className={enquirystyle["submit-btn"]}>
              Submit Enquiry
            </button>
          </div>
         
      </div>
      
    </div>
    {status && <Popup popupdata={popupdata} status={status} onClose={() => setstatus(false)} />} 
    </div>
 
  );
};

export default EnrollmentForm;
