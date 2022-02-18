import React from 'react';
import Nav from '../components/Navbar'
import Herosection from '../components/Herosection'
import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <>
            <Nav />
            <Herosection/>
            <Link to="/cars">
                Cars
            </Link>
        </>
    );
}