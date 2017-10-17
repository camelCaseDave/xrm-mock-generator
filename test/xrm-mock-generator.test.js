describe("XrmMockGenerator", function () {
    var XrmMockGenerator = require("../src/xrm-mock-generator.js");

    beforeEach(function () {
        XrmMockGenerator.initialise();
    });

    it("should exist", function () {
        expect(XrmMockGenerator).toBeDefined();
    });

    it("should initialise", function () {
        expect(Xrm).toBeDefined();
    });

    it("should create Xrm.Page", function () {
        expect(Xrm.Page).toBeDefined();
    });

    it("should create Xrm.Page.data", function () {
        expect(Xrm.Page.data).toBeDefined();
    });

    it("should create Xrm.Page.data.entity", function () {
        expect(Xrm.Page.data.entity).toBeDefined();
    });

    it("should create an empty array of attributes", function () {
        expect(Xrm.Page.data.entity.attributes).toBeDefined();
        expect(Xrm.Page.data.entity.attributes.getLength()).toBe(0);
    });

    it("should add an attribute", function () {
        var attribute = XrmMockGenerator.Attribute.createString("firstname", "Joe");
        expect(attribute).toBeDefined();
        expect(Xrm.Page.getAttribute("firstname").getValue()).toBe("Joe");
    });
});