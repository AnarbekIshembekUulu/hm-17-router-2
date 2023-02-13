import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Notification = () => {
  return (
    <AnouncementsStyle>
      <h4>Notification Page</h4>
      <Link to={"error"}>Go to Students page</Link>
    </AnouncementsStyle>
  );
};

export default Notification;

const AnouncementsStyle = styled.div`
  width: 84.5vw;
  height: 80vh;
  background-color: darkblue;
  margin-left: 20px;
  margin-top: 60px;
  border-radius: 20px;
  h4 {
    color: antiquewhite;
    font-size: 4rem;
  }
  a {
    text-decoration: none;
    color: #40311e;
    font-size: 2rem;
    background-color: bisque;
    border-radius: 10px;
    cursor: pointer;
  }
`;
