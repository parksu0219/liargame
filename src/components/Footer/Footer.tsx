import React from "react"
import styled from "styled-components"
import Button from "@material-ui/core/Button"
import { device } from "../../util"
import HomeIcon from "@material-ui/icons/Home"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import { withTheme } from '@material-ui/core/styles';

interface Props {
  handleSelect: (selectTab: string) => void
  selectTab: string
  theme: any
}

function Footer({ handleSelect, selectTab, theme }: Props) {
  const { themeMode } = theme;
  return (
    <StyledFooter theme={themeMode}>
      <StyledFooterContainer>
        <StyledMenu onClick={() => handleSelect("home")}>
          <HomeIcon color={selectTab === "home" ? "inherit" : "disabled"} />홈
        </StyledMenu>
        <StyledMenu onClick={() => handleSelect("more")}>
          <MoreHorizIcon
            color={selectTab === "more" ? "inherit" : "disabled"}
          />
          더보기
        </StyledMenu>
      </StyledFooterContainer>
    </StyledFooter>
  )
}

export default withTheme(Footer);

const StyledFooter = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.buttonBackgounrd };
  box-shadow: 0 -5px 5px -5px #333;
`

const StyledFooterContainer = styled.div`
  display: flex;
  padding: 0 150px;
  @media ${device.mobileL} {
    padding: 0 15px;
  }
`

const StyledMenu = styled(Button)`
  width: 100%;
  height: 50px;
  padding: 0 !important;
  & > span {
    display: flex;
    flex-direction: column;
    font-size: 12px;
  }
`
