import React from 'react';
import styled from 'styled-components';
import map from '../img/map.png';
import phone from '../img/phone.png';
import send from '../img/send.png';

const Container = styled.div`
    margin-top: 20px;
`
const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
        flex-direction: column;
    }
`
const FormContainer = styled.div`
    width: 50%;
    @media only screen and (max-width:480px){
        width: 100%;
    }
`
const Title = styled.h2`
    margin: 50px;
    margin-top: 0;
    @media only screen and (max-width:480px){
        margin: 20px;
    }
`
const leftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width:480px){
        height: 50%;
        margin-right: 0;
    }
`

const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media only screen and (max-width:480px){
        width: 68%;
    }
`

const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width:480px){
        flex-direction: column;
    }

`
const Inputs = styled.input`
    width: 200px;
    padding: 20px;
    margin-right: 30px;
    margin-left: 50px;
    margin-bottom: 20px;
    @media only screen and (max-width:480px){
        padding: 5px;
    }
`
const TextArea = styled.textarea`
    width: 200px;
    height: 50%;
    padding: 20px;
    margin-right: 30px;
    @media only screen and (max-width:480px){
        padding: 5px;
        margin-top: 10px;
    }
`
const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 5px;
    cursor: pointer;
    width: 243px;
    @media only screen and (max-width:480px){
        width: 214px;
        margin-top: 10px;
        font-size: 14px;
        padding: 10px;
    }
    
`
const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (max-width:480px){
        width: 100%;
        margin-top: 20px;
    }
`
const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    @media only screen and (max-width:480px){
        margin-bottom: 20px;
    }
`
const Icons = styled.img`
    width: 20px;
    margin-right: 20px;
    @media only screen and (max-width:480px){
        width: 15px;
    }
`
const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;
    @media only screen and (max-width:480px){
        font-size: 14px;
    }
`

const Contacts = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Questions? <br /> Let's Get In Touch</Title>
                    <Form>
                    <leftForm>
                        <Inputs placeholder='your name'/>
                        <Inputs placeholder='your Email'/>
                        <Inputs placeholder='Subject'/>
                    </leftForm>
                    <RightForm>
                        <TextArea placeholder='Your message'/>
                        <Button>Send</Button>
                    </RightForm>
                    </Form>
                    </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icons src={map}/>
                        <Text>123 Park Avenue St., New York, USA</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icons src={phone}/>
                        <Text>+1 631 1234 5678</Text>
                        <Text>+1 631 1234 5678</Text>
                    </AddressItem>
                    <AddressItem>
                        <Icons src={send}/>
                        <Text>contact@lama.dev</Text>
                        <Text>sales@lama.dev</Text>
                    </AddressItem>
                </AddressContainer>
            </Wrapper>
        </Container>
    )
}

export default Contacts
