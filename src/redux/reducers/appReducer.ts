import C from '../constants';
import { ReducerTypes } from '../types/reducers';
import { ActionTypes } from '../types/actions';

const initState: ReducerTypes = {
  storeSynced: false,
};

export const appState = (state = initState, action: ActionTypes) => {
  switch (action.type) {
    case C.PRESET_STORE_SYNCED:
      return {
        ...state,
        storeSynced: action.type,
      };
    default:
      return state;
  }
};
