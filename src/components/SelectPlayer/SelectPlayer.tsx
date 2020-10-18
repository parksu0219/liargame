import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { AuthContext } from "../../firebase/Auth";
import usePlayInfo from "../../hooks/PlayInfo";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import Header from "../Header";
import CardButton  from '../CardButton';
import { device } from "../../util";
import liarIcon from "../../images/liar_icon.png";


function SelectPlayer(props) {
  const { category } = props;
  const { word = [] } = useContext(AuthContext);
  const { generalPerson, liar } = usePlayInfo();
  const [step, setStep] = useState<number>(1); //순서
  const [isDisplay, setDisplay] = useState<boolean>(false); //단어 표시 유무
  const [selectData, setSelectData] = useState<any>({
    worsds: [],
    emoji: "",
    name: "",
  }); // 선택된 단어 정보
  const [players, setPlayers] = useState<string[]>([]); // 플레이어 정보
  const selectWord = players.find(
    (_, index: number) => index === step - 1
  ) as string;
  const isStart = generalPerson > step - 1;

  useEffect(() => {
    initialState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //초기화
  function initialState() {
    // const word = [{name:"a",name_en:"a",emoji:"a",words:["abc"]}];
    const select = word.filter((item: any) => {
      return category === item.name;
    })[0] as any;
    const randomNumber = Math.floor(Math.random() * select.words.length);
    const playersArray = shuffle(
      Array(generalPerson)
        .fill("")
        .map((_, index: number) => {
          if (index < liar) {
            return "";
          }
          return select.words[randomNumber];
        })
    );

    setStep(1);
    setDisplay(false);
    setSelectData(select);
    setPlayers(playersArray);
  }

  //섞기
  function shuffle(array: any) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // 각 플레이어 확인 버튼 이벤트
  function onClick() {
    setDisplay(!isDisplay);
    if (isDisplay && step !== generalPerson + 1) {
      setStep(step + 1);
    }
  }

  return (
    <StyledWrapper>
      <Header word={`${selectData.emoji} ${selectData.name}`} />
      <StyledMainSection>
        <StyledStepTitle>
          {isStart && (
            <React.Fragment>
              당신은&nbsp;<StyledHighLight>{step}번째</StyledHighLight>
              &nbsp;플레이어&nbsp;입니다.
            </React.Fragment>
          )}
        </StyledStepTitle>
        <StyledPlayerButtonWrapper>
          {isDisplay && selectWord === "" && <StyledLiarIcon />}
          <CardButton onClick={onClick} cardSize="player">
            {isStart ? (
              isDisplay ? (
                selectWord === "" ? (
                  <React.Fragment>
                    당신은&nbsp;<StyledHighLight>라이어</StyledHighLight>
                    &nbsp;입니다.
                  </React.Fragment>
                ) : (
                  selectWord
                )
              ) : (
                "제시어 확인하기"
              )
            ) : (
              <React.Fragment>
                <StyledHighLight>라이어</StyledHighLight>&nbsp;찾기&nbsp;시작!
              </React.Fragment>
            )}
          </CardButton>
        </StyledPlayerButtonWrapper>
        {isStart ? (
          isDisplay ? (
            // eslint-disable-next-line jsx-a11y/accessible-emoji
            <StyledNoticeText>
              누른&nbsp;후에&nbsp;다음&nbsp;사람에게&nbsp;넘겨주세요&nbsp;👆
            </StyledNoticeText>
          ) : (
            ""
          )
        ) : (
          <StyledRestartButton onClick={() => initialState()}>
            다시하기
            <RefreshIcon />
          </StyledRestartButton>
        )}
      </StyledMainSection>
    </StyledWrapper>
  );
}

export default SelectPlayer;

const StyledWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

const StyledMainSection = styled.div`
  padding: 17% 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media ${device.mobileL} {
    padding: 30% 15px;
  }
`;

const StyledStepTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: black;
  min-height: 24px;
`;

const StyledHighLight = styled.span`
  color: #f4233c;
`;

const StyledNoticeText = styled.p`
  color: #000000;
  font-weight: bold;
  margin-top: 20px;
`;

const StyledRestartButton = styled(Button)`
  display: inline-flex;
  align-items: center;
  margin-top: 50px !important;
  color: #000000;
  font-size: 18px;
  font-weight: bold;
`;

const StyledLiarIcon = styled.div`
  width: 50px;
  height: 50px;
  background-size: 100% 100%;
  background-image: url(${liarIcon});
`;

const StyledPlayerButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  min-height: 200px;
  margin-top: 30px;
`;

