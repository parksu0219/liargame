const PUSH_GENERAL_PERSON = "playInfo/PUSH_GENERAL_PERSON" as const;
const PUSH_LIAR = "playInfo/PUSH_LIAR" as const;

export type State = {
  generalPerson: number;
  liar: number;
};

export const initialState: State = {
  generalPerson: 5,
  liar: 1,
};

// reducer
export default function PlayInfoReducer(
  state: State = initialState,
  action: Action
) {
  switch (action.type) {
    case PUSH_GENERAL_PERSON:
      return {
        ...state,
        generalPerson: action.payload.generalPerson,
      };
    case PUSH_LIAR:
      return {
        ...state,
        liar: action.payload.liar,
      };
    default:
      return state;
  }
}
type Action =
  | ReturnType<typeof pushGeneralPerson>
  | ReturnType<typeof pushLiar>;

export const pushGeneralPerson = (generalPerson: number) => {
  return {
    type: PUSH_GENERAL_PERSON,
    payload: {
      generalPerson,
    },
  };
};

export const pushLiar = (liar: number) => {
  return {
    type: PUSH_LIAR,
    payload: {
      liar,
    },
  };
};
