import * as React from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import RemoveOutlinedIcon from "@material-ui/icons/RemoveOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

type Props = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  maxCount: number;
  minCount: number;
};

function CountButton(props: Props) {
  const { count, onIncrease, onDecrease, maxCount, minCount } = props;

  return (
    <StyledCard>
      <IconButton onClick={onDecrease} disabled={count === minCount}>
        <RemoveOutlinedIcon />
      </IconButton>
      {count}명
      <IconButton onClick={onIncrease} disabled={count === maxCount}>
        <AddOutlinedIcon />
      </IconButton>
    </StyledCard>
  );
}

export default CountButton;

const StyledCard = styled(Card)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-radius: 20px !important;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;
