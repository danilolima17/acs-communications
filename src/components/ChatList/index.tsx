import React from 'react'
import Navbar from '../Navbar'
import { Box, Container, Divisor, FindMessage, InputBox, MessageBox, SubContainer } from './styles'
import { MagnifyingGlass } from 'phosphor-react'
import { Footer } from '../ChatScreen/styles'
import FooterContainer from '../Footer'

const ChatList = () => {
  return (
    <>
    <Navbar />
    <Container>
        <SubContainer>
            <InputBox>
                <FindMessage placeholder='Pesquisar...' />
                <MagnifyingGlass size={26} color='rgba(0, 0, 0, 0.43)' />
            </InputBox>
            <Divisor />
            <Box>
                <img src="../img4.png" alt="" />
                <MessageBox>
                    <h3>Maria Cecília</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </MessageBox>
            </Box>
            <Box>
                <img src="../img4.png" alt="" />
                <MessageBox>
                    <h3>Maria Cecília</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </MessageBox>
            </Box>
            <Box>
                <img src="../img4.png" alt="" />
                <MessageBox>
                    <h3>Maria Cecília</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </MessageBox>
            </Box>
            <Box>
                <img src="../img4.png" alt="" />
                <MessageBox>
                    <h3>Maria Cecília</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </MessageBox>
            </Box>
            <Box>
                <img src="../img4.png" alt="" />
                <MessageBox>
                    <h3>Maria Cecília</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </MessageBox>
            </Box>
            <Box>
                <img src="../img4.png" alt="" />
                <MessageBox>
                    <h3>Maria Cecília</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </MessageBox>
            </Box>
            <Divisor />
        </SubContainer>
        <FooterContainer />
    </Container>
    </>
  )
}

export default ChatList