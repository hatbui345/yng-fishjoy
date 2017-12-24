﻿////////////////////////////////////////////////////////////////////////////////
// Skill Data Operation
// 技能数据的操作更新
// add_skill_log
////////////////////////////////////////////////////////////////////////////////

//==============================================================================
// import
//==============================================================================
//------------------------------------------------------------------------------
// 工具(Tool)
//------------------------------------------------------------------------------
var BuzzUtil = require('../../src/utils/BuzzUtil');
var buzz_skill = require('../../src/buzz/buzz_skill');
var buzz_cst_game = require('../../src/buzz/cst/buzz_cst_game');
var data_util = require('./data_util');

//------------------------------------------------------------------------------
// 缓存(Cache)
//------------------------------------------------------------------------------
var CacheLink = require('../../src/buzz/cache/CacheLink');

//------------------------------------------------------------------------------
// 配置表
//------------------------------------------------------------------------------
var api_map = require('../api_map');


//==============================================================================
// const
//==============================================================================
var DEBUG = 0;
var ERROR = 1;

var TAG = "【data_skill】";


//==============================================================================
// public
//==============================================================================

//------------------------------------------------------------------------------
// definition
//------------------------------------------------------------------------------
exports.add_skill_log = add_skill_log;
exports.useSkill = useSkill;

//------------------------------------------------------------------------------
// implement
//------------------------------------------------------------------------------

/**
 * 添加技能记录
 */
function add_skill_log(req, res) {
    data_util.request_info(req, "add_skill_log");
    var dataObj = {};
    if (!(dataObj = data_util.get_dao_data(req, res))) {
        return;
    }
     BuzzUtil.cacheLinkDataApi(dataObj, "add_skill_log");
    
    req.dao.addSkillLog(dataObj, function (err, msg) {
        if (err) {
            res.success({ type: 1, msg: '更新玩家技能数据失败', err: err });
        } else {
            if (msg == null) {
                msg = '更新玩家技能数据成功';
                res.success({ type: 1, msg: msg, data: 1 });
            }
            else {
                let result = msg[0];
                res.success({ type: 1, msg: '更新玩家技能数据成功', data: result });
            }
        }
    });
}

/**
 * 使用技能.
 */
function useSkill(req, res) {
    const FUNC = TAG + "useSkill() --- ";
    const HINT = "使用技能";
    //----------------------------------
    var aes = req.body.aes;
    var dataObj = data_util.parseDataObj(req, HINT);

    buzz_skill.useSkill(req, dataObj, function(err, result) {
        data_util.handleReturn(res, aes, err, result, HINT);
    });
}

//==============================================================================
// private
//==============================================================================

