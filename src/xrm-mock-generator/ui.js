(function (undefined) {
    "use strict";

    var XrmMock = require("xrm-mock");
    var Ui = function () {};

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