import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../modules';
import { pushGeneralPerson, pushLiar  } from '../../modules/PlayInfo';
import { useCallback } from 'react';

export default function usePlayInfo() {
  // カスタムhooks
  const generalPerson = useSelector((state: RootState) => state.playInfo.generalPerson);
  const liar = useSelector((state: RootState) => state.playInfo.liar);
  const dispatch = useDispatch();
  

  const insertGeneralPerson = useCallback(
    (generalPerson:number) => dispatch(pushGeneralPerson(generalPerson)),
    [dispatch]
  );

  const insertLiar = useCallback(
    (liar:number) => dispatch(pushLiar(liar)),
    [dispatch]
  );

  return {
    liar,
    generalPerson,
    insertGeneralPerson,
    insertLiar
  };
}