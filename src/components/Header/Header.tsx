import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { navigate } from "@reach/router";

interface Props {
  word: string;
}

function Header(props: Props) {
  const { word } = props;
  
  return (
    <StyledHeader>
      <StyledLink onClick={()=>navigate(-1)}>
        <ArrowBackIcon />
      </StyledLink>
      <StyledHeaderText>{word}</StyledHeaderText>
    </StyledHeader>
  );
}

export default Header;

const StyledHeader = styled.div`
display: flex;
align-content: center;
  background-color: white;
  font-size: 18px;
  padding: 15px 10px;
`;

const StyledHeaderText = styled.span`
  margin-left: 5%;
`;

// [TODO]: hover style 
const StyledLink = styled.div`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
`;
