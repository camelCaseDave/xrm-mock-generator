(function (undefined) {
    "use strict";

    var XrmMock = require("xrm-mock");
    var Form = function () {};

    Form.prototype.createBlankForm = function () {
        var formItem = new XrmMock.FormItemMock({
            id: "{00000000-0000-0000-0000-000000000000}",
            label: "",
            formType: 1,
            currentItem: true
        });

        return formItem;
    };

    module.exports = new Form();
}());