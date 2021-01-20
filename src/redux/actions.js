import {
    LOAD_UNITS,
    REQUEST,
    FAILURE,
    SUCCESS,
    UNITS_URL,
    DELETE_UNIT,
    ADD_UNIT,
    RENAME_UNIT,
    WS_API_GET,
} from './constants';

export const addUnit = ({ name, race }) => ({
    type: ADD_UNIT,
    generateId: 'id',
    payload: {
        name: name, 
        race: race,
    }
});

export const renameUnit = ({ newName, id }) => ({
        type: RENAME_UNIT,
        payload: {
            name: newName, 
            id,
        }
});

export const deleteUnit = id => ({
    type: DELETE_UNIT,
    payload: id,
});

export const loadUnits = () => (dispatch) => {
    let socket = new WebSocket(UNITS_URL);

    socket.onopen = function(e) {
        socket.send({cmd: WS_API_GET});
        dispatch({type: LOAD_UNITS + REQUEST})
    };

    socket.onmessage = function(event) {
        const response = event.data;
        dispatch({type: LOAD_UNITS + SUCCESS, payload: response});
    };

    socket.onclose = function(event) {
        if (event.wasClean) {
            console.log(`close: ${event.code} reason=${event.reason}`);
        } else {
            console.log('disconnection');
        }
    };

    socket.onerror = function(error) {
        console.log(`[error] ${error.message}`);
        dispatch({type: LOAD_UNITS + FAILURE, payload: error});
    };
}