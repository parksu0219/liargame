import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withTheme } from '@material-ui/core/styles';
import { navigate } from "@reach/router";

interface Props {
  word: string;
  theme: any;
}

function Header(props: Props) {
  const { word, theme } = props;
  
  return (
    <StyledHeader theme={theme}>
      <StyledLink onClick={()=>navigate(-1)}>
        <ArrowBackIcon/>
      </StyledLink>
      <StyledHeaderText>{word}</StyledHeaderText>
    </StyledHeader>
  );
}

export default withTheme(Header);

const StyledHeader = styled.div`
display: flex;
align-content: center;
  background-color: ${({theme})=> theme.themeMode.colors.buttonBackgounrd };
  font-size: 18px;
  padding: 15px 10px;
  color: ${({theme})=> theme.themeMode.colors.text };
`;

const StyledHeaderText = styled.span`
  margin-left: 5%;
`;

const StyledLink = styled.div`
    display: inline-flex;
    align-items: center;
    cursor: pointer;
`;
