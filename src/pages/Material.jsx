import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const materials = [
  {
    title: "Material 1",
    id: 1,
  },
  {
    title: "Material 2",
    id: 2,
  },
];

const Material = () => {
  return (
    <>
      {materials.map((material) => {
        return (
          <>
            <StyleMaterial>
              <li>{material.title}</li>
              <Link key={material.id} to={`${material.id}`}>
                Details
              </Link>
            </StyleMaterial>
          </>
        );
      })}
    </>
  );
};

export default Material;

const StyleMaterial = styled.div`
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
`;
