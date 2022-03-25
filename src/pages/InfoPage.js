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
  background-color: #e1e1e1;
  background-image: repeating-linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px,
      transparent 60px
    ),
    repeating-linear-gradient(
      60deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px,
      transparent 60px
    ),
    linear-gradient(
      60deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0.1)
    ),
    linear-gradient(
      120deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 75%,
      rgba(0, 0, 0, 0.1) 75%,
      rgba(0, 0, 0, 0.1)
    );
  background-size: 70px 120px;
  display: grid;
  border-radius: 5px;
  padding: 3%;
  /* box-shadow: 0px 5px 5px 5px #7b7fda; */
  gap: 10%;
  grid-template-columns: auto;
  justify-content: space-around;
  &:hover {
    box-shadow: 0px 1px 1px 1px #7b7fda;
    transition: all 0.2s ease;
  }
  /* @media (max-width: 650px) {
    grid-template-columns: auto;
    transition: 0.3s all ease;
  } */
`;
const Info = styled.div`
  /* background: inherit; */
  display: grid;
  gap: 4%;
`;

const Header = styled.h1`
  color: var(--clr-primary-400);
`;

const SecondHeading = styled.p`
  font-size: var(--text-base);
`;

const Ul = styled.ul`
  margin-left: 2%;
  padding: 0;
  list-style: none;
  font-size: var(--text-small);
  display: grid;
  gap: 0.7rem;
`;

const CustomLi = styled.li`
  display: grid;
  grid-template-columns: 0 1fr;
  gap: 1.75em 1em;
  align-items: start;
  /* font-size: 1.5rem; */
  line-height: 1p5;
`;

const Li = styled.svg`
  stroke: purple;
  stroke-width: 1px;
  /* margin-right: 1%; */
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
        <Header>Would you like to sell a car?</Header>
        <InfoWrapper>
          <Info>
            <SecondHeading>Follow these simple steps: </SecondHeading>
            <Ul>
              <CustomLi>
                <Li width="10" height="20">
                  <line x1="5" y1="6" x2="10" y2="11" />
                  <line x1="0" y1="11" x2="10" y2="11" />
                  <line x1="10" y1="11" x2="5" y2="16" />
                </Li>
                Create telegram account
              </CustomLi>
              <CustomLi>
                <Li width="10" height="20">
                  <line x1="5" y1="6" x2="10" y2="11" />
                  <line x1="0" y1="11" x2="10" y2="11" />
                  <line x1="10" y1="11" x2="5" y2="16" />
                </Li>
                Take good photos of your car-both inside and out
              </CustomLi>
              <CustomLi>
                <Li width="10" height="20">
                  <line x1="5" y1="6" x2="10" y2="11" />
                  <line x1="0" y1="11" x2="10" y2="11" />
                  <line x1="10" y1="11" x2="5" y2="16" />
                </Li>
                Enter necessary car details
              </CustomLi>
              <CustomLi>
                <Li width="10" height="20">
                  <line x1="5" y1="6" x2="10" y2="11" />
                  <line x1="0" y1="11" x2="10" y2="11" />
                  <line x1="10" y1="11" x2="5" y2="16" />
                </Li>
                Contact @Getzauto on telegram
              </CustomLi>
            </Ul>
            <p>
              Check out our telegram channel{" "}
              <i>
                <a href="https://t.me/i102020">GETZ AUTOMOTIVE</a>
              </i>{" "}
            </p>
          </Info>
        </InfoWrapper>
      </Container>
    </>
  );
}
