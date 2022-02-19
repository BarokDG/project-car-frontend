import React from 'react';
import styled from "styled-components";
import Nav from '../components/Navbar'
import Herosection from '../components/Herosection'
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const Container = styled.div`
    background: url("https://cdn.pixabay.com/photo/2021/11/29/21/45/car-6833908_960_720.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
`;

export default function HomePage() {
    return (
        <Container>
            <Nav />
            <Herosection />
            <Link to="/cars">
                Cars
            </Link>
            {/* <Footer /> */}
        </Container>
    );
}