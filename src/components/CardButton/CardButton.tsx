import React, { ReactChild } from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import { device } from "../../util";

type Props = {
  children: ReactChild | JSX.Element | JSX.Element[];
  onClick?: () => void;
  cardSize?: string;
};

function CardButton({ children, onClick, cardSize = "" }: Props) {
  return (
    <StyledCard onClick={onClick} size={cardSize}>
      <CardActionArea>{children}</CardActionArea>
    </StyledCard>
  );
}

export default CardButton;

const getSize = (props) => {
  switch (props.size) {
    case "primary":
      return `width: 100%;`;
    case "category":
      return `width: 240px;`;
    case "player":
      return `
        width: 400px;
        height: 150px;`;
    default:
      return `width: 100%;`;
  }
};

const getButtonPadding = (props) => {
  switch (props.size) {
    case "primary":
      return `15px`;
    case "category":
    case "player":
      return `20px`;
    default:
      return `15px`;
  }
};

const StyledCard = styled(Card)`
  display: flex;
  justify-content: center;
  ${(props) => getSize(props)}
  border-radius: 20px !important;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  & > button {
    padding: ${(props) => getButtonPadding(props)};
    font-size: 18px;
    font-weight: bold;
  }
  @media ${device.mobileL} {
    width: 100%;
  }
`;
