import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ActionCreator } from '../redux/actions';
import { IProductState } from '../redux/types/reducers';

export const useCounter = (initValue: number) => {
  const quantityState = useSelector(
    (state: { productState: IProductState }) => state?.productState?.quantity,
  );
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState<number>(
    quantityState ? quantityState : initValue,
  );

  useEffect(() => {
    dispatch(ActionCreator.setQuantity(quantity));
  }, [quantity, dispatch]);

  return [quantity, setQuantity];
};
