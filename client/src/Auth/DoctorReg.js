import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // Update with your backend URL
});
const DoctorReg = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    license: "", // Example: license field
    qualification: "", // Example: qualification field
    communicationSkills: "", // Example: communicationSkills field
    experience: "", // Example: experience field
    gender: "", // Example: gender field
    age: "", // Example: age field
    dob: "", // Example: dob field
    hobbies: "", // Example: hobbies field
    address: "", // Example: address field
    phoneNumber: "", // Example: phoneNumber field
    // Add more fields as needed
  });

  const handleChange = (e) => {
    // If the input is a file input (type === 'file'), handle it separately
    if (e.target.type === "file") {
      // Update the formData directly with the selected file
      setFormData({ ...formData, photo: e.target.files });
    } else {
      // For other input types, handle them normally
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const formData = new FormData();
  
      // Append other form fields
      formData.append('email', formData.email);
      formData.append('username', formData.username);
      // Append other fields similarly
  
      // Append photo file
      formData.append('photo', e.target.photo.files[0]); // Append the file object itself
  
      // Append license file
      formData.append('license', e.target.license.files[0]); // Append the file object itself
  
      // Make a POST request with the FormData object
      const res = await axiosInstance.post('/doctor', formData);
      console.log(res.data);
  
    } catch (error) {
      console.error('Error submitting data:', error);
      // Handle error
    }
  };
  

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white min-h-screen flex justify-center items-center"
    >
      <div className="max-w-md w-full bg-gray-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Doctor Registration
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="file"
            name="license"
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Qualification"
            required
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="communicationSkills"
            value={formData.communicationSkills}
            onChange={handleChange}
            placeholder="Communication Skills"
            required
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Experience"
            required
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            placeholder="Gender"
            required
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            required
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="Date of Birth"
            required
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            placeholder="Hobbies"
            required
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />
          <input
            type="file"
            name="photo" // Make sure the name attribute is "photo"
            onChange={handleChange} // Ensure this onChange event handler is correctly implemented
            className="w-full px-4 py-2 mb-4 rounded border border-gray-400 focus:outline-none focus:border-blue-500"
          />

          {/* Add more input fields and handlers */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
        <div className="mt-4 text-center text-gray-700">
          Already a doctor?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login Here
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default DoctorReg;
