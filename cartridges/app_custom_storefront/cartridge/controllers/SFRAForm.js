/**
 * A simple form controller.
 *ControllName: SFRAForm.js
 */

'use strict';
var server = require('server');
var URLUtils = require('dw/web/URLUtils');
server.get('Show', function (req, res, next){
    var actionUrl = URLUtils.url('/SFRAFormResult-Show'); //sets the route to call for the form submit action
    var SFRAhelloform = server.forms.getForm('SFRAFormDef'); //creates empty JSON object using the form definition
    SFRAhelloform.clear(); 
    res.render('SFRATemplateForm', {
        actionUrl: actionUrl,
        SFRAhelloform: SFRAhelloform
    });

    next();
}
);

module.exports = server.exports();

