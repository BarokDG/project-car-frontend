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
        <h1
          style={{
            fontSize: "var(--text-medium)",
            textAlign: "center",
            fontWeight: 400,
            color: "var(--clr-primary-600)",
          }}
        >
          Search by Make, Model or Keyword
        </h1>
        <Search type="text" placeholder="Type here..." />
        <Car cars={cars} />
      </Container>
    </>
  );
}
