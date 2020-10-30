import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ActionCreator } from '../redux/actions';
import { IProductState } from '../redux/types/reducers';

export const useCounter = (
  initValue: number,
): [number, Dispatch<SetStateAction<number>>] => {
  const quantityState = useSelector(
    (state: { productState: IProductState }) => state?.productState?.quantity,
  );
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState<number>(quantityState || initValue);

  useEffect(() => {
    dispatch(ActionCreator.setQuantity(quantity));
  }, [quantity, dispatch]);

  return [quantity, setQuantity];
};
