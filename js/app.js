/* your code should go here */


// You can modify this object, add functions that you need
var MailModel = {
    /**
     * Initialises the model with the "database" of filter rules
     * and messages. This function is already implemented.
     */
    init : function(){
        this.rules = rules;
        this.messages = msgs;
    }, 
    
    getAllMsg: function (){
        return this.messages;
    },
    /**
     * Filters out messages in the "database" that match the spam rules.
     * @return an array of messages, excluding those that match the filter rules.
     */
    filter : function(){
        var res=[];
        for(var i=0;i<this.messages.length;i++){
            if(MailModel.contains(this.messages[i])){
                res.push(this.messages[i]);
            }
        }
        return res;
    },
    
    contains : function(msg){
        for(var i=0;i<this.rules.length;i++){
            if(msg.from.indexOf(this.rules[i].from)>-1 || msg.subject.indexOf(this.rules[i].subject)>-1){
                return false;
            }
        }
        
        return true;
    }
    
    
    
};

var octopus = {
    
    
    getAllMsgs: function() {
        return MailModel.getAllMsg();
    },
    
    getMsgsFilter: function() {
        return MailModel.filter();
    },
    
    init: function() {
        MailModel.init();
        view.init();
     }
};


var view = {
    init: function() {
        this.result = $('.result');
        $(".btn-filter").click(function(){
            view.render(octopus.getMsgsFilter());
        });
        view.render(octopus.getAllMsgs());
    },
    render: function(msgs){
        var htmlStr = '';
        msgs.forEach(function(msg){
            htmlStr += '<li>'+msg.from +'</li>';
        });
        this.result.html( htmlStr );
    }
};


// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]


// We suggest to use js patters. 
// you can add here your views and controllers if you decide to do so.



$(document).ready(function(){
    octopus.init();
});
