
import { useEffect,useState } from 'react';
import axios from 'axios';

export default function RegisterUI() {

  const [form ,setForm]=useState({
        username:"",
        email:"",
        branch:"",
        year:0,
        role:"",
        password:"",
        confirmPassword:"",
        avatar:"",

  })

  // develop a function  which handle when we fill 
  // the input field it will update in the field in the  form variable 


  // for handling avatar we have to require some special approach
  //When you send a normal JSON object using Axios, the data is serialized as text (JSON).
  //But for images or any file uploads, 
  // you must send it as multipart/form-data — the format browsers use for file uploads.

  const handleChange=(e)=>{
    const  {name ,value,files}=e.target
    

    //When a file is selected, it’s stored in e.target.files[0], not in e.target.value
    if(name==="avatar"){
      setForm({...form,avatar:files[0]});// stored file object ,not string 
    }
    else{
      setForm({...form,[name]:value})
    }
  }

  // develop a function which handle after  when user click the submit button 
  // 
  const handleSubmit=async (e)=>{
    e.preventDefault();

    if(form.password!=form.confirmPassword){
      alert("Password and Confirm Password do not match");
      return;
    }

    // remove the confirm password before sending

    const {confirmPassword, avatar, ...userData}=form

    //we can't send file in  json directly  we have to use FormData() to build your request
    const formData=new FormData();

    // Add all user data fields
    for(const key in userData){
      formData.append(key, userData[key])
    }

    // Add the avatar file with the field name 'avatar' (matches backend)
    if (avatar) {
      formData.append('avatar', avatar)
    }

    try {
      const res = await axios.post('/user/register', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true // Important for cookies if your API uses them
      });
      
      console.log('Registration response:', res.data);
      alert('User Registered Successfully')
    } catch (error) {
       alert("Registration failed: " + error.response?.data?.message)
    }

  }

  return (
    <div className="min-h-screen flex">
      {/* Left Side */}
      <div className="hidden md:flex w-1/2  items-center justify-center text-black p-10">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4">Create Your Account</h1>
          <p className="text-base opacity-90">
            Join the academic community. Upload, share, and explore resources across branches and years.
          </p>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex flex-1 flex-col items-center justify-start bg-gray-50 pt-16">
        <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-5 text-center">
            Register
          </h2>

          <form 
          onSubmit={handleSubmit}
          className="space-y-4 text-sm">
            {/* Username */}
            <div>
              <label className="block font-medium text-gray-600 mb-1">Username</label>
              <input
                type="text"
                name='username'
                value={form.username}
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="example@college.com"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Branch + Year */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-medium text-gray-600 mb-1">Branch</label>
                <select 
                name='branch'
                value={form.branch}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none">
                  <option>Select Branch</option>
                  <option>Civil</option>
                  <option>Mechanical</option>
                  <option>Electrical</option>
                  <option>Computer Science</option>
                  <option>Electronics</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-600 mb-1">Year</label>
                <select 
                name='year'
                  value={form.year}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none">
                  <option>Select Year</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="block font-medium text-gray-600 mb-1">Role</label>
              <select
              name='role'
              value={form.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none">
                <option>student</option>
                <option>faculty</option>
                <option>alumni</option>
                <option>admin</option>
              </select>
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block font-medium text-gray-600 mb-1">Password</label>
                <input
                name='password'
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-600 mb-1">Confirm Password</label>
                <input
                name='confirmPassword'
                value={form.confirmPassword}
                onChange={handleChange}
                  type="password"
                  placeholder="••••••••"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                />
              </div>
            </div>

            {/* Avatar Upload */}
            <div>
              <label className="block font-medium text-gray-600 mb-1">
                Profile Picture (optional)
              </label>
              <input
                name='avatar'
                onChange={handleChange}
                type="file"
                accept="image/*"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
              />
            </div>

            <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-lg transition duration-200 text-sm">
              Register
            </button>
          </form>

          <p className="text-xs text-gray-600 mt-4 text-center">
            Already have an account?{" "}
            <a href="#" className="text-indigo-600 font-medium hover:underline">
              Sign In
            </a>
          </p>
        </div>

        <p className="text-xs text-gray-500 mt-6">
          © 2025 Spectrum Portal. All rights reserved.
        </p>
      </div>
    </div>
  );
}
