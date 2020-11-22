const IS_DARKMODE = "setting/IS_DARKMODE" as const;

export type State = {
  isDarkMode: boolean;
};

export const initialState: State = {
  isDarkMode: false
};

// reducer
export default function SettingReducer(
  state: State = initialState,
  action: Action
) {
  switch (action.type) {
    case IS_DARKMODE:
      return {
        ...state,
        isDarkMode: action.payload.isDarkMode,
      };
    default:
      return state;
  }
}
type Action =
  | ReturnType<typeof toggleDarkMode>

export const toggleDarkMode = (isDarkMode: boolean) => {
  return {
    type: IS_DARKMODE,
    payload: {
        isDarkMode,
    },
  };
};
