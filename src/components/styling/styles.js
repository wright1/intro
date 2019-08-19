import styled, { css, createGlobalStyle } from "styled-components"
import panel from "../../../public/images/selfImage.jpg"

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        color: white;
    font-family: 'Shadows Into Light', cursive;
    -webkit-animation-name: fadeout;
	-webkit-animation-duration: 3s;
    -webkit-animation-timing-function: ease-in;
    }

    }
    html{
        height: 100vh;
    }
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height:100vh;
    background-color: white;
    background-image: url(${props=>props.img || 'none'});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: ${props=>props.attachment || 'none'};
    background-position: cover;
    overflow: hidden;
    position: relative;
    justify-content: center;
    font-family: 'Shadows Into Light Two', cursive;
    > .panel{
        position: absolute;
        top: 13vh;
        bottom: 0;
        right: 5vw;
    }
    @media(min-width: 668px){
        font-size: 1.2em;
    }
    
`

export const ImagePanel = styled.div`
width: 30vw;
height: 80vh;
background-image: url(${panel});
background-repeat: no-repeat;
background-size: cover;
background-position: cover;
border-radius: 10px;
box-shadow: 0 0 5px 5px grey;
`

export const Head = styled.div`
display: flex;
width: 100vw;
height: 10vh;
position: absolute;
top: 0.3em;
font-family: 'PT Sans Narrow', cursive; 
font-size: 2.7em;
color: #140036;
justify-content: center;
`



