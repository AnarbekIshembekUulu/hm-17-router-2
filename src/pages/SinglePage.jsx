import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";

// const materials = [
//   {
//     title: "Material 1",
//     id: 1,
//   },
//   {
//     title: "Material 2",
//     id: 2,
//   },
// ];

const SinglePage = () => {
  const { id } = useParams();
  const [material, setMaterial] = useState(null);
  useEffect(() => {
    setMaterial(id);
  }, [id]);

  return (
    <div>
      {material && (
        <>
          <DivMateruialSection1>
            <HStyle>Material details page:</HStyle>
            <h2>Material {id}</h2>
          </DivMateruialSection1>
          <DivMaterialSection2>
            <Link to={"submitted"}>Submitted</Link>
            <Link to={"waiting"}>waiting</Link>
            <Link to={"late"}>Late</Link>
          </DivMaterialSection2>
          <MainOutlet>
            <Outlet />
          </MainOutlet>
        </>
      )}
    </div>
  );
};

export default SinglePage;

const HStyle = styled.h1`
  font-size: 1rem;
`;

const DivMateruialSection1 = styled.div`
  width: 84.5vw;
  border-radius: 5px;
  height: 100px;
  padding-top: 18px;
  margin-top: 20px;
  margin-left: 20px;
  background-color: #8fa7be;
  color: antiquewhite;
`;

const DivMaterialSection2 = styled.div`
  width: 84.5vw;
  height: 50px;
  background-color: brown;
  margin-left: 20px;
  margin-top: 30px;
  border-radius: 5px;
  padding-top: 20px;
  display: flex;
  justify-content: space-around;
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
const MainOutlet = styled.main`
  width: 84.5vw;
  height: 400px;
  background-color: #b9078a;
  margin-left: 20px;
  border-radius: 10px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: antiquewhite;
  text-transform: uppercase;
  font-size: 4rem;
  letter-spacing: 7px;
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;
