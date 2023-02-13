import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <DivStyle>
      <NavBarStyle>
        <LogoStyle>LOGO</LogoStyle>
        <NavLink to="/courses">Courses</NavLink>
        <NavLink to="/Anouncements">Anouncements</NavLink>
        <NavLink to="/notification">Notifications</NavLink>
        <NavLink to="/shedule">Shedule</NavLink>
      </NavBarStyle>
      <MainStyle>
        <Outlet />
      </MainStyle>
    </DivStyle>
  );
};

export default Layout;

const NavBarStyle = styled.header`
  background-color: blue;
  height: 100vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  align-items: center;
  text-transform: uppercase;
  box-shadow: 9px 1px 13px -2px rgba(19, 51, 75, 0.2);
  a {
    color: #041b51;
    text-decoration: none;
    background-color: antiquewhite;
    width: 150px;
    height: 45px;
    text-align: center;
    padding-top: 25px;
    border-radius: 15px;
    :hover {
      color: coral;
      font-size: 1.1rem;
    }
    :active {
      color: blue;
    }
  }
`;

const MainStyle = styled.main`
  /* width: 200px;
  height: 80px;
  background-color: deeppink;
  text-align: center;
  color: antiquewhite;
  margin-left: 43%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  border-radius: 10px; */
`;
const DivStyle = styled.div`
  display: flex;
`;

const LogoStyle = styled.h1`
  background-image: linear-gradient(99deg, red, red, red);
  border-radius: 20px;
  color: antiquewhite;
  height: 60px;
  width: 150px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding-top: 20px;
  margin-top: 10px;
`;
