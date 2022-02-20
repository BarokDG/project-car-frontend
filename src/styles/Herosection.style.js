import styled from "styled-components";

export const Hero = styled.div`
  background-color: linear-gradient(45deg, blue, red);
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

export const Search = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 10px;
  margin: 3%;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 10%;
    margin-right: 10%;
  }
  &:hover {
    background-color: #ffffffe4;
    transition: 0.3s ease;
  }
`;