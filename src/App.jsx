import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import CoursesDetails from "./CoursesDetails";
import Blog from "./Blog";
import ReadArticle from "./ReadArticle";
import ContactUs from "./ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/courses/:name" element={<CoursesDetails />} />
        <Route exact path="/blogs" element={<Blog />} />
        <Route exact path="/blogs/:id" element={<ReadArticle />} />
        <Route exact path="/contactus" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
