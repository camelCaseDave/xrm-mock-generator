(function (undefined) {
    "use strict";

    var XrmMock = require("xrm-mock");
    var Form = require("./form.js");
    var Attribute = require("./attribute.js");
    var Ui = require("./ui.js");

    var XrmMockGenerator = function () {};
    
    XrmMockGenerator.prototype.initialise = function () {
        var Xrm = new XrmMock.XrmStaticMock({
            page: new XrmMock.PageMock({
                context: new XrmMock.ContextMock({
                    userRoles: []
                }),
                data: new XrmMock.DataMock(new XrmMock.EntityMock(new XrmMock.ItemCollectionMock([]))),
                ui: Ui.createUi()
            })
        });

        return global.Xrm = Xrm;
    };
    
    module.exports = new XrmMockGenerator();
}());