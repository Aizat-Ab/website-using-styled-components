import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-right: 50px;
    display: flex;
    height: 100%;
    justify-content: center;
    padding: 20px;
    -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
    box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
    background: white;
    border-radius: 10px;
    diplay: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width:480px){
        margin-bottom: 10px;
        margin-right: 0px;
        padding: 10px;
    }
`
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`
const Price = styled.span`
    font-weight: bold;
    font-size: 50px;
    @media only screen and (max-width:480px){
        font-size: 30px;
    }
`
const Type = styled.button`
    padding: 10px;
    margin: 10px 0;
    border: 1.5px solid crimson;
    color: crimson;
    background: white;
    border-radius: 20px;
    @media only screen and (max-width:480px){
        display: none;
    }
`
const List = styled.ul`
    list-style: none;
`
const ListItem = styled.li`
    margin: 30px 0;
    @media only screen and (max-width:480px){
        margin: 10px;
        font-size: 12px;
    }
`
const Button = styled.button`
    border:none;
    background: darkblue;
    color: white;
    font-size: 16px;
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    @media only screen and (max-width:480px){
        padding: 5px;
        font-size: 12px;
    }
`

const PriceCard = ({price, type}) => {
    return (
        <Container>
            <PriceContainer>
                $<Price>{price}</Price>/month
                </PriceContainer>
                <Type>{type} Plan</Type>
                <List>
                    <ListItem>200 Hand-Crafted Templates</ListItem>
                    <ListItem>Exclusive Support</ListItem>
                    <ListItem>50+ PreBuilt Websites</ListItem>
                    <ListItem>Premium Plugins</ListItem>
                    <Button>Join Now</Button>
                </List>
            
        </Container>
    )
}

export default PriceCard
