describe("XrmMockGenerator", function () {
    var XrmMockGenerator = require("../src/xrm-mock-generator.js");

    it("should exist", function () {
        expect(XrmMockGenerator).toBeDefined();
    });

    it("should initialise", function () {
        var Xrm = XrmMockGenerator.initialise();
    });

    it("should add an attribute", function () {
        var Xrm = XrmMockGenerator.initialise();
        var attribute = XrmMockGenerator.Attribute.createString("firstname", "Joe");
        XrmMockGenerator.addAttribute(attribute);
        expect(Xrm.Page.getAttribute("firstname").getValue()).toBe("Joe");
    });
});