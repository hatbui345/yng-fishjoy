const Entity = require('./entity');
const pomelo = require('pomelo');
const messageService = require('../net/messageService')

class Player extends Entity{
    constructor(opts){
        super(opts);
        this._sid = opts.sid || '';
        this._uid = opts.uid || '';
    }

    get uid(){
        return this._uid;
    }

    get sid(){
        return this._sid;
    }

    set sid(value){
        this._sid = value;
    }

    send(route, msg){
        messageService.send(route, packMsg(msg), {uid: this._uid, sid: this._sid});
    }

}

module.exports = Player;