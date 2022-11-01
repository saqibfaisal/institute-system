import React from "react";
import {
    BrowserRouter as Router, Route, Routes,
  } from "react-router-dom";
import Form from "../pages/registrationform";
import Signup from "../pages/signup";
import Login from "../pages/login" 
import Home from "../pages/home";
import Admin from "../pages/admin control/admin";
import AdminForm from "../pages/admin control/adminform";
import AdminQuiz from "../pages/admin control/adminquiz";
import CourseDetail from "../pages/admin control/coursedeatil";
import Quiz from "../pages/admin control/quiz";
function Approute() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/home:id" element={<Home/>}/>
                <Route path="/form" element={<Form/>}/>
                <Route path="/admin/*" element={<Admin/>}/>
                <Route path="/adminform" element={<AdminForm/>}/>
                <Route path="/adminquiz" element={<AdminQuiz/>}/>
                <Route path="/coursedetail" element={<CourseDetail/>}/>
                <Route path="/quiz" element={<Quiz/>}/>
            </Routes>
        </Router>
    )
}
export default Approute