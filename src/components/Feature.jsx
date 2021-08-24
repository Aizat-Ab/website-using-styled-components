import React from 'react';
import styled from 'styled-components';
import app from '../img/app.png';
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
    display: flex;
    @media only screen and (max-width:480px){
        flex-direction: column;
        padding: 30px 20px;
    }
`
const Left = styled.div`
    width: 50%;
    @media only screen and (max-width:480px){
        display: none;
    }
`
const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width:480px){
        width: 100%;
    }
`
const Img = styled.img`
    width: 80%;
`
const Title= styled.span`
    font-size: 70px;
    @media only screen and (max-width:480px){
        font-size: 50px;
    }
`
const SubTitle= styled.span`
    font-size: 24px;
    font-style: italic;
    color: #333;
    margin-top: 30px;
`
const Desc = styled.p`
    font-size: 20px;
    color: #777;
    margin-top: 20px;
`
const Button = styled.button`
    width: 150px;
    border: none;
    padding: 15px 20px;
    background: blue;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 20px;
`

const Feature = () => {
    return (
        <Container>
            <Left><Img src={app}></Img></Left>
            <Right>
                <Title>
                    good <b>design,</b>
                    <br/>
                    <b>good</b> business<br/>
                </Title>
                <SubTitle>We know that good design means good business.</SubTitle>
                <Desc>We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.</Desc>
          <Desc>We care your business and guarantee you to achieve marketing goals.</Desc>
                <Button>Learn more</Button>
            </Right>
            <AnimatedShapes/>
        </Container>
    )
}

export default Feature
