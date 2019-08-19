import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"


const LinkDiv = styled.div`
margin-top: 5vh;
text-align: center;
`

export const Chevron = ({ place, image }) => {
    return(
        <LinkDiv>
        <Link href={place}
         activeClass="active"
         to={ place }
         spy={ true }
         smooth={ true }
         offset={ 0 }
         duration={ 800 }
         
        >
        <img src={image}></img>
        </Link>
        </LinkDiv>
    )
}




