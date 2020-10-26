import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import CardButton  from '../CardButton';
import { device } from "../../util";
import { Link } from "@reach/router"

type Props = {
  data: any;
};

function SelectCategory(props: Props) {
  const { data } = props;
  const playerCheckPath = `/liargame/select/${data.name}/`;

  return (
    <StyledList>
      <Link to={playerCheckPath}>
      <CardButton
        cardSize="category"
      >
        {data && (
          <React.Fragment>
            <StyledHeader variant="h4" component="h2">
              {data.name}
            </StyledHeader>
            <StyledContents variant="body2" color="textSecondary" component="p">
              {data.name_en}
            </StyledContents>
            <StyledLabel gutterBottom variant="h4" component="h2">
              {data.emoji}
            </StyledLabel>
          </React.Fragment>
        )}
      </CardButton>
      </Link>
    </StyledList>
  );
}

export default SelectCategory;

const StyledList = styled.li`
  margin-top: 30px;
  @media ${device.mobileL} {
    width: 46.5%;
  }
`;

const StyledLabel = styled(Typography)`
  && {
    text-align: right;
    margin-bottom: 0;
    @media ${device.mobileL} {
      font-size: 25px;
    }
  }
`;

const StyledHeader = styled(Typography)`
  && {
    font-weight: bold;
    @media ${device.mobileL} {
      font-size: 20px;
    }
  }
`;

const StyledContents = styled(Typography)`
  && {
    font-weight: bold;
    @media ${device.mobileL} {
      font-size: 14px;
    }
  }
`;
