import React from "react";
import styled from "styled-components";

const Modalka = () => {
  return <ModalStyle>Modalka</ModalStyle>;
};

export default Modalka;

const ModalStyle = styled.div`
  width: 200px;
  height: 150px;
  background-color: azure;
  border-radius: 5px;
  z-index: 10;
`;
