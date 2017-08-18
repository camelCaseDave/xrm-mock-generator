(function (undefined) {
    "use strict";

    var XrmMock = require("xrm-mock");
    var Form = require("./form.js");

    var Ui = function () {};

    Ui.prototype.createUi = function () {
        return new XrmMock.UiMock({
            controls: new XrmMock.ItemCollectionMock([]),
            formSelector: new XrmMock.FormSelectorMock(new XrmMock.ItemCollectionMock([
                Form.createBlankForm()
            ]))
        });
    };

    Ui.prototype.createLabelElement = function (label) {
        return new XrmMock.UiLabelElementMock(label);
    };

    Ui.prototype.createCanGetVisibleElement = function (isVisible) {
        return new XrmMock.UiCanGetVisibleElementMock(isVisible);
    };

    Ui.prototype.createStandardElement = function (labelElement, visibleElement) {
        return new XrmMock.UiStandardElementMock(labelElement, visibleElement);
    };

    module.exports = new Ui();
}());