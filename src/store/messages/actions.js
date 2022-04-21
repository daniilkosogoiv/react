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
})
