import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Courses = () => {
  return (
    <>
      <HeaderStyle>
        <ListStyle>
          <Link to="material">Material</Link>
        </ListStyle>
        <ListStyle>
          <Link to="students">students</Link>
        </ListStyle>
        <ListStyle>
          <Link to="rating">rating</Link>
        </ListStyle>
      </HeaderStyle>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Courses;

const HeaderStyle = styled.div`
  background-image: linear-gradient(180deg, #b4d412, #e1b91aee, #eeff00);
  width: 87vw;
  height: 70px;
  box-shadow: 9px 20px 13px -2px rgba(19, 51, 75, 0.2);
  gap: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListStyle = styled.li`
  list-style: none;
  a {
    color: #ffffff;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 5px;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 1.5rem;
    :hover {
      text-decoration: underline whitesmoke;
      color: cyan;
    }
    :active {
      color: black;
    }
  }
`;
