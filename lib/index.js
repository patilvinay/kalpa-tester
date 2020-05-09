'use strict';

const kalpa=require("kalpa")
const path = require ("path")
const _= require("lodash")

let result=false
let _expected={}
const process= (obj,globalData) =>{
    var _obj=obj['kalpa-tester']
    result= _.isEqual(_obj,_expected)
}

const test= (param,expect) =>{

    let playbook={}
    let globalData={}

    globalData.playbookDir = path.resolve('.')
    playbook.rootData=param
    _expected=expect
    result=false;
    kalpa.process(playbook,globalData);
    return result;
}
exports.process=process;
exports.test=test;
