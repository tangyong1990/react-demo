
//初始用户歌单
export function init(data){
    return {
        type: 'INIT_DATA',
        data
    }
}
//用户选择的歌曲
export function song(index){
    return {
        type: 'CHOSE_SONG',
        index
    }
}
//进度条
export function pass(num){
    return {
        type: 'PASS_TIME',
        num
    }
}
//用户数据
export function user(acc){
    return {
        type: 'USER_INFO',
        acc
    }
}