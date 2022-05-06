import { ADD_CHAT } from "../chats/actions";
import { ADD_MESSAGE, CLEAR_MESSAGES_FROM_CHAT } from "./actions";


const inititalState = [];

export const messagesReducer = (state = inititalState, {type, payload})=> {
    switch (type){
        case ADD_MESSAGE:{
            return {...state, 
                [payload.chatId]: [...state[payload.chatId], payload.newMsg]}   
        }
        case ADD_CHAT:{
            return{
                ...state,
                [payload.id]:[],
            }
        }
        case CLEAR_MESSAGES_FROM_CHAT:{
            const copy = {...state}
            delete copy[payload];

            return copy
        }
        default:
            return state;
    }
}