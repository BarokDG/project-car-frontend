import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Car from '../components/Car';
export default function CarPage(){
    return (
        <>
            <Navbar/>
            <Link to="/">
                Home
            </Link>
            <Car/>
            <Car/>
            <Car/>
        </>
    );
}