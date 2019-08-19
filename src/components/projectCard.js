import React from "react"
import  styled from "styled-components"

const ProjectDiv = styled.div`
width: 30vw;
height: 50vh;
display: flex;
background-image: url(${props=>props.img});
background-repeat: no-repeat;
background-size: cover;
background-position: auto;
flex-direction: column;
color: #140036;
`

const Wrapper = styled.img`
width: 27vw;
height:20vh;
display: flex;
margin: 1em;
border-radius: 5px;
margin-left: 40vw;
`

export const ProjectCard = ({img, place}) => {

    return(



        <a href={ place }><Wrapper src={ img } alt="project screenshot" /></a>
        
        // <ProjectDiv >
            
                
        // <span>{ word }</span>
        // <span><a>{ label }</a></span>
        // </ProjectDiv>
        
        

    )
}

export default ProjectCard