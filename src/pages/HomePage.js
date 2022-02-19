import React from "react";
import styled from "styled-components";
import Nav from "../components/Navbar";
import Herosection from "../components/Herosection";
import Footer from "../components/Footer";

const Container = styled.div`
  background: url("https://cdn.pixabay.com/photo/2020/01/10/18/26/car-4755928_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export default function HomePage() {
  return (
    <>
      <Container>
        <Nav />
        <Herosection />
      </Container>
      {/* <Footer /> */}
    </>
  );
}
