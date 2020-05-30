import React from "react";
import Admin from "react-crud-admin";
import "react-crud-admin/css"; //optional css import
 
export default class Example extends Admin {
  constructor() {
    super();
    this.name = "Contact"; // name of the objects
    this.name_plural = "Contacts"; // name of the objects in plural
    this.list_display_links = ["name"]; // which property of the object is clickable
    this.list_display = ["name", "number", "address.street"]; // a list of properties of the object to displayed on the list display page
  }
  get_queryset(page_number, list_per_page, queryset) {
    // the actual array containing objects to be displayed
    return [
      {
        id: 1,
        name: "Joe Next",
        number: "08939303003",
        address: { street: "Hallmark Street" }
      },
      {
        id: 2,
        name: "Isa Yoll",
        number: "0908839202",
        address: { street: "Barbican Street" }
      }
    ];
  }
}