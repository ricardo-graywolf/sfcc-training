'use strict';
var server = require('server');


server.get('Show', function (req, res, next){
    var Logger = require('dw/system/Logger'); 
    var customLog = Logger.getLogger("MyCustomLog", "testCategory"); 
    customLog.info("Custom Log Ricardo");
    var infoLog = "Custom Log Ricardo";
    res.render('/exercises/logRender', {
        info : infoLog
    });

    next();
}
);

module.exports = server.exports();