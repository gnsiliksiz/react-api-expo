import { combineReducers } from 'redux';
import { EXCHANGE_AVAIBLE } from "../action/actions"

let dataState = { exchanges: []  };
export default function dataReducer(state = dataState, action){
	console.log(action.type); 
    switch (action.type) {
    	case EXCHANGE_AVAIBLE:
           return { exchanges: action.data.exchanges };
        default:
           return state;
    }
	
}
