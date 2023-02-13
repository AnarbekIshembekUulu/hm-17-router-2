import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const SinglePage2 = () => {
  const { id } = useParams();
  const [student, setStudentId] = useState(null);

  useEffect(() => {
    setStudentId(id);
  }, [id]);
  return (
    <div>
      {student && (
        <StudentDivStyle>
          <h1>Student Detail Page</h1>
          <h2>Student Name {id}</h2>
        </StudentDivStyle>
      )}
    </div>
  );
};

export default SinglePage2;

const StudentDivStyle = styled.div`
  width: 84.5vw;
  height: 200px;
  background-color: #4cd800;
  margin-left: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  color: antiquewhite;
  text-transform: uppercase;
  font-size: 1.3rem;
  h1 {
    letter-spacing: 5px;
    text-shadow: 16px 22px 11px rgba(0, 0, 0, 0.8);
  }
`;
