import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  SearchWrapper,
  SearchActionWrapper,
} from "../styles/Herosection.style";
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
        <SearchWrapper>
          <h1>Find cars by Make, Model or Keyword</h1>
          <SearchActionWrapper>
            <input type="text" placeholder="Enter keywords..." />
            <button>Search</button>
          </SearchActionWrapper>
        </SearchWrapper>
        <Car cars={cars} />
      </Container>
    </>
  );
}
