import styled from 'styled-components';

const Hero = styled.div`
    background-color: linear-gradient(45deg, blue, red);
    width: 100%;
    height: max-content;
`;


export default function Herosection() {
    return (
        <Hero>
            <p>This is the herosection, its going to be in the middle of the  homepage</p>
        </Hero>
    );
}