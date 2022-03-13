import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Search } from "../styles/Herosection.style";
import Nav from "../components/Navbar";
import Car from "../components/Car";
import { cars } from "../refs/cars";
// import axios from "../axios";

const Container = styled.div``;

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
        <Search type="text" placeholder="Search by Make, Model or Keyword" />
        <Car cars={cars} />
      </Container>
    </>
  );
}
