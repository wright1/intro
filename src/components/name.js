import React from "react"
import styled from "styled-components"

const NameDiv = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 1.3em;
font-family: 'PT Sans Narrow', sans-serif;
font-size: 2.5em;
color: #140036;
width: 60vw;
align-items: center;
line-height: 1.1em;
> .firstName{
    padding-left: 1em;
}
> .lastName{
    padding-left: 3em;
}
`

export const Name = () =>{
    return(
        <NameDiv>
            <span className="firstName">Charmaine</span>
            <span className="lastName">Wright</span>
        </NameDiv>
    )
}