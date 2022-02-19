import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Car from "../components/Car";
import styled from "styled-components";

const Container = styled.div`
  background: url("../images/car-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export default function CarPage() {
  return (
    <>
      <Container>
        <Navbar />
        <Car />
      </Container>
    </>
  );
}
