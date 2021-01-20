import produce from 'immer';
import { 
  LOAD_UNITS, 
  SUCCESS, 
  REQUEST, 
  FAILURE, 
  ADD_UNIT,
  DELETE_UNIT,
  RENAME_UNIT
} from '../constants';

const initialState = {
  loading: false,
  error: null,
  loaded: false,
  entities: {},
};

export const units = (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, error, key, payload } = action;

    switch (type) {
      case LOAD_UNITS + REQUEST: {
        draft.loading = true;
        draft.loaded = false;
        draft.error = null;
        break;
      }

      case LOAD_UNITS + FAILURE: {
        draft.loading = false;
        draft.loaded = false;
        draft.error = error;
        break;
      }

      case LOAD_UNITS + SUCCESS: {
        draft.loading = false;
        draft.loaded = true;
        draft.error = null;
        draft.entities = JSON.parse(payload);
        break;
      }

      case DELETE_UNIT: {
        const index = state.entities.findIndex(item => payload.id ===item.id )
        const buff = [...state.entities];
        buff.splice(index, 1)
        draft.entities = buff;
        break;
      }

      case RENAME_UNIT: {
        const index = state.entities.findIndex(item => payload.id ===item.id )
        draft.entities[index].name = payload.name;
        break;
      }

      case ADD_UNIT: {
          const newUnit = {
              id: key,
              name: payload.name,
              race: payload.race
          };
          return {
              ...state,
              entities: [
                ...state.entities,
                newUnit
              ]
            }
      }

      default:
        return state;
    }
  });