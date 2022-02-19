import styled from "styled-components";

const Hero = styled.div`
  background-color: linear-gradient(45deg, blue, red);
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
`;

const Search = styled.input`
  width: 100vh;
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

function Herosection() {
  return (
    <>
      <Hero>
        <div>
          <Search type="text" placeholder="Search by Make, Model or Keyword" />
          <i class="fa fa-user icon"></i>
        </div>
      </Hero>
    </>
  );
}
export default Herosection;
