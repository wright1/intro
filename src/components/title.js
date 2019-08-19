import React from "react"
import styled from "styled-components"

const TitleP = styled.div`
color: white;
font-size: 2.5em;
line-height: 1.5em;
padding-left: 0.3em;
> .line1, .line4{
    font-family:'PT Sans Narrow', sans-serif;
    font-size: 2.1em;
    
}
> .line2{
    font-family: 'Fredericka the Great', cursive;
    font-size: 2.5em;
    
}
> .line3{
    font-size: 2.1em;
}


` 

export  const Title = () =>{
    return(
//linter needs closing tag for <br>
  <TitleP>
    <span className="line1">NOT</span><br></br>
    <span className="line2">your average</span><br></br>
    <span className="line3">junior<br></br>full-stack</span><br></br>
    <span className="line4">DEVELOPER</span>
  </TitleP>

    )
}

