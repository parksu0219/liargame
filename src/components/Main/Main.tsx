import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router";
import styled from "styled-components";
// import { AuthContext } from "../../firebase/Auth";
import {
  device,
  MINIMUM_GENERAL_PERSON,
  MAXIMUM_GENERAL_PERSON,
  MAXIMUM_LIAR,
  MINIMUM_LIAR,
} from "../../util";
import usePlayInfo from "../../hooks/PlayInfo";
import SelectCategory from "../SelectCategory";
import CountButton from "../CountButton";
import Footer from "../Footer";
import More from "../More";
// import liarIcon from "../../images/liar_icon.png";

function Main() {
  const word = [{name:"a",name_en:"a",emoji:"a"}];
  // const { word = [] } = useContext(AuthContext);
  const {
    insertGeneralPerson,
    insertLiar,
    liar,
    generalPerson,
  } = usePlayInfo();
  const [selectTab, setTab] = useState<string>("home");

  useEffect(() => {
    console.log("word");
    console.log(word); // firebase data
    insertGeneralPerson(5);
    insertLiar(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleSelect(selectTab: string) {
    setTab(selectTab);
  }

  return (
    <StyledWrapper>
      aaa
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
              <StyledLiarIcon />
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
                return <SelectCategory key={index} data={data} />;
              })}
          </StyledSection>
        </React.Fragment>
      ) : (
        <More/>
      )}
      <Footer handleSelect={handleSelect} selectTab={selectTab} />
    </StyledWrapper>
  );
}

export default withRouter(Main);

const StyledWrapper = styled.div`
  padding: 15px 150px 70px;
  @media ${device.mobileL} {
    padding: 15px 15px 70px;
  }
`;

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
`;

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
`;

const StyledLiarIcon = styled.div`
  width: 50px;
  height: 50px;
  background-size: 100% 100%;
`;

const StyledLiarButtonWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;
/* background-image: url(${liarIcon}); */