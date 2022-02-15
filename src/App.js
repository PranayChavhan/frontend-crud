import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddStudent from "./pages/AddStudent";
import EditStudent from "./pages/EditStudent";
import Student from "./pages/Student";

const App = () => {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/add" element={<AddStudent />} />
          <Route path="/edit/:id" element={<EditStudent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
