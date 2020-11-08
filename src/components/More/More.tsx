/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../../firebase/Auth";
import CardButton from "../CardButton";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const rule = [
  <React.Fragment>
    1. 플레이어의 수를 정하고 카테고리를 선택합니다.
  </React.Fragment>,
  <React.Fragment>
    2. 순서대로 <span>제시어 확인하기</span> 버튼을 눌러 본인의 제시어를
    확인합니다.
  </React.Fragment>,
  <React.Fragment>
    3. 확인이 되었으면 <span>버튼을 눌러</span> 다음 플레이어에게 차례를
    넘깁니다.
  </React.Fragment>,
  <React.Fragment>
    4. 모든 플레이어가 제시어를 확인하였으면, 확인한 순서대로 제시어를
    <span>라이어에게 들키지 않게</span> 설명합니다.
  </React.Fragment>,
  <React.Fragment>
    5. 모든 플레이어가 설명이 끝나면 투표를 통해 누가 라이어인지 정합니다.
    <p>※인원에 따라 순서대로 한바퀴 더 설명합니다.</p>
  </React.Fragment>,
  <React.Fragment>
    6. 라이어 아닌 사람이 라이어로 뽑히거나, 라이어가 제시어를 맞히면
    <span>라이어의 승리</span>,라이어가 제시어를 못 맞히면 나머지
    <span>플레이어들의 승리</span>입니다.
  </React.Fragment>,
];

function More() {
  const { version = "", fetchRemoteConfig } = useContext(AuthContext);
  const ruleList = rule.map((element: any, index: number) => (
    <StyledContext key={index}>{element}</StyledContext>
  ));
  return (
    <StyledMoreWrapper>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          🎮 &nbsp;게임방법
        </AccordionSummary>
        <StyledAccordionDetails>{ruleList}</StyledAccordionDetails>
      </StyledAccordion>
      <CardButton cardSize="primary" onClick={()=>{}}>
        <StyledSync>
          <span>🔃&nbsp;단어 DB 동기화</span>
          <span style={{ color: "#777" }}>v{version}</span>
        </StyledSync>
      </CardButton>
      <CardButton cardSize="primary" onClick={()=>window.open('https://play.google.com/store/apps/details?id=io.jkgwak.liargame')}>📱&nbsp;Android App</CardButton>
    </StyledMoreWrapper>
  );
}

export default More;

const StyledMoreWrapper = styled.div`
  & > * + * {
    margin-top: 20px;
  }
`;

const StyledContext = styled.div`
  color: black;
  font-size: 14px;
  line-height: 1.5;
  & > span {
    color: #bd4358;
  }
  & > p {
    margin-top: 5px;
  }
`;

const StyledAccordion = styled(Accordion)`
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px !important;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const StyledAccordionDetails = styled(AccordionDetails)`
  & > * + * {
    margin-top: 15px;
  }
`;

const StyledSync = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
