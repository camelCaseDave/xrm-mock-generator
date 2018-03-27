(function(undefined) {
    "use strict";

    var XrmMockGenerator = require("./xrm-mock-generator/core.js");
    XrmMockGenerator.Attribute = require("./xrm-mock-generator/attribute.js");
    XrmMockGenerator.Control = require("./xrm-mock-generator/control.js");
    
    module.exports = XrmMockGenerator;
} ());