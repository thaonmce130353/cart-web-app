import * as types from '../constants/ActionTypes';
import * as messages from '../constants/Message';

var initState = messages.MSG_WELCOME;

const message = (state = initState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message;
        default: return state;
    }
}

export default message;
