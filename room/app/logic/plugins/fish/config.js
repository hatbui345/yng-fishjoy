module.exports = {
    ROBOT:{
        VACANCY_QUERY_TIMEOUT:10000, //空位查询周期
        FIRE_TIMEOUT:500, //开火周期
        WEAPON_LEVEL_RANDOM:[-3,8], //武器等级浮动范围
        ROLE_LEVEL_RANDOM:[-10,20], //角色等级浮动范围
        GOLD_DEFAULT:500000, //金币默认值
        PEARL_DEFAULT:100, //钻石默认值
        GOLD_RANDOM:[-20, 100], //金币浮动范围
        GOLD_STEP:50000, //金币浮动步长
        PEARL_RANDOM:[-10, 20], //钻石浮动范围
        PEARL_STEP:100, //钻石浮动步长
        EXP_DEFAULT:100, //默认经验值
        VIP_DEFAULT:1, //默认vip
        JOIN_TIMEOUT:20000, //单位(秒:ms)
    },
    PLAYER:{
        OFFLINE_TIMEOUT:10000,//离线玩家踢出游戏超时时间，单位(秒:ms)
        KICK_OFFLINE_CHECK_TIMEOUT:10000 //离线玩家超时踢出检查周期 单位(秒:ms)
    }
}