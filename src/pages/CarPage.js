import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search } from "../styles/Herosection.style";
import Nav from "../components/Navbar";
import Car from "../components/Car";
import { cars } from "../refs/cars";
// import axios from "../axios";

const Container = styled.div`
  background: url("../images/car-background.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  /* height: 100vh; */
`;

const SomeCont = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export default function CarPage() {
  // const [carInfo, setCarInfo] = useState([]);

  // useEffect(() => {
  //   axios.get("cars").then((res) => {
  //     setCarInfo(res.data);
  //   });
  // }, []);
  return (
    <>
      <Container>
        <Nav />
        <SomeCont>
          <Search type="text" placeholder="Search by Make, Model or Keyword" />
        </SomeCont>
        <Car cars={cars} />
      </Container>
    </>
  );
}
