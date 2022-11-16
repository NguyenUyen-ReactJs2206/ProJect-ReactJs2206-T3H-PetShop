import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogIn from "../component/cpnPageUser/LogIn";
import SignUp from "../component/cpnPageUser/SignUp";
import "../css/pageuser.css";

export default function User() {
    const [showForm, setShowForm] = useState(true);
  return (
    <>
      <div className=" page-user">
        {" "}
        <Link to="/user/log-in" onClick={()=>setShowForm(true)} >LOG IN</Link>
        <Link to="/user/sign-up" onClick={()=>setShowForm(false)}>SIGN UP</Link>
      </div>
      {showForm ? (<LogIn setShowForm={setShowForm}/>) : ( <SignUp setShowForm={setShowForm}/> )}
    </>
  );
}
