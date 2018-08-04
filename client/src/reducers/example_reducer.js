import { FETCH_EXAMPLE } from '../actions/types';

export default function (state = [], action){
    console.log(action);
    switch(action.type){
        case FETCH_EXAMPLE:
            return action.payload;
        default: 
            return state;
    }
}