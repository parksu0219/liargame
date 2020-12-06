import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { AuthContext } from "../../firebase/Auth"
import "firebase/remote-config"
import "firebase/app"
import {
  device,
  MINIMUM_GENERAL_PERSON,
  MAXIMUM_GENERAL_PERSON,
  MAXIMUM_LIAR,
  MINIMUM_LIAR,
} from "../../util"
import usePlayInfo from "../../hooks/PlayInfo"
import useSetting from "../../hooks/Setting"
import SelectCategory from "../SelectCategory"
import CountButton from "../CountButton"
import Footer from "../Footer"
import More from "../More"
import liarIconBlack from "../../images/liar_icon_black.png"
import liarIconWhite from "../../images/liar_icon_white.png"

function Main() {
  const { isDarkMode } = useSetting();
  const { word = [{ emoji: "", name: "", name_en: "" }] } = useContext(
    AuthContext
  );
  const { insertGeneralPerson, insertLiar, liar, generalPerson } = usePlayInfo();
  const [selectTab, setTab] = useState<string>("home");

  useEffect(() => {
    console.log("word")
    console.log(word) // firebase data
  }, [])

  function handleSelect(selectTab: string) {
    setTab(selectTab)
  }

  return (
    <StyledWrapper>
      {selectTab === "home" ? (
        <React.Fragment>
          <StyledButtonWrapper>
            <CountButton
              count={generalPerson}
              onIncrease={() => insertGeneralPerson(generalPerson + 1)}
              onDecrease={() => insertGeneralPerson(generalPerson - 1)}
              maxCount={MAXIMUM_GENERAL_PERSON}
              minCount={MINIMUM_GENERAL_PERSON}
            />
            <StyledLiarButtonWrapper>
              <StyledLiarIcon isDarkMode={isDarkMode} />
              <CountButton
                count={liar}
                onIncrease={() => insertLiar(liar + 1)}
                onDecrease={() => insertLiar(liar - 1)}
                maxCount={MAXIMUM_LIAR}
                minCount={MINIMUM_LIAR}
              />
            </StyledLiarButtonWrapper>
          </StyledButtonWrapper>
          <StyledSection>
            {word &&
              word.map((data: any, index: number) => {
                return <SelectCategory key={index} data={data} />
              })}
          </StyledSection>
        </React.Fragment>
      ) : (
        <More />
      )}
      <Footer handleSelect={handleSelect} selectTab={selectTab} />
    </StyledWrapper>
  )
}

export default Main

const StyledWrapper = styled.div`
  padding: 15px 150px 70px;
  @media ${device.mobileL} {
    padding: 15px 15px 70px;
  }
`

const StyledButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  & > * {
    width: 46%;
  }
  & > * + * {
    margin-left: 15px;
  }
`

const StyledSection = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  @media ${device.mobileL} {
    justify-content: center;
    & > li:nth-child(2n-1) {
      margin-right: 15px;
    }
  }
`

const StyledLiarIcon = styled.div`
  background-image: ${({isDarkMode}) => `url(${isDarkMode ? liarIconWhite : liarIconBlack})`};
  width: 50px;
  height: 50px;
  background-size: 100% 100%;
`

const StyledLiarButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`
