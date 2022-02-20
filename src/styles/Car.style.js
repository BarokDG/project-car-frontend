import styled from "styled-components";

export const CarContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 5%;
`;
export const CarTitle = styled.h2`
  color: white;
  font-weight: 300;
`;
export const CarDate = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`;
export const CarDescription = styled.p`
  color: white;
  font-weight: 300;
`;
export const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background-color: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid white;
  outline: 0;
  font-weight: 300;
  &:hover {
    opacity: 0.8;
  }
`;

export const CarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
`;