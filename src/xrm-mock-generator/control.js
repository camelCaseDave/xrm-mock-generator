(function (undefined) {
    "use strict";

    var XrmMock = require("xrm-mock");
    var Ui = require("ui.js");

    var Control = function () {};    

    var createControl = function (name, label, isVisible, controlType) {
        var control = new XrmMock.ControlMock({
            name: name,
            controlType: controlType,
            uiLabelElement: Ui.createLabelElement(label),
            uiCanGetVisibleElement: Ui.createCanGetVisibleElement(isVisible)            
        });
    };

    Control.prototype.createStringControl = function (name, label, isVisible, isDisabled, attribute) {
        var stringControl = new XrmMock.StringControlMock(
            new XrmMock.AutoLookupControlMock(
                new XrmMock.StandardControlMock({
                    control: createControl(name, label, isVisible),
                    attribute: attribute,
                    disabled: isDisabled,
                    uiStandardElement: Ui.createStandardElement(labelElement, visibleElement)
                }),
                new XrmMock.UiKeyPressable()
            )
        );
    };

    module.exports = new Control();
}());