import styled from "styled-components";

export const Container = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin-left: 1.5rem;
    }

    color: #4a90a7;

    p {
        color: rgba(0, 0, 0, 0.50);
    }
    height: 100%;

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        img {
            width: 85px;
            height: 85px;
            border-radius: 50%;
            margin-left: 1rem;
        }
    }
    
    @media screen and (min-width: 1025px) and (max-width: 1920px) {
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-left: 1rem;
        }
    }
`

export const SubContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-top: 2rem;
    height: 100%;
    margin-bottom: 6rem;
    @media screen and (min-width: 768px) and (max-width: 1024px) {
        /* background-color: red; */
    }

`

export const Divisor = styled.hr`
    margin-top: 1.5rem;
    margin-bottom: 1rem;
`

export const InputBox = styled.div`
    background-color: #D9D9D9;
    display: flex;
    width: 20rem;
    align-items: center;
    justify-content: space-around;
    max-width: 500;
    margin: 0 auto;
    padding-right: 0.8rem;
    border-radius: 10px;

    @media screen and (min-width: 1024px) and (max-width: 1920px) {
        background-color: #D9D9D9;
        display: flex;
        width: 40rem;
        align-items: center;
        justify-content: space-around;
        max-width: 500;
        margin: 0 auto;
        padding-right: 0.8rem;
        border-radius: 10px;
    }
`

export const FindMessage = styled.input`
    background-color: #D9D9D9;
    width: 24rem;
    border: none;
    border-radius: 8px;
    border-radius: 10px;
    padding: 0.7rem;
    outline: none;

    @media screen and (min-width: 1024px) and (max-width: 1920px) {
        background-color: #D9D9D9;
        border: none;
        border-radius: 8px;
        border-radius: 10px;
        padding: 0.7rem;
        outline: none;
        width: 44rem;
    }
`

export const Box = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: center;
    padding-bottom: 1rem;
   
    

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        /* background-color: blue; */
    }
`

export const MessageBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.50);
    h3 {
        font-weight: 900;
    }

   

    @media screen and (min-width: 768px) and (max-width: 1024px) {
        /* background-color: yellow; */
        width: 100%;
    }

    @media screen and (min-width: 1025px) and (max-width: 1920px) {
        /* background-color: yellow; */
        width: 100%;
    }
   

`