/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import styled from "styled-components"
import { withTheme } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import useSetting from "../../hooks/Setting"
import CardButton from "../CardButton"
import DarkModeToggle from "../DarkModeToggle"
import KakaoShareButton from "../KakaoShareButton"

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
]

type Props = {
  theme: any
}

function More({ theme }: Props) {
  const { themeMode } = theme
  const { isDarkMode, changedDarkMode } = useSetting()
  const ruleList = rule.map((element: any, index: number) => (
    <StyledContext key={index} theme={themeMode}>
      {element}
    </StyledContext>
  ))

  function onToggle() {
    changedDarkMode(!isDarkMode)
  }
  return (
    <StyledMoreWrapper>
      <StyledContainer>
        <DarkModeToggle isDarkMode={isDarkMode} onChange={onToggle} />
      </StyledContainer>
      <StyledAccordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          🎮 &nbsp;게임방법
        </AccordionSummary>
        <StyledAccordionDetails>{ruleList}</StyledAccordionDetails>
      </StyledAccordion>
      <CardButton
        cardSize="primary"
        onClick={() =>
          window.open(
            "https://play.google.com/store/apps/details?id=io.jkgwak.liargame"
          )
        }
      >
        📱&nbsp;&nbsp;Android App
      </CardButton>
      <StyledContainer>
        <KakaoShareButton />
      </StyledContainer>
    </StyledMoreWrapper>
  )
}

export default withTheme(More)

const StyledMoreWrapper = styled.div`
  & > * + * {
    margin-top: 20px;
  }
`

const StyledContext = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  line-height: 1.5;
  & > span {
    color: #bd4358;
  }
  & > p {
    margin-top: 5px;
  }
`

const StyledAccordion = styled(Accordion)`
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px !important;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  &::before {
    background-color: transparent !important;
  }
`

const StyledAccordionDetails = styled(AccordionDetails)`
  & > * + * {
    margin-top: 15px;
  }
`

const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* padding: 6px 15px; */
  & > * + * {
    margin-left: 10px;
  }
`
