import React, { useEffect } from "react"
import styled from "styled-components"
import kakaoShape from "../../images/kakao_shape.png"

// kakao를 글로벌로 선언
declare global {
  interface Window {
    Kakao: any
  }
}

function KakaoShareButton() {
  const kakao = window.Kakao
  useEffect(() => {
    if (kakao) {
      console.log(window.location.href)
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.GATSBY_APP_KAKAO_KEY)
      }
      kakao.Link.createDefaultButton({
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "라이어게임🕵🏻",
          description: "#라이어게임 #단어마피아",
          imageUrl: process.env.GATSBY_KAKAO_SHARE_IMAGE_URL,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
          {
            title: "앱으로 보기",
            link: {
              webUrl: `${window.location.href}redirect`,
              mobileWebUrl: `${window.location.href}redirect`,
            },
          },
        ],
      })
    }
  }, [kakao])

  return (
    <StyledKakaoButton id="kakao-link-btn">
      <StyledKakaoShape src={kakaoShape} />
      Kakao&nbsp;Share
    </StyledKakaoButton>
  )
}

export default KakaoShareButton

const StyledKakaoShape = styled.img`
  width: 18px;
  height: 16px;
`

const StyledKakaoButton = styled.button`
  width: 100%;
  padding: 15px 20px;
  background-color: #fee500;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2);
  border: 1px;
  border-radius: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  & > ${StyledKakaoShape} {
    margin-right: 5px;
  }
`
