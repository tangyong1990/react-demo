import { combineReducers } from 'redux'

function initData (state = {}, action){
    switch(action.type){
        case 'INIT_DATA': return action.data;
        default: return state;
    }
}
function songIndex (state = 0, action){
    switch(action.type){
        case 'CHOSE_SONG': return action.index;
        default: return state;
    }
}
function percent(state=0,action){
    switch(action.type){
        case 'PASS_TIME': return action.num;
        default: return state;
    }
}
function user (state='',action){
    switch(action.type){
        case 'PASS_TIME': return action.num;
        default: return state;
    }
}
//合并reducer为一个大的reducer
export default combineReducers({
    initData,
    songIndex,
    percent
})