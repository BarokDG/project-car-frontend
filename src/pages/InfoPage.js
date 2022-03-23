import React from "react";
import styled from "styled-components";
import Nav from "../components/Navbar";

const Container = styled.div`
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: grid;
  border-radius: 5px;
  padding: 3%;
  box-shadow: 0px 5px 5px 5px #7b7fda;
  gap: 10%;
  grid-template-columns: auto;
  justify-content: space-around;
  &:hover {
    box-shadow: 0px 15px 15px 15px #7b7fda;
    transition: all 0.2s ease;
  }
  /* @media (max-width: 650px) {
    grid-template-columns: auto;
    transition: 0.3s all ease;
  } */
`;
const Info = styled.div`
  background: inherit;
  display: flex;
  flex-direction: column;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.svg`
  stroke: purple;
  stroke-width: 1px;
  margin-right: 2%;
  &:hover {
    transform: rotate(180deg);
    transition: all 0.5s ease;
  }
`;

export default function InfoPage() {
  return (
    <>
      <Nav />
      <Container>
        <h1>Would you like to sell a car?</h1>
        <InfoWrapper>
          <Info>
            <p>Follow these simple steps</p>
            <Ul>
              <li>
                <Li width="10" height="10">
                  <line x1="5" y1="0" x2="10" y2="5" />
                  <line x1="0" y1="5" x2="10" y2="5" />
                  <line x1="10" y1="5" x2="5" y2="10" />
                </Li>
                Create telegram account
              </li>
              <li>
                <Li width="10" height="10">
                  <line x1="5" y1="0" x2="10" y2="5" />
                  <line x1="0" y1="5" x2="10" y2="5" />
                  <line x1="10" y1="5" x2="5" y2="10" />
                </Li>
                Take good photos of your car-both inside and out
              </li>
              <li>
                <Li width="10" height="10">
                  <line x1="5" y1="0" x2="10" y2="5" />
                  <line x1="0" y1="5" x2="10" y2="5" />
                  <line x1="10" y1="5" x2="5" y2="10" />
                </Li>
                Enter necessary car details
              </li>
              <li>
                <Li width="10" height="10">
                  <line x1="5" y1="0" x2="10" y2="5" />
                  <line x1="0" y1="5" x2="10" y2="5" />
                  <line x1="10" y1="5" x2="5" y2="10" />
                </Li>
                Contact <i>@AtoBrightSide</i>
              </li>
            </Ul>
          </Info>
          <Info>
            <p>Check out our telegram channel </p>
            <p>
              <i>
                <a href="https://t.me/i102020">GETZ AUTOMOTIVE</a>
              </i>
            </p>
          </Info>
        </InfoWrapper>
      </Container>
    </>
  );
}
