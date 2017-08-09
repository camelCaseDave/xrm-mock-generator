(function (undefined) {
    "use strict";

    var XrmMock = require("xrm-mock");
    var Attribute = function () {};

    var createAttribute = function (name, value) {
        var attribute = new XrmMock.AttributeMock({
            name: name,
            value: value,
            isDirty: false,
            submitMode: "dirty"
        });

        return attribute;
    };

    var addAttribute = function (attribute) {
        var attributes = Xrm.Page.data.entity.attributes.get();
        attributes.push(attribute);
    };

    Attribute.prototype.createBool = function (name, value) {
        var attribute = createAttribute(name || "", value || false);
        var boolAttribute = new XrmMock.BooleanAttributeMock(attribute);

        return addAttribute(boolAttribute);
    };

    Attribute.prototype.createDate = function (name, value) {
        var attribute = createAttribute(name || "", value || new Date());
        var dateAttribute = new XrmMock.DateAttributeMock({
            attribute: attribute,
            dateAttributeFormat: "date"
        });

        return addAttribute(dateAttribute);
    }

    Attribute.prototype.createDateTime = function (name, value) {
        var attribute = createAttribute(name || "", value || new Date());
        var dateAttribute = new XrmMock.DateAttributeMock({
            attribute: attribute,
            dateAttributeFormat: "datetime"
        });

        return addAttribute(dateAttribute);
    }

    Attribute.prototype.createNumber = function (name, value, min, max, precision) {
        var attribute = createAttribute(name || "", value || 0);
        var numberAttribute = new XrmMock.NumberAttributeMock(attribute, null, "none", min || 0, max || 0, precision || 1);

        return addAttribute(numberAttribute);
    };

    Attribute.prototype.createOptionSet = function (name, options) {
        
        var optionSetOptions = [];
        if (options && options.length > 0) {
            for (var i = 0; i < options.length; i++) {
                var option = options[i];
                optionSetOptions.push(new XrmMock.OptionSetValueMock(option.name, option.value));
            }
        }

        var attribute = createAttribute(name, options[0]);
        var enumAttribute = new XrmMock.EnumAttributeMock(attribute);

        var optionSetAttribute = new XrmMock.OptionSetAttributeMock(enumAttribute, optionSetOptions);

        return addAttribute(optionSetAttribute);
    };

    Attribute.prototype.createOptionSetOption = function (name, value) {
        return new XrmMock.OptionSetValueMock(name, value);
    };

    Attribute.prototype.createString = function (name, value, format, maxLength) {
        var attribute = createAttribute(name, value);
        var stringAttribute = new XrmMock.StringAttributeMock(attribute, format || "text", maxLength || 100);

        addAttribute(stringAttribute);

        return stringAttribute;
    };

    module.exports = new Attribute();
}());