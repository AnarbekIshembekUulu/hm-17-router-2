import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
const arrayStudents = [
  {
    student: "Student name: Mavluda",
    id: 1,
  },
  {
    student: "Student name: Sakydin",
    id: 2,
  },
];
const Students = () => {
  return (
    <>
      {arrayStudents.map((elem) => {
        return (
          <DivStudentsStyle>
            <li>{elem.student}</li>
            <Link to={`${elem.id}`}>DETAILS</Link>
          </DivStudentsStyle>
        );
      })}
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Students;

const DivStudentsStyle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  margin-left: 30px;
  gap: 30px;
  width: 83vw;
  height: 80px;
  border-radius: 20px;
  background-color: #107ad6;
  li {
    color: antiquewhite;
    list-style: none;
    font-size: 1.5rem;
  }
  button {
    background-color: crimson;
    border-style: none;
    color: whitesmoke;
    width: 100px;
    height: 40px;
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 3px;
    :hover {
      background-color: coral;
    }
  }
`;
