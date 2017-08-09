(function (undefined) {
    "use strict";

    var XrmMock = require("xrm-mock");
    var Form = require("./form.js");
    var Attribute = require("./attribute.js");

    var XrmMockGenerator = function () {};
    
    XrmMockGenerator.prototype.initialise = function () {
        var Xrm = new XrmMock.XrmStaticMock({
            page: new XrmMock.PageMock({
                context: new XrmMock.ContextMock({
                    userRoles: []
                }),
                data: new XrmMock.DataMock(new XrmMock.EntityMock(new XrmMock.ItemCollectionMock([]))),
                ui: new XrmMock.UiMock({
                    controls: new XrmMock.ItemCollectionMock([]),
                    formSelector: new XrmMock.FormSelectorMock(new XrmMock.ItemCollectionMock([
                        Form.createBlankForm()
                    ]))
                })
            })
        });

        return global.Xrm = Xrm;
    };
    
    module.exports = new XrmMockGenerator();
}());