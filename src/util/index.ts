const size = {
  // iphone 5 size
  mobileS: "320px",
  mobileM: "415px",
  mobileL: "800px"
};

// 일반사람 최소인원
export const MINIMUM_GENERAL_PERSON = 3;
// 일반사람 최대인원
export const MAXIMUM_GENERAL_PERSON = 20;

// 라이어 최소인원
export const MINIMUM_LIAR = 1;
// 라이어 최대인원
export const MAXIMUM_LIAR = 3;


// 미디어 쿼리
export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`
};