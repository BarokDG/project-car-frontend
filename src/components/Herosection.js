import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

const Hero = styled.div`
    background-color: linear-gradient(45deg, blue, red);
    width: 100%;
    height: fit-content;
`;


export default function Herosection() {
    return (
        <Hero>
            This is the herosection
        </Hero>
    );
}