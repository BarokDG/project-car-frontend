import { Hero, SearchWrapper } from "../styles/Herosection.style";

function Herosection() {
  return (
    <>
      <Hero>
        <SearchWrapper>
          <input type="text" placeholder="Search by Make, Model or Keyword" />
        </SearchWrapper>
      </Hero>
    </>
  );
}
export default Herosection;
