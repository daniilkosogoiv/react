import { TOGGLE_CHECKBOX } from "./actions";

const inititalState = {
    showName: false,
    name:"Vera"
}

export const profileReducer = (state = inititalState, action)=> {
    switch (action.type){
        case TOGGLE_CHECKBOX:{
            return {
                ...state,
                showName: !state.showName
            };
        }
        default:
            return state;
    }
}