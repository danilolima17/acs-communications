import styled from "styled-components";

export const Footer = styled.footer`
  background-color: #4a90a7;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 0.4rem;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.3rem;
      cursor: pointer;
      
      span {
        color: #Fff;
        text-align: center;
        margin-left: 1.2rem;
      }
    }

    img {
      width: 3.2rem;
      height: 3.2rem;
      background-color: #f0f0f0;
      padding: 0.6rem;
    }
  }

  svg {
    color: #fff;
    font-weight: 900;
  }
`