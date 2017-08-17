/**
 * GitWebHookController
 *
 * @description :: Server-side logic for managing Gitwebhooks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var request = require('request');
module.exports = {

    createWebHook:function(req,res){
        var values = req.allParams();        
    },
    listenWebHook:function(req,res){
        var values = req.allParams();
        var listenUrl = 'https://githubwebhookapp.herokuapp.com/githubwebhook/printWebHookResponse';
        var body = {data:req.headers};        
        var options = {url: url,body: body,method: 'post',json:true}
        request(options,function(err,response,body){
            console.log(err,"err");
            console.log(response,"response");
            console.log(body,"body");
        });
    },
    printWebHookResponse:function(req,res){
        var values = req.allParams();
    }
};

