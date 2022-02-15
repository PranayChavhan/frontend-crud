import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert';

const EditStudent = () => {
  let navigate = useNavigate();
  const baseURL = "http://127.0.0.1:8000/api/students/";

  const { id } = useParams();

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(name, course, email, phone);
    //   setName("");
    //   setCourse("");
    //   setEmail("");
    //   setPhone("");

      await axios
      .put(`${baseURL}${id}`, {
        StudentName:name,
        StudentCourse: course,
        StudentEmail: email,
        StudentPhone:phone,
      })

    //   navigate("/")
    swal({
        title: "Good job!",
        text: "Student edided successfully",
        icon: "success",
        button: {
          text:"Back to home",
        },
      }).then(function() {
        navigate("/")
    });
    }
    useEffect(() => {
        loadStudent();
      }, [])

    const loadStudent = async () => {
        const result = await axios.get(`http://127.0.0.1:8000/api/students/${id}`);
        setName(result.data.student.StudentName)
        setCourse(result.data.student.StudentCourse)
        setEmail(result.data.student.StudentEmail)
        setPhone(result.data.student.StudentPhone)
      };

  return (
      
    <div className="container my-3">
      <h1>Edit Student Details</h1>
      <form className="container border p-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="studentName" className="form-label">
            Student Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="studentCourse" className="form-label">
            Student Course
          </label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="studentEmail" className="form-label">
            Student Email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="studentPhone" className="form-label">
            Student Phone
          </label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditStudent;
