import React from 'react';
import styled from 'styled-components';
import how from '../img/how1.png';
import MiniCart from './MiniCart';

const Container = styled.div`
    display: flex;
`
const Left = styled.div`
    width: 50%;
`
const Right = styled.div`
    width: 50%;
    
`
const Img = styled.img`
    height: 60%;
    margin-left: -240px;
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    flex-direction: column;
`
const Title = styled.h2`
    font-size: 46px;
`
const Desc = styled.p`
    font-size: 20px;
    margin-top: 20px;
    color: #555;
`
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`
const Button = styled.button`
    width: 180px;
    border: none;
    background: darkblue;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    margin-top: 50px;
    cursor: pointer;
    padding: 15px;
`
const Service = () => {
    return (
        <Container>
            <Left>
                <Img src={how}></Img>
            </Left>
            <Right>
            <Wrapper>
                <Title>Simple process to start</Title>
                <Desc> We provide digital experience services to startups and small
            businesses to looking for a partner of their digital media, design &
            development, lead generation and communications requirents. We work
            with you, not for you. Although we have a great resources</Desc>
            <CardContainer>
                <MiniCart/>
                <MiniCart/>
                <MiniCart/>
            </CardContainer>
            <Button>How it Works</Button>
            </Wrapper>
            </Right>
        </Container>
    )
}

export default Service
