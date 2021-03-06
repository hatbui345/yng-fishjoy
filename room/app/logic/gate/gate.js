const event = require('../base/event');
const gateCmd = require('../../cmd/gateCmd');
const balanceCmd = require('../../cmd/balanceCmd');
const pomelo = require('pomelo');

class Gate{
    constructor(){
        event.on(gateCmd.request.queryEntry.route, this.onQueryEntry.bind(this));
    }

    start(){
        logger.info('网关服务启动成功');
    }

    stop(){
        logger.info('网关服务已经停止');
    }

    onQueryEntry(msg, session, cb){
        pomelo.app.rpc.balance.balanceRemote[balanceCmd.remote.getConnector.route](session, function (err, serverInfo) {
            if(err){
                utils.invokeCallback(cb, null, answer.respNoData(err));
                return;
            }
            utils.invokeCallback(cb, null, answer.respData(serverInfo, msg.enc))
        });
    }
}

module.exports = new Gate();