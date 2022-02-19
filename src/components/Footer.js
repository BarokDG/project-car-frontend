import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
background-color: #242424;
padding: 3rem 0 1rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-self: center;
`;

const FooterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    text-align:center;
    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
`;

const FooterHeading = styled.p`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
margin-bottom: 24px;
font-size: 2.5rem;
`
const FooterText = styled.p`
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
margin-bottom: 24px;
font-size: 20px;
    
`
const FooterLinks = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
`
const FooterLinkWrapper = styled.div`
    display: flex;

`
const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    h2 {
        margin-bottom: 16px;
        color: white;
        font-size: 1rem;
    }
    a {
        text-decoration: none;
        color: white;
        &:hover {
            color: #e9e9e9;
            transition: 0.3s all ease-in;
        }
    }
`


function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterSubscription className="footer-subscription">
                    <FooterHeading className="footer sub heading">
                        Join the Community
                    </FooterHeading>
                    <FooterText className="footer-sub-text">
                        Subscribe to our telegram channel here
                    </FooterText>


                </FooterSubscription>
                <FooterLinks>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <h2>About Us</h2>
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <h2>Contact Us</h2>
                            <a href="">Link 1</a>
                            <a href="">Link 2</a>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <h2>Social Media</h2>
                            <a href="">Link 1</a>
                            <a href="">Link 2</a>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinks>
            </FooterContainer>
        </>
    );
}

export default Footer;
