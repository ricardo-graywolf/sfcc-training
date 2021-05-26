/**
 * Handles the simple form rendered by the SFRAForm.js controller.
 * ControllName: SFRAFormResult.js
 */

'use strict';
var server = require('server');
var URLUtils = require('dw/web/URLUtils');

server.post('Show', function(req, res, next) {
    var nickname = req.form.nickname;
    var Lastname = req.form.Lastname;
  res.render('/SFRAResultTemplate', {
    nickname : nickname, 
    Lastname : Lastname
    });
   next();
  });
 
  
module.exports = server.exports();
