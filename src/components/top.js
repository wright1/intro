import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"

const Div = styled.div`
width: 9vw;
height: 8wh;
position: absolute;
bottom: 0.5em;
right: 1em;
color: #140036; 
text-align: center;
border: 0.3em solid #140036;
border-radius: 50%;
a{
    text-decoration: none;
    color: #140036; 
    

}
`

export const Top = () => {
    return(
        <Div>
            <Link href="title"
             activeClass="active"
             to="title"
             spy={ true }
             smooth={ true }
             offset={ 0 }
             duration={ 800 }

            >
        <p>Back To Top</p>
            </Link>
        </Div>
    )
}