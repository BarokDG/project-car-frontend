import styled from 'styled-components';

const Nav = styled.nav`
    background-color: blue;
    width: 100%;
    height: fit-content;
    
`;

export default function Navbar() {
    return (
        <>
            <Nav>
                <p>This is the navbar</p>
            </Nav>
        </>
    );
}