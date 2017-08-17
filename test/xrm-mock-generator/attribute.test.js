describe("XrmMockGenerator.Attribute", function () {
    var XrmMock = require("xrm-mock");
    var XrmMockGenerator = require("../../src/xrm-mock-generator.js");

    beforeEach(function () {
        XrmMockGenerator.initialise();
    });

    it("should exist", function () {
        expect(XrmMockGenerator.Attribute).toBeDefined();
    });

    it("should create a bool", function () {
        XrmMockGenerator.Attribute.createBool("new_havingfun", true);
        expect(Xrm.Page.getAttribute("new_havingfun").getValue()).toBe(true);
    });

    it("should create a date", function () {
        var date = new Date(2017, 1, 1);
        XrmMockGenerator.Attribute.createDate("birthdate", date);
        expect(Xrm.Page.getAttribute("birthdate").getValue()).toBe(date);
    });

    it("should create a datetime", function () {
        var date = new Date(2017, 1, 1);
        XrmMockGenerator.Attribute.createDateTime("birthdate", date);
        expect(Xrm.Page.getAttribute("birthdate").getValue()).toBe(date);
    });

    it("should create a lookup", function () {
        var lookup = { id: "5", entityType: "contact", name: "Joe" };
        XrmMockGenerator.Attribute.createLookup("primarycustomerid", lookup);        
        expect(Xrm.Page.getAttribute("primarycustomerid").getValue()[0].id).toBe("5");
    });
});