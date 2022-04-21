import { AUTHORS } from "../../utils/constants";

export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
export const CLEAR_MESSAGES_FROM_CHAT='MESSAGES::CLEAR_MESSAGES_FROM_CHAT'
export const addMessage= (newMsg, chatId) => ({
    type: ADD_MESSAGE,
    payload:{
        newMsg,
        chatId
    }
});

export const clearMessages = (chatId) => ({
    type: CLEAR_MESSAGES_FROM_CHAT,
    payload: chatId,
});

let timeout;

export const addMessageWithReplay = (newMsg, chatId) => (dispatch) => {
    if (newMsg?.author === AUTHORS.human) {
        clearTimeout(timeout)
        dispatch(addMessage(newMsg, chatId));
        timeout =setTimeout(() => {
          dispatch(
          addMessage({
            author: AUTHORS.robot,
            text: "This is a message from a robot",
            id: `msg-${Date.now()}`,
          }, 
          chatId
          ));
        }, 1000);
      };
}
