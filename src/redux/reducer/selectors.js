import {
    HUMAN,
    DWORF,
    ELF,
    HOBBIT
} from '../constants'

export const unitsLoadingSelector = (state) => state.units.loading;
export const unitsLoadedSelector = (state) => state.units.loaded;
export const unitsLoadingErrorSelector = (state) => state.units.error;

export const hobbitSelector = (state) => state.units.entities.filter(item => item.race === HOBBIT);
export const elfSelector = (state) => state.units.entities.filter(item => item.race === ELF);
export const dworfSelector = (state) => state.units.entities.filter(item => item.race === DWORF);
export const humanSelector = (state) => state.units.entities.filter(item => item.race === HUMAN);



