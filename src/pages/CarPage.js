import React from 'react'
import { Link } from "react-router-dom";
export default function CarPage(){
    return (
        <>
            <h1>This is the Car page</h1>
            <Link to="/">
                Home
            </Link>
        </>
    );
}