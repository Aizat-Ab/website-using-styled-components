import React from 'react';
import styled from 'styled-components';
import woman from '../img/woman.png';
import AnimatedShapes from './AnimatedShapes';


const Container = styled.div`
    height: calc(100vh - 50px);
    display: flex;
    padding: 20px;
`
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`
const Title = styled.h1`
    width: 60%;
    font-size: 50px;
`

const Desc = styled.p`
    width: 60%;
    font-size: 20px;
    margin-top: 20px;
`
const Info = styled.div`
    width: 60%;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center; 
`
const Button = styled.button`
    padding: 15px;
    background: darkblue;
    color: white;
    border-radius: 10px;
    font-weight: bold;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;
`
const Contact = styled.div`
    display: flex;
    flex-direction: column;
`
const Phone = styled.span`
    color: pink;
    font-weight: bold;
`
const ContactText = styled.span`
    color: gray;
    margin-top: 5px;
`
const Right = styled.div`
    width: 40%;
`
const Image = styled.img`
    width: 90%;
`

const Intro = () => {
    return (
       <Container>
        <Left>
            <Title>Adventures in creative age</Title>
            <Desc>
            We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
            </Desc>
            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone>Call Us (012) 345 - 6789</Phone>
                    <ContactText>For any question or concern</ContactText>
                </Contact>
            </Info>
        </Left>
        <Right><Image src={woman}></Image></Right>
        <AnimatedShapes/>
       </Container>
    )
}

export default Intro
