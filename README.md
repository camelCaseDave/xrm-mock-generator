## :book: xrm-mock-generator

Generates a mock Xrm.Page object.

Commonly used by `xrm-mock` to test Dynamics 365 client-side customisations.

## Usage

 - install  via `npm install xrm-mock-generator`
 
 - import `var XrmMockGenerator = require("xrm-mock-generator");`
 
 - initialise a global Xrm object `var Xrm = XrmMockGenerator.initialise();`
 
 You now have a global `Xrm` object, as if you had loaded a form in CRM.
 
### Add additional attributes

Create a <b>string</b> attribute and add it to global.Xrm

```javascript
var stringAttribute = XrmMockGenerator.Attribute.createString("firstname", "Joe");
```    
#### Boolean Attribute
```javascript
var boolAttribute = XrmMockGenerator.Attribute.createBool("new_havingFun", true);
```
#### Date Attribute
```javascript
var dateAttribute = XrmMockGenerator.Attribute.createDate("birthdate", new Date(1980, 12, 25));
```
#### DateTime Attribute
```javascript
var dateTimeAttribute = XrmMockGenerator.Attribute.createDateTime("birthdate", new Date(1980, 12, 25));
```
#### Number Attribute
```javascript
var numberAttribute = XrmMockGenerator.Attribute.createNumber("units", 2, 0, 10, 0);
```
#### OptionSet Attribute
```javascript
var optionSetAttribute = XrmMockGenerator.Attribute.createOptionSet("countries", [
    { "Austria" : 0 },
    { "France", : 1 },
    { "Spain", 2 }
]);
```
#### Lookup Attribute
```javascript
var lookupAttribute = XrmMockGenerator.Attribute.createLookup("primarycustomerid", {
  id: "{00000000-0000-0000-0000-000000000000}",
  entityType: "contact",
  name: "Joe Bloggs"
});
```

## Example
This example showcases a contact form that changes the contact's firstname from Joe to Bob when the form is loaded.

#### src/contact.js
```javascript
(function () {
    "use strict";
    
    var Contact = () => {  };
    
    Contact.prototype.onLoad = function () {
        Xrm.Page.getAttribute("firstname").setValue("Bob");
    }
    
    // node
    module.exports = new Contact();
    
    // browser
    global.Contact = new Contact();    
}());
```
#### test/contact.test.js
```javascript
describe("Contact Form", () => {
    var XrmMockGenerator = require("xrm-mock-generator");
    var ContactForm = require("../src/contact.js");
    
    beforeEach(() => {
        XrmMockGenerator.initialise();
        XrmMockGenerator.createString("firstname", "Joe");
    });
    
    describe("default", () => {
        expect(Xrm.Page.getAttribute("firstname").getValue()).toBe("Joe"); // true
    });
    
    describe("onLoad", () => {
        Contact.onLoad();
        
        expect(Xrm.Page.getAttribute("firstname").getValue()).toBe("Bob"); // true
    });
});
```

## :heart:  Roadmap
 - Automatically create attribute metadata from a Dynamics 365 instance
