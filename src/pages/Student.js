import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';

const Student = () => {
  let navigate = useNavigate();
  const baseURL = "http://127.0.0.1:8000/api/students/";

  const [studentDetails, setStudentDetails] = useState([]);

  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setStudentDetails(response.data.students);
  //   });
  // }, []);


  useEffect(() => {
    loadStudent();
    console.log('====================================');
    console.log("hello");
    console.log('====================================');

  }, [])
  
  const loadStudent = async () => {
    const result = await axios.get(baseURL);
    setStudentDetails(result.data.students);
  };


  const deleteUser = async id => {
    await axios.delete(`${baseURL}${id}`);
    loadStudent();

    swal({
      title: "Good job!",
      text: "Student deleted successfully",
      icon: "success",
      button: {
        text:"Ok",
      },
    });
  };

  const editUser = (id) =>{
    navigate(`/edit/${id}`);
  };

  const handleClick = () => {
    navigate("/add");
  };

  {
    var student_HTMLTABLE = studentDetails.map((element) => {
      const { StudentName, StudentCourse, StudentEmail, StudentPhone, id } =
        element;
      return (
        <tbody key={id}>
          <tr>
            <th scope="row">{id}</th>
            <td>{StudentName}</td>
            <td>{StudentCourse}</td>
            <td>{StudentEmail}</td>
            <td>{StudentPhone}</td>
            <td>
              {" "}
              <button onClick={() => editUser(id)} className="btn btn-success">
                Edit
              </button>{" "}
            </td>
            <td>
              <button type="button" onClick={() => deleteUser(id)} className="btn btn-danger">
                Delete
              </button>{" "}
            </td>
          </tr>
        </tbody>
      );
    });
  }

  return (
    <div className="container my-3">
      <div className="d-flex justify-content-between">
        <h1>Students Details</h1>
        <button onClick={handleClick} className="btn btn-primary px-5 my-1">
          Add Student
        </button>
      </div>
      <table className="table table-striped">
        <thead className="bg-dark text-light">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Student Name</th>
            <th scope="col">Student Course</th>
            <th scope="col">Student Email</th>
            <th scope="col">Student Phone</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {student_HTMLTABLE}
      </table>
    </div>
  );
};

export default Student;
