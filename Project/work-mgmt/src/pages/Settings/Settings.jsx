import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useTheme } from "../../context/ThemeContext";
import axios from "axios";

export default function Settings() {
  const { theme, toggleTheme } = useTheme();

  
  const profileSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
  });

  const passwordSchema = Yup.object().shape({
    current: Yup.string().required("Current password is required"),
    new: Yup.string().min(6, "Password must be at least 6 characters").required("New password is required"),
    confirm: Yup.string()
      .oneOf([Yup.ref("new"), null], "Passwords must match")
      .required("Confirm password is required"),
  });

  
  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    formState: { errors: profileErrors },
  } = useForm({ resolver: yupResolver(profileSchema) });

  
  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: passwordErrors },
  } = useForm({ resolver: yupResolver(passwordSchema) });

  
  const onSubmitProfile = async (data) => {
    try {
      
      await axios.post("/api/profile/update", data);
      alert("Profile updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update profile");
    }
  };

  const onSubmitPassword = async (data) => {
    try {
      await axios.post("/api/profile/change-password", data);
      alert("Password updated successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to update password");
    }
  };

  return (
    <div className={`max-w-2xl mx-auto p-6 ${theme === "dark" ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"}`}>
      <h2 className="text-2xl font-bold mb-6">Settings</h2>

      
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Profile</h3>
        <form onSubmit={handleSubmitProfile(onSubmitProfile)} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Name"
              {...registerProfile("name")}
              className="w-full p-2 border rounded"
            />
            {profileErrors.name && <p className="text-red-500 text-sm">{profileErrors.name.message}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              {...registerProfile("email")}
              className="w-full p-2 border rounded"
            />
            {profileErrors.email && <p className="text-red-500 text-sm">{profileErrors.email.message}</p>}
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Update Profile
          </button>
        </form>
      </section>

     
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Change Password</h3>
        <form onSubmit={handleSubmitPassword(onSubmitPassword)} className="space-y-4">
          <div>
            <input
              type="password"
              placeholder="Current Password"
              {...registerPassword("current")}
              className="w-full p-2 border rounded"
            />
            {passwordErrors.current && <p className="text-red-500 text-sm">{passwordErrors.current.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="New Password"
              {...registerPassword("new")}
              className="w-full p-2 border rounded"
            />
            {passwordErrors.new && <p className="text-red-500 text-sm">{passwordErrors.new.message}</p>}
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...registerPassword("confirm")}
              className="w-full p-2 border rounded"
            />
            {passwordErrors.confirm && <p className="text-red-500 text-sm">{passwordErrors.confirm.message}</p>}
          </div>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Update Password
          </button>
        </form>
      </section>

      
      <section>
        <h3 className="text-xl font-semibold mb-2">Theme</h3>
        <button
          onClick={toggleTheme}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </section>
    </div>
  );
}
