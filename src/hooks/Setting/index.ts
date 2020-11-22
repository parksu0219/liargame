import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { toggleDarkMode } from '../../modules/Setting';
import { useCallback } from 'react';

export default function useSetting() {
  // カスタムhooks
  const isDarkMode = useSelector((state: RootState) => state.setting.isDarkMode);
  const dispatch = useDispatch();
  
  const changedDarkMode = useCallback(
    (isDarkMode:boolean) => dispatch(toggleDarkMode(isDarkMode)),
    [dispatch]
  );

  return {
    isDarkMode,
    changedDarkMode
  };
}