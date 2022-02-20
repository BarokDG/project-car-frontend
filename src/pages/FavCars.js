import React from "react";
import styled from "styled-components";
import Car from "../components/Car";
import Navbar from "../components/Navbar";

const Container = styled.div`
  background: url("../images/car-background.png");
  background-repeat: repeat-y;
  background-size: cover;
  width: 100%;
  /* height: 100vh; */
`;

const FavTitle = styled.h1`
  color: white;
  font-weight: 800;
`;

function FavCars() {
  var n = Object.keys(sessionStorage);
  var cars = [];
  for (let key of n) {
    cars.push(JSON.parse(sessionStorage[key]));
  }

  return (
    <>
      <Container>
        <Navbar />
        <FavTitle>Your Favorite Cars</FavTitle>
        <Car cars={cars} />
      </Container>
    </>
  );
}

export default FavCars;
